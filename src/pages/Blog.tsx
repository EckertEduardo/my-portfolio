import { Rss } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

export function Blog() {
  const { lang } = useLanguage()
  const t = content[lang].blog

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: 'var(--accent-bg)' }}
      >
        <Rss size={24} style={{ color: 'var(--accent)' }} />
      </motion.div>
      <h1 className="font-display text-4xl mb-3 tracking-tight">{t.heading}</h1>
      <p className="text-[var(--text-muted)] mb-6">{t.subheading}</p>
      <span className="tag text-xs" style={{ background: 'var(--accent-bg)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}>
        {t.comingSoon}
      </span>
      <p className="text-sm text-[var(--text)] max-w-md mt-4">{t.comingSoonDetail}</p>
    </section>
  )
}
