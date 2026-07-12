import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

export function NotFound() {
  const { lang } = useLanguage()
  const t = content[lang].notFound

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: 'var(--accent-bg)' }}
      >
        <Compass size={24} style={{ color: 'var(--accent)' }} />
      </motion.div>
      <span className="tag text-xs mb-4" style={{ background: 'var(--accent-bg)', color: 'var(--accent)', borderColor: 'var(--accent-border)' }}>
        404
      </span>
      <h1 className="font-display text-4xl mb-3 tracking-tight">{t.heading}</h1>
      <p className="text-[var(--text-muted)] mb-8 max-w-md">{t.detail}</p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-primary"
      >
        {t.cta}
      </Link>
    </section>
  )
}
