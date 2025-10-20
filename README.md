# Portfolio (Vite + React)

## Contact Form → Google Sheets

The contact form posts to a Netlify Function which forwards to a Google Apps Script Web App linked to a Google Sheet.

### 1) Create Google Sheet and Apps Script

1. Create a new Google Sheet (e.g., `Contact Submissions`).
2. Extensions → Apps Script.
3. Paste the following script:

```javascript
function doPost(e) {

  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    if (!sheet) sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Sheet1');
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.message || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err && err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

1. Deploy → Manage deployments → New deployment → type: Web app.
   - Description: `Contact form receiver`
   - Execute as: `Me`
   - Who has access: `Anyone`
   - Copy the Web app URL.

### 2) Configure Netlify

- Set an environment variable in your Netlify site:
  - `GOOGLE_APPS_SCRIPT_WEBAPP_URL` = the Web app URL from step 1.
- Ensure the site is built with `netlify.toml` included (already configured).

### 3) Local development

Install Netlify CLI (optional) and run:

```bash
netlify dev
```

This proxies the function at `/.netlify/functions/submit-contact`.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
