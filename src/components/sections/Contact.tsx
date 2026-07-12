import { useState } from 'react'
import { Download, Mail, CheckCircle2, XCircle, Loader2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content, links } from '../../data/content'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'
import { WhatsappIcon } from '../icons/BrandIcons'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { lang } = useLanguage()
  const t = content[lang].contact
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${links.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="06" title={t.heading} subtitle={t.subheading} />

      <Reveal>
        <div className="card p-6 md:p-9 grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <button
              type="button"
              onClick={copyEmail}
              className="w-full flex items-center gap-3 rounded-xl border border-[var(--border)] px-5 py-4 hover:border-[var(--accent-border)] transition-colors cursor-pointer text-left"
            >
              {copied ? (
                <CheckCircle2 size={18} style={{ color: 'var(--accent-2)' }} />
              ) : (
                <Mail size={18} style={{ color: 'var(--accent)' }} />
              )}
              <div>
                <p className="text-xs text-[var(--text-muted)]">{copied ? t.emailCopied : t.emailLabel}</p>
                <p className="text-sm text-[var(--text-h)] font-medium">{links.email}</p>
              </div>
            </button>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-5 py-4 hover:border-[var(--accent-border)] transition-colors"
            >
              <WhatsappIcon size={18} />
              <div>
                <p className="text-xs text-[var(--text-muted)]">{t.whatsappLabel}</p>
                <p className="text-sm text-[var(--text-h)] font-medium">(47) 99652-6459</p>
              </div>
            </a>
            <a
              href={links.cv}
              download
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] px-5 py-4 hover:border-[var(--accent-border)] transition-colors"
            >
              <Download size={18} style={{ color: 'var(--accent-2)' }} />
              <p className="text-sm text-[var(--text-h)] font-medium">{t.cvLabel}</p>
            </a>
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Novo contato via portfólio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              name="name"
              required
              placeholder={t.formName}
              className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-h)] outline-none focus:border-[var(--accent-border)] transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder={t.formEmail}
              className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-h)] outline-none focus:border-[var(--accent-border)] transition-colors"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder={t.formMessage}
              className="w-full rounded-lg border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--text-h)] outline-none focus:border-[var(--accent-border)] resize-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-lg px-4 py-2.5 text-sm font-semibold btn-primary cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {status === 'sending' && <Loader2 size={16} className="animate-spin" />}
              {status === 'sending' ? t.formSending : t.formSubmit}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm" style={{ color: 'var(--accent-2)' }}>
                <CheckCircle2 size={16} />
                {t.formSuccess}
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <XCircle size={16} />
                {t.formError}
              </p>
            )}
          </form>
        </div>
      </Reveal>
    </section>
  )
}
