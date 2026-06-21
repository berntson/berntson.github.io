/* Light password gate. Remembers unlock per device (localStorage).
   Not real security — static files are still on the open web — just keeps casual eyes out. */
(function () {
  var HASH = "c65ba4ba30decf8800fd849d289bfc8a0c9b09630757488cb8a2bb749d23f2a1"; // sha256(lowercased pw)
  var KEY = "lewisUnlocked";
  try { if (localStorage.getItem(KEY) !== "1") document.documentElement.classList.add("gated"); }
  catch (e) { document.documentElement.classList.add("gated"); }

  async function sha(s) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }
  function ready(fn) { document.readyState !== "loading" ? fn() : document.addEventListener("DOMContentLoaded", fn); }

  ready(function () {
    if (!document.documentElement.classList.contains("gated")) return;
    var form = document.getElementById("gate-form");
    if (!form) return;
    var inp = document.getElementById("gate-pw");
    var err = document.getElementById("gate-err");
    inp.focus();
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      var h = await sha((inp.value || "").trim().toLowerCase());
      if (h === HASH) {
        try { localStorage.setItem(KEY, "1"); } catch (e) {}
        document.documentElement.classList.remove("gated");
      } else {
        err.style.display = "block"; inp.value = ""; inp.focus();
      }
    });
  });
})();
