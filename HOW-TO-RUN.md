# How to Run — Satellites in the Sky

## The Short Version

1. Download all files into one folder
2. Open `index.html` (or `aa-portal.html`) in your browser
3. Done.

---

## Detailed Instructions

### On Windows
1. Put all files in a folder (e.g. `C:\satellites\`)
2. Double-click `index.html`
3. It opens in your default browser → you're in

### On Mac
1. Put all files in a folder (e.g. `~/Desktop/satellites/`)
2. Double-click `index.html`
3. Or: right-click → Open With → Safari / Chrome

### On Linux
1. Put all files in a folder
2. Run: `xdg-open index.html`
3. Or: `firefox index.html` / `google-chrome index.html`

### On Phone / Tablet
1. Transfer files to your device
2. Open any `.html` file with your browser
3. Tip: use a local file manager app, or host on a simple server (see below)

### On Chromebook
1. Save files to your Downloads or Drive
2. Double-click any `.html` file → opens in Chrome

---

## Optional: Run as a Local Server

Some browsers restrict local file access. If links between files don't work:

### Python (built-in on Mac/Linux)
```bash
cd /path/to/satellites/
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

### Node.js
```bash
npx serve /path/to/satellites/
```

### VS Code
Install "Live Server" extension → right-click `index.html` → "Open with Live Server"

---

## What You Need

- **Any modern browser** (Chrome, Firefox, Safari, Edge)
- **No internet required** after downloading (fonts fallback gracefully)
- **No installation** — no npm, no build, no compile
- **~1.1 MB** total disk space

---

## File Structure

```
satellites/
├── index.html          ← START HERE (redirects to portal)
├── aa-portal.html      ← Master hub with all links
├── aa-help.html        ← Getting started guide
├── aa-faq.html         ← Frequently asked questions
├── README.md           ← Full documentation
├── CHANGELOG.md        ← Version history
├── HOW-TO-RUN.md       ← This file
└── aa-*.html           ← 56 interactive experiences
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Links don't work | Make sure ALL files are in the SAME folder |
| Fonts look plain | Need internet once to cache Google Fonts |
| No audio | Click/tap the page first (browser security) |
| Looks blurry | Zoom to 100% (Ctrl+0 / Cmd+0) |
| Won't open on phone | Use a file manager app to open .html files |

---

That's it. No accounts, no API keys, no subscriptions. Just HTML.
