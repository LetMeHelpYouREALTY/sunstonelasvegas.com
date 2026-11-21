import {
  CALENDLY_LABELS,
  calendlyUrl,
  type CalendlyKind,
} from '@/lib/calendly'
import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'

type CalendlyCtaProps = {
  /** Which Calendly event to open. */
  kind: CalendlyKind
  /** UTM content slug for this placement. */
  content: string
  /** Optional section heading. */
  heading?: string
  /** Optional supporting sentence. */
  note?: string
  /** Extra event kinds as secondary links. */
  also?: readonly CalendlyKind[]
  /** Visual style for the primary button. */
  variant?: 'primary' | 'onDark'
}

/**
 * Sitewide booking CTA. Forms are not used on this site — every lead path
 * routes through Calendly with UTM tags for sunstonelasvegas.com.
 */
export function CalendlyCta({
  kind,
  content,
  heading,
  note,
  also = [],
  variant = 'primary',
}: CalendlyCtaProps) {
  const primaryHref = calendlyUrl(kind, content)
  const buttonClass = variant === 'onDark' ? 'btn' : 'btn'
  const secondaryClass = variant === 'onDark' ? 'btn-line' : 'btn-line'

  return (
    <section
      aria-label="Schedule with Dr. Jan Duffy"
      className="grid gap-4"
    >
      {heading ? (
        <h2 className="font-heading text-3xl sm:text-4xl">{heading}</h2>
      ) : null}
      {note ? <p className="max-w-2xl text-muted-foreground">{note}</p> : null}
      <div className="flex flex-wrap gap-3">
        <a
          className={buttonClass}
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CALENDLY_LABELS[kind]}
        </a>
        {also.map((extra) => (
          <a
            key={extra}
            className={secondaryClass}
            href={calendlyUrl(extra, `${content}-${extra}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CALENDLY_LABELS[extra]}
          </a>
        ))}
        <a className={secondaryClass} href={CONTACT_PHONE_LINK}>
          Call {CONTACT_PHONE}
        </a>
      </div>
    </section>
  )
}
