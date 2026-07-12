import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { content, links } from '../../data/content'

export function Hero() {
  const { lang } = useLanguage()
  const t = content[lang].hero

  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-20 md:pt-32 md:pb-40 relative">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-1.5 mb-6 md:mb-8 tag"
          >
            <Sparkles size={13} style={{ color: 'var(--accent)' }} />
            {t.kicker}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold leading-[0.95] tracking-tight text-[clamp(2.4rem,9vw,4rem)]"
          >
            <span className="block text-[var(--text-h)]">Eduardo Eckert</span>
            <span className="block text-gradient">Sperfeld</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl mt-6 md:mt-8 max-w-2xl mx-auto lg:mx-0 text-[var(--text-h)] font-medium tracking-tight"
          >
            {t.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 md:mt-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-[var(--text)]"
          >
            {t.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 md:mt-5 flex items-center justify-center lg:justify-start gap-2 text-sm text-[var(--text-muted)] font-mono"
          >
            <MapPin size={14} />
            {t.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-primary">
              {t.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a
              href={links.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold btn-ghost"
            >
              <Download size={16} />
              {t.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto shrink-0"
        >
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60 scale-90"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
            aria-hidden="true"
          />
          <img
            src="/images/eduardo.jpg"
            alt="Eduardo Eckert Sperfeld"
            width={260}
            height={260}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            style={{ border: '3px solid var(--bg-elevated)', boxShadow: 'var(--shadow-glow)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
