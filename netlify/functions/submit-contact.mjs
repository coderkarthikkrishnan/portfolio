// Netlify Function: submit-contact
// Purpose: Receive contact form submission and forward to Google Apps Script Web App
// Expects environment variable: GOOGLE_APPS_SCRIPT_WEBAPP_URL

export async function handler(event) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ok: false, error: 'Method Not Allowed' }),
        }
    }

    const webappUrl = process.env.GOOGLE_APPS_SCRIPT_WEBAPP_URL
    if (!webappUrl) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ok: false, error: 'Missing GOOGLE_APPS_SCRIPT_WEBAPP_URL' }),
        }
    }

    try {
        const payload = JSON.parse(event.body || '{}')
        const { name, email, message } = payload

        // Basic validation server-side as well
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ok: false, error: 'Missing required fields' }),
            }
        }

        // Forward to Apps Script Web App
        const resp = await fetch(webappUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message, ts: new Date().toISOString() }),
        })

        if (!resp.ok) {
            const text = await resp.text()
            return {
                statusCode: 502,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ok: false, error: `Upstream error: ${text || resp.status}` }),
            }
        }

        // Expect JSON { ok: true }
        const data = await resp.json().catch(() => ({}))
        if (!data.ok) {
            return {
                statusCode: 502,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ok: false, error: 'Upstream returned failure' }),
            }
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ok: true }),
        }
    } catch (err) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ok: false, error: err.message || 'Server error' }),
        }
    }
}
