import { Reveal } from './Reveal'

export function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
          {index}
        </span>
        <span className="h-px flex-1 max-w-16" style={{ background: 'var(--border-strong)' }} />
      </div>
      <h2 className="font-display text-3xl md:text-4xl tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-[var(--text-muted)] max-w-xl">{subtitle}</p>}
    </Reveal>
  )
}
