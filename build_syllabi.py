#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "PyYAML>=6.0",
#     "markdown>=3.6",
#     "jinja2>=3.1",
# ]
# ///
"""
Build syllabus HTML pages for berntson.io.

Scans `/Users/dgb/Documents/vault/Systems/projects/*/syllabus/data/course.yml`,
filters to actually-taught courses (those with `institution.name` set),
and renders each into `teaching/<slug>/index.html` using the site's
Inter / theme-token aesthetic.

Usage:
    uv run build_syllabi.py
    uv run build_syllabi.py --courses-root <path>   # override default scan root
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from dataclasses import dataclass
from datetime import date as date_cls, datetime
from pathlib import Path

import markdown as md_lib
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape

REPO_ROOT = Path(__file__).parent.resolve()
TEMPLATES_DIR = REPO_ROOT / "templates"
# Build into the v2 mockup; when v2 is promoted to root, these
# paths become /teaching/<slug>/ which is the canonical location.
OUT_TEACHING_DIR = REPO_ROOT / "redesign-v2" / "teaching"
# Sidebar links resolve relative to the page; pages are at
# redesign-v2/teaching/<slug>/ (depth 2) and
# redesign-v2/teaching/<slug>/syllabus/ (depth 3).
ROOT_FROM_OVERVIEW = "../../"
ROOT_FROM_SYLLABUS = "../../../"
DEFAULT_COURSES_ROOT = Path("/Users/dgb/Documents/vault/Systems/projects")

TERM_ORDER = {"Spring": 0, "Summer": 1, "Fall": 2, "Winter": 3}


@dataclass
class Course:
    slug: str
    title: str
    term: str
    year: int
    institution: str
    data: dict  # merged course + schedule + readings
    pdf_source: Path | None  # path to the built PDF, if it exists

    def sort_key(self) -> tuple:
        # Reverse-chronological: bigger year first, then later term first.
        term_word = self.term.split()[0] if self.term else ""
        return (-self.year, -TERM_ORDER.get(term_word, 0))


# ---------- Markdown rendering helpers ----------

_block_md = md_lib.Markdown(extensions=["extra", "smarty", "sane_lists"])


def _md_block(text: str) -> str:
    """Render markdown text → HTML (block-level)."""
    if not text:
        return ""
    _block_md.reset()
    return _block_md.convert(text)


def _md_inline(text: str) -> str:
    """Render markdown text → HTML, stripping the outer <p> wrap."""
    if not text:
        return ""
    html = _md_block(str(text)).strip()
    if html.startswith("<p>") and html.endswith("</p>") and html.count("<p>") == 1:
        html = html[3:-4]
    return html


def _cite_html(r: dict) -> str:
    """Render a reading record as an HTML citation."""
    parts = []
    author = r.get("author") or r.get("authors")
    title = r.get("title", "")
    year = r.get("year")
    url = r.get("url")
    venue = r.get("venue") or r.get("journal")
    note = r.get("note")

    if author:
        parts.append(f"{author}")
    if year:
        parts.append(f"({year})")
    if title:
        title_html = f"<a href=\"{url}\">{title}</a>" if url else title
        parts.append(f"<em>{title_html}</em>")
    if venue:
        parts.append(f"{venue}")

    out = ", ".join(parts)
    if note:
        out += f". <span class=\"reading-note\">{note}</span>"
    return out


# ---------- YAML loading ----------

def load_course(course_dir: Path) -> Course | None:
    data_dir = course_dir / "syllabus" / "data"
    course_yml = data_dir / "course.yml"
    if not course_yml.exists():
        return None
    with course_yml.open() as f:
        data = yaml.safe_load(f) or {}

    schedule_yml = data_dir / "schedule.yml"
    readings_yml = data_dir / "readings.yml"
    if schedule_yml.exists():
        with schedule_yml.open() as f:
            data.update(yaml.safe_load(f) or {})
    if readings_yml.exists():
        with readings_yml.open() as f:
            data.update(yaml.safe_load(f) or {})

    title = data.get("title", "Untitled")
    term = data.get("term", "")
    year = data.get("year", 0)
    institution = (data.get("institution") or {}).get("name") or ""

    if not institution:  # filter: only actually-taught courses
        return None

    # Look for a built PDF in the conventional location.
    pdf_source = None
    for variant in ("web", "latex"):
        candidate = course_dir / "syllabus" / "build" / variant / "syllabus.pdf"
        if candidate.exists():
            pdf_source = candidate
            break

    return Course(
        slug=course_dir.name,
        title=title,
        term=str(term),
        year=int(year) if year else 0,
        institution=institution,
        data=data,
        pdf_source=pdf_source,
    )


def discover_courses(root: Path) -> list[Course]:
    courses: list[Course] = []
    for course_dir in sorted(root.glob("*")):
        if not course_dir.is_dir():
            continue
        if not (course_dir / "syllabus" / "data" / "course.yml").exists():
            continue
        c = load_course(course_dir)
        if c is not None:
            courses.append(c)
    courses.sort(key=Course.sort_key)
    return courses


# ---------- Render ----------

def render(courses: list[Course]) -> None:
    env = Environment(
        loader=FileSystemLoader(TEMPLATES_DIR),
        autoescape=select_autoescape(["html", "xml"]),
        trim_blocks=False,
        lstrip_blocks=False,
    )
    env.filters["md"] = _md_block
    env.filters["md_inline"] = _md_inline
    env.filters["cite_html"] = _cite_html

    overview_tpl = env.get_template("course_overview.html.j2")
    syllabus_tpl = env.get_template("syllabus.html.j2")

    OUT_TEACHING_DIR.mkdir(parents=True, exist_ok=True)

    for c in courses:
        readings = (c.data.get("readings") or [])
        readings_by_key = {r.get("key"): r for r in readings if r.get("key")}

        course_dir = OUT_TEACHING_DIR / c.slug
        syll_dir = course_dir / "syllabus"
        course_dir.mkdir(parents=True, exist_ok=True)
        syll_dir.mkdir(parents=True, exist_ok=True)

        # Copy PDF if present, so the overview can offer a download link.
        has_pdf = False
        if c.pdf_source is not None:
            shutil.copy2(c.pdf_source, course_dir / "syllabus.pdf")
            has_pdf = True

        # Course-overview page: redesign-v2/teaching/<slug>/index.html
        overview_html = overview_tpl.render(
            data=c.data,
            has_pdf=has_pdf,
            root=ROOT_FROM_OVERVIEW,
            current="teaching",
        )
        (course_dir / "index.html").write_text(overview_html, encoding="utf-8")

        # Full HTML syllabus: redesign-v2/teaching/<slug>/syllabus/index.html
        syllabus_html = syllabus_tpl.render(
            data=c.data,
            readings_by_key=readings_by_key,
            root=ROOT_FROM_SYLLABUS,
            current="teaching",
        )
        (syll_dir / "index.html").write_text(syllabus_html, encoding="utf-8")

        pdf_note = " + PDF" if has_pdf else ""
        print(f"  · teaching/{c.slug}/  ({c.term}){pdf_note}")

    # Surface course list (for updating the home page or sanity-checking).
    print()
    print(f"built {len(courses)} syllabi:")
    for c in courses:
        print(f"  - {c.title} — {c.term} — {c.institution}  [{c.slug}]")


def main() -> None:
    ap = argparse.ArgumentParser(description="Build syllabus HTML pages.")
    ap.add_argument("--courses-root", type=Path, default=DEFAULT_COURSES_ROOT,
                    help="Directory containing course project folders.")
    args = ap.parse_args()

    courses = discover_courses(args.courses_root)
    if not courses:
        print(f"No courses found under {args.courses_root}", file=sys.stderr)
        sys.exit(1)
    render(courses)


if __name__ == "__main__":
    main()
