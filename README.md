# Personal Academic Website

A simple, dependency-free personal website (plain HTML + CSS + a tiny bit of JS),
modeled on the classic academic homepage layout (al-folio style): About, Publications,
Projects, and CV pages, with a light/dark theme toggle.

## Structure

```
index.html          About page (bio, highlights, photo + address sidebar)
publications.html   Publications grouped by year
projects.html       Project cards
cv.html             CV sections (education, research, awards, teaching, skills)
assets/css/style.css   All styling — change colors/fonts via the :root variables
assets/js/theme.js     Light/dark toggle
assets/img/profile.svg Placeholder portrait — replace with your photo
```

## Customize

1. Search for `TODO`, `XXX`, and `YOUR_` across the HTML files and replace with your info.
2. Put your photo at `assets/img/profile.jpg` and change the `<img src>` in `index.html`.
3. To change the accent color, edit `--accent` at the top of `assets/css/style.css`.
4. Add publications/projects/CV entries by duplicating the commented blocks.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 (or just double-click `index.html`).

## Publish for free with GitHub Pages

1. Create a GitHub repository named `<your-username>.github.io`.
2. Push this folder to it:
   ```bash
   git init && git add -A && git commit -m "Initial website"
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Your site goes live at `https://<your-username>.github.io` within a minute or two.
4. (Optional) Buy a custom domain and point it to GitHub Pages in the repo's
   Settings → Pages.

## Alternative: the actual al-folio theme

The reference site (wenkeren.com) uses [al-folio](https://github.com/alshedivat/al-folio),
a Jekyll theme with built-in BibTeX publication lists, news, and blog support. It is more
powerful but requires Ruby/Jekyll and more setup. This plain-HTML version is easier to
edit and can be migrated to al-folio later if you outgrow it.
