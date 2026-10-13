'use client'

import { useState, type FormEvent } from 'react'

import { LeadFormAlerts } from '@/components/lead-form-alerts'
import { postLeadForm } from '@/lib/lead-form-client'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const successMessage =
  'Your note was sent. Dr. Jan Duffy will reply by phone or email.'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      form: 'concierge',
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      timeline: String(formData.get('timeline') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      sourceUrl:
        typeof window !== 'undefined' ? window.location.href : '/contact',
    }

    try {
      const ok = await postLeadForm(payload)
      if (ok) {
        setStatus('success')
        form.reset()
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-4">
      <LeadFormAlerts status={status} successMessage={successMessage} />
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 text-sm text-foreground"
      >
        <label className="flex flex-col gap-2">
          <span>Full name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            required
            disabled={status === 'submitting'}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            required
            disabled={status === 'submitting'}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            disabled={status === 'submitting'}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Preferred move-in timeframe</span>
          <select
            name="timeline"
            className="field"
            disabled={status === 'submitting'}
          >
            <option value="next-60-days">Next 60 days</option>
            <option value="3-6-months">3–6 months</option>
            <option value="6-12-months">6–12 months</option>
            <option value="research-phase">Just starting research</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span>How can we help?</span>
          <textarea
            name="message"
            rows={4}
            className="field"
            disabled={status === 'submitting'}
          />
        </label>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn mt-2 w-fit disabled:opacity-70"
        >
          {status === 'submitting' ? 'Sending' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
