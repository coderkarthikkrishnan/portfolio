import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [sent, setSent] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const onChange = (e) => {
        const { name, value } = e.target
        setForm((f) => ({ ...f, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined }))
    }

    const validate = () => {
        const next = {}
        if (!form.name.trim()) next.name = 'Please enter your name.'
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        if (!form.email.trim()) next.email = 'Please enter your email.'
        else if (!emailOk) next.email = 'Please enter a valid email.'
        if (!form.message.trim()) next.message = 'Please enter a message.'
        else if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setSent(false)
        setSubmitError('')
        if (!validate()) return
        setSubmitting(true)
        try {
            const res = await fetch('/.netlify/functions/submit-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form }),
            })
            if (!res.ok) {
                const text = await res.text()
                throw new Error(text || 'Failed to send your message. Please try again later.')
            }
            const data = await res.json().catch(() => ({}))
            if (data && data.ok) {
                setSent(true)
                setForm({ name: '', email: '', message: '' })
            } else {
                throw new Error('Unexpected response from server.')
            }
        } catch (err) {
            setSubmitError(err.message || 'Something went wrong. Please try again later.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <section id="contact" className="section">
            <h2 className="section-title">Contact</h2>
            <form className="card contact-form" onSubmit={onSubmit} noValidate>
                {sent && (
                    <div className="form-success" role="status" aria-live="polite">
                        Thanks! Your message has been sent.
                    </div>
                )}
                {submitError && (
                    <div className="form-error" role="alert" aria-live="assertive">
                        {submitError}
                    </div>
                )}

                <div className="form-row">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            autoComplete="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={onChange}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={onChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
                    </div>
                </div>

                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me a bit about your project..."
                        value={form.message}
                        onChange={onChange}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    <div className="field-meta">
                        <span className="muted">{form.message.length}/1000</span>
                    </div>
                    {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
                </div>

                <div className="form-actions">
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                        {submitting ? 'Sending…' : 'Send'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Contact
