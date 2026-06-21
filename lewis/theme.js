/* Theme: set before paint (no flash). Light/Dark live in the menu (see app.js). */
(function () {
  function pref() {
    try { var t = localStorage.getItem('theme'); if (t === 'dark' || t === 'light') return t; } catch (e) {}
    try { if (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'; } catch (e) {}
    return 'light';
  }
  document.documentElement.dataset.theme = pref();
  window.LewisTheme = {
    get: function () { return document.documentElement.dataset.theme || 'light'; },
    set: function (m) {
      document.documentElement.dataset.theme = m;
      try { localStorage.setItem('theme', m); } catch (e) {}
    }
  };
})();
