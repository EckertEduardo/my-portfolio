import { Code2, Network, Database, Waypoints, Cloud, FlaskConical } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content } from '../../data/content'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

const icons = [Code2, Network, Database, Waypoints, Cloud, FlaskConical]

export function Skills() {
  const { lang } = useLanguage()
  const t = content[lang].skills

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="04" title={t.heading} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.groups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="card p-6 h-full">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'var(--accent-bg)' }}
                >
                  <Icon size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-h)] mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
