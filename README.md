# Carlos · Mechanical Engineer — Portfolio

Static, bilingual (ES / EN) portfolio website for Carlos, a mechanical engineer
specialised in 3D / CAD design and digital fabrication. Inspired by the layout
of `ennde3d.com`, kept intentionally simpler.

## Stack

Plain HTML, CSS and JavaScript — no build step, no dependencies. Open
`index.html` in a browser, or serve the directory with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — markup with semantic sections (Hero, About, Services, Projects,
  Process, Contact) and `data-i18n` keys for translation.
- `styles.css` — dark "engineering blueprint" theme with orange accent.
- `script.js` — language switcher (ES default, EN available), mobile menu and a
  `mailto:` contact form fallback.

## Customising

- **Text**: edit the `translations` object in `script.js` — both `es` and `en`
  must be kept in sync. Existing markup acts as the Spanish fallback.
- **Email**: replace `hola@carlos-eng.com` in `index.html` and `script.js`.
- **Project images**: project visuals are inline SVG placeholders inside
  `index.html`. Swap each `<svg>` for an `<img>` once real renders are ready.
- **Colors**: tweak the CSS variables at the top of `styles.css`.
