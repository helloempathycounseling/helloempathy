# Hello Empathy Counseling

The website for Hello Empathy Counseling — a static site hosted on **GitHub Pages**.

## Structure

- `index.html`, `about.html`, `services.html`, `resources.html`, `contact.html` — main pages
- `404.html` — not-found page
- `css/style.css` — site styles
- `js/main.js` — mobile navigation toggle
- `assets/brand/` — logo and brand notes
- `assets/images/` — site photography (e.g. therapist headshot)

## Editing common things

- **Contact email** — in `contact.html`, search for the `mailto:` link.
- **Therapist bio** — in `about.html` (full bio) and `index.html` (homepage teaser).
- **Services / specialties** — in `services.html`.
- **Crisis resources** — appears in the footer of every page and in a banner on `resources.html`.

## Local preview

Any static file server works. From the project root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The site deploys automatically from the `main` branch via GitHub Pages. The custom domain is configured in `CNAME` (`helloempathycounseling.com`).

## Notes

- No frameworks or build steps.
- Mobile-friendly and accessible.
- Contact uses a plain `mailto:` link — no server required.
