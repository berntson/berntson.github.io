// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll reveal — fade sections in as they enter the viewport
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  for (const el of reveals) io.observe(el);
} else {
  // Fallback for very old browsers — just show everything
  for (const el of reveals) el.classList.add("is-visible");
}
