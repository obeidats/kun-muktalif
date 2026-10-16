# كن مختلف | Be Different

Bilingual (Arabic / English) static website for **Be Different for Website Management** — social media management, design, reels, ad campaigns and professional photo shoots in Irbid, Jordan.

## Run locally

```bash
npm install
npm run dev
```

Opens http://localhost:8000 with live reload. No build step — it's plain HTML, CSS and JavaScript.

## Structure

```
index.html            Page markup (Arabic content by default)
assets/css/style.css  Styles
assets/js/main.js     English translations, gallery, slider, lightbox, open/closed status
assets/img/           Logo, icons, portfolio, results images
.htaccess             Compression & caching for Hostinger (Apache/LiteSpeed)
```

## Deploy (Hostinger)

Upload everything **except** `node_modules`, `package.json`, `package-lock.json` and `README.md` into `public_html`.
