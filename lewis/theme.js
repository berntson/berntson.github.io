/* Dark mode: set theme before paint (no flash), then inject a toggle. */
(function () {
  function pref() {
    try {
      var t = localStorage.getItem('theme');
      if (t === 'dark' || t === 'light') return t;
    } catch (e) {}
    try {
      if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) {}
    return 'light';
  }
  document.documentElement.dataset.theme = pref();

  function icon() { return document.documentElement.dataset.theme === 'dark' ? '☀' : '☾'; } // ☀ / ☾

  function inject() {
    if (document.querySelector('.themebtn')) return;
    var b = document.createElement('button');
    b.className = 'themebtn';
    b.type = 'button';
    b.setAttribute('aria-label', 'Toggle dark mode');
    b.textContent = icon();
    b.addEventListener('click', function () {
      var n = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = n;
      try { localStorage.setItem('theme', n); } catch (e) {}
      b.textContent = icon();
    });
    document.body.appendChild(b);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
