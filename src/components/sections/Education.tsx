import { GraduationCap, Award } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content } from '../../data/content'
import { educationLogos } from '../../data/logos'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

export function Education() {
  const { lang } = useLanguage()
  const t = content[lang].education

  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="05" title={t.heading} />

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="card p-6 md:p-7 h-full">
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-[var(--text-muted)] mb-5">
              <GraduationCap size={15} style={{ color: 'var(--accent)' }} />
              Academic
            </h3>
            <div className="space-y-6">
              {t.academic.map((item) => (
                <div key={item.title} className="flex gap-3">
                  {educationLogos[item.place] && (
                    <img
                      src={educationLogos[item.place]}
                      alt={item.place}
                      className="w-9 h-9 rounded-lg object-contain bg-white p-1 border border-[var(--border)] shrink-0"
                    />
                  )}
                  <div>
                    <p className="font-display font-semibold text-[var(--text-h)]">{item.title}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      {item.place}
                    </p>
                    <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">{item.period}</p>
                    <p className="text-sm text-[var(--text)] mt-1.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 md:p-7 h-full">
            <h3 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-[var(--text-muted)] mb-5">
              <Award size={15} style={{ color: 'var(--accent-2)' }} />
              Certifications
            </h3>
            <div className="space-y-3.5">
              {t.certifications.map((cert) => (
                <div key={cert.name} className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-[var(--text-h)]">{cert.name}</p>
                    <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
                  </div>
                  <p className="text-xs font-mono text-[var(--text-muted)] shrink-0">{cert.period}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
