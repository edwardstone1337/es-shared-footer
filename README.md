# es-shared-footer

A standalone shared footer component for Edward Stone projects. It is embedded on multiple sites via a single script tag and uses **Shadow DOM** for style isolation so it always looks the same (dark theme) regardless of host page CSS.

## How to embed

1. Add the mount point where the footer should appear:

   ```html
   <div id="es-footer" data-project="your-project-id"></div>
   ```

2. Load the script as an **ES module** (required so the script can resolve `footer.css` relative to itself):

   ```html
   <script type="module" src="https://footer.edwardstone.design/src/footer.js"></script>
   ```

Replace `your-project-id` with one of: `flip7`, `scp`, `fairshare`, `lostcities`, `kaomoji`. The matching project is shown as the current page (muted, not a link). Use any value or omit `data-project` if the page isn’t one of these projects.

## Local development

Open `index.html` in a browser via a local server (e.g. `python3 -m http.server 8000` or your editor’s “Live Server”) so the module and CSS load correctly. The test page uses `data-project="fairshare"` to verify the active state.

## Tech

- Vanilla JS and CSS only; no build step or npm.
- Single entry: `footer.js` fetches `footer.css` from the same origin and injects it and the footer markup into a shadow root on `#es-footer`.
- If `#es-footer` is missing, the script does nothing and does not log errors.
