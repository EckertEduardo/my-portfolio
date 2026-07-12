import { Globe, ExternalLink } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content } from '../../data/content'
import { experienceLogos } from '../../data/logos'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

export function Experience() {
  const { lang } = useLanguage()
  const t = content[lang].experience

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="02" title={t.heading} />
      <div className="space-y-6">
        {t.items.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.08}>
            <div className="card p-6 md:p-8 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8">
              <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-start gap-2">
                <p className="font-mono text-xs tracking-wide uppercase text-[var(--text-muted)]">{item.period}</p>
                {/atualmente|present/i.test(item.period) && (
                  <span
                    className="tag text-xs"
                    style={{ color: 'var(--accent-2)', borderColor: 'var(--accent-2)' }}
                  >
                    ● current
                  </span>
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  {experienceLogos[item.company] && (
                    <img
                      src={experienceLogos[item.company]}
                      alt={item.company}
                      className="w-10 h-10 rounded-lg object-contain bg-white p-1 border border-[var(--border)] shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-[var(--text-h)] font-semibold tracking-tight">{item.role}</h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      {item.company}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm leading-relaxed text-[var(--text)] flex gap-2.5">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Globe size={14} className="transition-transform duration-300 group-hover/link:rotate-12" />
                    {item.link.label}
                    <ExternalLink size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
