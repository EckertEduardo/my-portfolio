import { useState } from 'react'
import { Mail, Check } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { content, links } from '../data/content'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

export function Footer() {
  const { lang } = useLanguage()
  const t = content[lang]
  const year = new Date().getFullYear()
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

  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {year} <span className="font-display font-semibold text-gradient">Eduardo Eckert Sperfeld</span>. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-btn w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border)]"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-btn w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border)]"
          >
            <LinkedinIcon size={16} />
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email"
              title={links.email}
              className="icon-btn w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent-border)] cursor-pointer"
            >
              {copied ? <Check size={16} /> : <Mail size={16} />}
            </button>
            {copied && (
              <span
                className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium tag"
                style={{ background: 'var(--bg-elevated)' }}
              >
                {t.contact.emailCopied}
              </span>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
