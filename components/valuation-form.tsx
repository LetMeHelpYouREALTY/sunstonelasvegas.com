'use client'

import { useState, type FormEvent } from 'react'

import { LeadFormAlerts } from '@/components/lead-form-alerts'
import { postLeadForm } from '@/lib/lead-form-client'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ValuationForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      form: 'valuation',
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      message: `Property: ${String(formData.get('address') ?? '').trim()}\n\n${String(formData.get('message') ?? '').trim()}`,
      sourceUrl: typeof window !== 'undefined' ? window.location.href : '/sell',
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
    <form onSubmit={handleSubmit} className="grid gap-4">
      <LeadFormAlerts
        status={status}
        successMessage="Your valuation request was sent. Dr. Jan Duffy will reply by phone or email."
      />
      <label className="grid gap-2 text-sm" htmlFor="value-name">
        Name
        <input id="value-name" name="name" required autoComplete="name" className="field" />
      </label>
      <label className="grid gap-2 text-sm" htmlFor="value-email">
        Email
        <input id="value-email" name="email" type="email" required autoComplete="email" className="field" />
      </label>
      <label className="grid gap-2 text-sm" htmlFor="value-phone">
        Phone
        <input id="value-phone" name="phone" type="tel" required autoComplete="tel" className="field" />
      </label>
      <label className="grid gap-2 text-sm" htmlFor="value-address">
        Property address
        <input id="value-address" name="address" required autoComplete="street-address" className="field" />
      </label>
      <label className="grid gap-2 text-sm" htmlFor="value-note">
        What should we know
        <textarea id="value-note" name="message" rows={4} className="field" />
      </label>
      <button className="btn w-fit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending' : 'Request a valuation'}
      </button>
    </form>
  )
}
