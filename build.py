#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "markdown>=3.6",
#     "jinja2>=3.1",
#     "python-frontmatter>=1.1",
# ]
# ///
"""
Build the berntson.io blog.

Reads `posts/*.md` (YAML frontmatter + markdown body), renders each post
to `blog/<slug>/index.html`, writes a listing at `blog/index.html`, and
an Atom feed at `blog/feed.xml`.

Usage:
    uv run build.py            # build once
    uv run build.py --watch    # rebuild on changes (requires `watchfiles`)

Frontmatter schema (all fields optional except title and date):

    ---
    title: "Post Title"
    date: 2026-05-16
    description: "Optional one-line blurb shown on the listing and in RSS."
    draft: false       # if true, skipped
    slug: custom-slug  # defaults to filename without `.md` and date prefix
    math: false        # if true, KaTeX is loaded for this post
    ---
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from dataclasses import dataclass
from datetime import date as date_cls, datetime, timezone
from pathlib import Path

import frontmatter
import markdown
from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).parent.resolve()
POSTS_DIR = ROOT / "posts"
TEMPLATES_DIR = ROOT / "templates"
OUT_BLOG_DIR = ROOT / "blog"
SITE_URL = "https://berntson.io"

MD_EXTENSIONS = ["extra", "smarty", "sane_lists", "toc"]


@dataclass
class Post:
    slug: str
    title: str
    date: date_cls
    description: str
    body: str  # rendered HTML
    math: bool
    source: Path


def _coerce_date(value) -> date_cls:
    if isinstance(value, datetime):
        return value.date()
    if isinstance(value, date_cls):
        return value
    if isinstance(value, str):
        return datetime.fromisoformat(value).date()
    raise ValueError(f"Cannot parse date: {value!r}")


_DATE_PREFIX_RE = re.compile(r"^\d{4}-\d{2}-\d{2}-")


def _default_slug(path: Path) -> str:
    stem = path.stem
    return _DATE_PREFIX_RE.sub("", stem)


def load_posts() -> list[Post]:
    if not POSTS_DIR.exists():
        return []
    posts: list[Post] = []
    md = markdown.Markdown(extensions=MD_EXTENSIONS, output_format="html5")
    for path in sorted(POSTS_DIR.glob("*.md")):
        fm = frontmatter.load(path)
        if fm.get("draft", False):
            continue
        title = fm.get("title")
        date_raw = fm.get("date")
        if not title or not date_raw:
            print(f"  ! skipping {path.name}: missing title or date", file=sys.stderr)
            continue
        md.reset()
        body_html = md.convert(fm.content)
        posts.append(Post(
            slug=fm.get("slug") or _default_slug(path),
            title=str(title),
            date=_coerce_date(date_raw),
            description=str(fm.get("description") or "").strip(),
            body=body_html,
            math=bool(fm.get("math", False)),
            source=path,
        ))
    posts.sort(key=lambda p: p.date, reverse=True)
    return posts


def build(env: Environment) -> int:
    posts = load_posts()
    OUT_BLOG_DIR.mkdir(exist_ok=True)

    # Clean stale per-post directories
    existing_dirs = {p for p in OUT_BLOG_DIR.iterdir() if p.is_dir()}
    current_slugs = {p.slug for p in posts}
    for d in existing_dirs:
        if d.name not in current_slugs:
            shutil.rmtree(d)

    # Per-post pages
    post_tpl = env.get_template("post.html.j2")
    for p in posts:
        out_dir = OUT_BLOG_DIR / p.slug
        out_dir.mkdir(exist_ok=True)
        html = post_tpl.render(
            page_title=f"{p.title} — Daniel Berntson",
            description=p.description or None,
            title=p.title,
            date=p.date,
            body=p.body,
            math=p.math,
            root="../../",
        )
        (out_dir / "index.html").write_text(html, encoding="utf-8")
        print(f"  · blog/{p.slug}/index.html")

    # Listing
    index_tpl = env.get_template("index.html.j2")
    html = index_tpl.render(
        page_title="Blog — Daniel Berntson",
        description="Essays and notes by Daniel Berntson.",
        posts=posts,
        math=False,
        root="../",
    )
    (OUT_BLOG_DIR / "index.html").write_text(html, encoding="utf-8")
    print(f"  · blog/index.html")

    # Atom feed
    feed_tpl = env.get_template("feed.xml.j2")
    xml = feed_tpl.render(
        site_url=SITE_URL,
        posts=posts,
        updated=(posts[0].date.isoformat() + "T00:00:00Z") if posts
                else datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    )
    (OUT_BLOG_DIR / "feed.xml").write_text(xml, encoding="utf-8")
    print(f"  · blog/feed.xml")

    return len(posts)


def main() -> None:
    ap = argparse.ArgumentParser(description="Build the berntson.io blog.")
    ap.add_argument("--watch", action="store_true", help="Rebuild on file changes.")
    args = ap.parse_args()

    env = Environment(
        loader=FileSystemLoader(TEMPLATES_DIR),
        autoescape=select_autoescape(["html", "xml"]),
        trim_blocks=False,
        lstrip_blocks=False,
    )

    def _run():
        n = build(env)
        print(f"built {n} post{'s' if n != 1 else ''}")

    if args.watch:
        try:
            from watchfiles import watch
        except ImportError:
            print("--watch requires `watchfiles`. Install: uv add watchfiles", file=sys.stderr)
            sys.exit(1)
        _run()
        print(f"watching {POSTS_DIR} and {TEMPLATES_DIR}...")
        for _ in watch(POSTS_DIR, TEMPLATES_DIR):
            print("--- change detected, rebuilding ---")
            _run()
    else:
        _run()


if __name__ == "__main__":
    main()
