import { ExternalLink, Globe } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content, links } from '../../data/content'
import { SectionHeading } from '../SectionHeading'
import { GithubIcon } from '../icons/BrandIcons'
import { Reveal } from '../Reveal'

const labels = {
  pt: { problem: 'Problema', solution: 'Solução', result: 'Resultado', liveSite: 'Ver site' },
  en: { problem: 'Problem', solution: 'Solution', result: 'Result', liveSite: 'Live site' },
}

export function Projects() {
  const { lang } = useLanguage()
  const t = content[lang].projects
  const l = labels[lang]

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:py-28 scroll-mt-24">
      <SectionHeading index="03" title={t.heading} subtitle={t.subheading} />

      <div className="space-y-6">
        {t.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article className="card overflow-hidden group">
              {project.image && (
                <div className="relative overflow-hidden border-b border-[var(--border)]" style={{ aspectRatio: '16/7' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, var(--bg-elevated) 0%, transparent 40%)' }}
                  />
                </div>
              )}

              <div className="p-6 md:p-9 relative">
                <span className="absolute -top-2 -right-2 font-display font-semibold text-8xl select-none pointer-events-none opacity-[0.05] group-hover:opacity-[0.09] transition-opacity">
                  0{i + 1}
                </span>

                <div className="flex items-start justify-between gap-4 flex-wrap relative">
                  <h3 className="font-display text-2xl text-[var(--text-h)] font-semibold tracking-tight">{project.name}</h3>
                  <div className="flex items-center gap-4 shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <Globe size={15} className="transition-transform duration-300 group-hover/link:rotate-12" />
                        {l.liveSite}
                        <ExternalLink size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={`${links.github}/${project.repo}`}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <GithubIcon size={15} className="transition-transform duration-300 group-hover/link:rotate-12" />
                        {project.repo}
                        <ExternalLink size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[var(--text)] mt-2 max-w-2xl relative">{project.summary}</p>

                <div className="grid md:grid-cols-3 gap-5 mt-6 text-sm relative">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide mb-1.5" style={{ color: 'var(--accent)' }}>
                      {l.problem}
                    </p>
                    <p className="text-[var(--text)] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide mb-1.5" style={{ color: 'var(--accent-2)' }}>
                      {l.solution}
                    </p>
                    <p className="text-[var(--text)] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide mb-1.5" style={{ color: 'var(--accent-3)' }}>
                      {l.result}
                    </p>
                    <p className="text-[var(--text)] leading-relaxed">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 relative">
                  {project.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors"
        >
          {t.viewMore}
          <ExternalLink size={14} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
