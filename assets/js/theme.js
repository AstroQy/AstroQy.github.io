// Visit counter: pings hits.sh (free, no-account, site-wide counter) once per
// page view. Only counts the live site — not local previews — and not the
// private stats page (stats.html), which displays the badge itself.
(function () {
  if (location.hostname === "astroqy.github.io" && !/stats\.html$/.test(location.pathname)) {
    new Image(1, 1).src = "https://hits.sh/astroqy.github.io.svg";
  }
})();

// Light/dark theme toggle. The chosen theme is remembered in localStorage.
(function () {
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var setIcon = function () {
      btn.textContent =
        document.documentElement.getAttribute("data-theme") === "dark" ? "☀️" : "🌙";
    };
    setIcon();
    btn.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      if (dark) {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
      try { localStorage.setItem("theme", dark ? "light" : "dark"); } catch (e) {}
      setIcon();
    });
  });
})();
