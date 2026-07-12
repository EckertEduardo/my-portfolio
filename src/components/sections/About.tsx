import { useLanguage } from '../../context/LanguageContext'
import { content } from '../../data/content'
import { SectionHeading } from '../SectionHeading'
import { Reveal } from '../Reveal'

export function About() {
  const { lang } = useLanguage()
  const t = content[lang].about

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="01" title={t.heading} />
      <div className="max-w-2xl space-y-5">
        {t.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="leading-relaxed text-[var(--text)] text-[15px] md:text-base">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
