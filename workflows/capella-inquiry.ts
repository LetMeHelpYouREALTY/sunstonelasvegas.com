import { FatalError, sleep } from 'workflow'

import {
  submitFollowUpBossEvent,
  type FubEventType,
} from '@/lib/fub-events'
import { CONTACT_PHONE } from '@/lib/site'

export type CapellaInquiry = {
  firstName: string
  lastName: string
  email?: string
  phone?: string
  formName: string
  fubType: FubEventType
  message: string
  description: string
  sourceUrl: string
}

type InquiryRecord = {
  id: string
  name: string
  email: string
  formName: string
}

export async function handleCapellaInquiry(inquiry: CapellaInquiry) {
  'use workflow'

  const record = await recordInquiry(inquiry)
  await sendWelcomeNote(record)
  await sleep('5s')
  await sendOnboardingNote(record)

  return { inquiryId: record.id, status: 'onboarded' as const }
}

async function recordInquiry(inquiry: CapellaInquiry): Promise<InquiryRecord> {
  'use step'

  const name = [inquiry.firstName, inquiry.lastName].filter(Boolean).join(' ')
  const result = await submitFollowUpBossEvent({
    type: inquiry.fubType,
    message: inquiry.message,
    description: inquiry.description,
    sourceUrl: inquiry.sourceUrl,
    person: {
      firstName: inquiry.firstName,
      lastName: inquiry.lastName,
      email: inquiry.email,
      phone: inquiry.phone,
      formName: inquiry.formName,
    },
  })

  if (!result.ok) {
    if (result.status === 503 && process.env.NODE_ENV !== 'production') {
      console.warn(
        'FOLLOW_UP_BOSS_API_KEY is not set. The inquiry stays on this workflow run.',
      )
      return {
        id: crypto.randomUUID(),
        name,
        email: inquiry.email ?? '',
        formName: inquiry.formName,
      }
    }
    if (result.status === 503) {
      throw new FatalError('Follow Up Boss is not configured')
    }
    throw new Error('Follow Up Boss rejected the inquiry')
  }

  console.log(`Recorded ${inquiry.formName} for ${name || 'a visitor'}`)

  return {
    id: crypto.randomUUID(),
    name,
    email: inquiry.email ?? '',
    formName: inquiry.formName,
  }
}

async function sendWelcomeNote(record: InquiryRecord) {
  'use step'

  console.log(
    `Welcome note for ${record.name || record.id}: Dr. Jan Duffy will reply by phone or email about ${record.formName}.`,
  )
}

async function sendOnboardingNote(record: InquiryRecord) {
  'use step'

  if (record.email && !record.email.includes('@')) {
    throw new FatalError('Invalid email')
  }

  console.log(
    `Onboarding follow-up for ${record.name || record.id}. Capella questions go to ${CONTACT_PHONE}.`,
  )
}
