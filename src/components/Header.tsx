import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { content } from '../data/content'

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLanguage()
  const t = content[lang]
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [location.pathname])

  const navItems: { key: keyof typeof t.nav; hash: string }[] = [
    { key: 'about', hash: '#about' },
    { key: 'experience', hash: '#experience' },
    { key: 'projects', hash: '#projects' },
    { key: 'skills', hash: '#skills' },
    { key: 'education', hash: '#education' },
  ]

  const goTo = (hash: string) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'glass border-b border-[var(--border)]' : ''}`}>
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="group font-display font-semibold text-[var(--text-h)] text-lg tracking-tight transition-transform duration-300 hover:-translate-y-0.5"
        >
          eckert
          <span
            style={{ color: 'var(--accent)' }}
            className="inline-block transition-transform duration-300 group-hover:rotate-180"
          >
            .
          </span>
          dev
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const isActive = active === item.hash.slice(1)
            return (
              <button
                key={item.key}
                onClick={() => goTo(item.hash)}
                className="relative px-3 py-1.5 rounded-full transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text)' }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: 'var(--accent-bg)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                ) : (
                  <span
                    className="absolute inset-0 rounded-full -z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'var(--accent-bg)' }}
                  />
                )}
                {t.nav[item.key]}
              </button>
            )
          })}
          <Link
            to="/blog"
            className="link-underline px-3 py-1.5 rounded-full text-[var(--text)] hover:text-[var(--accent)] transition-all duration-300 hover:-translate-y-0.5"
          >
            {t.nav.blog}
          </Link>
          <button
            onClick={() => goTo('#contact')}
            className="ml-2 px-4 py-1.5 rounded-full text-sm font-medium btn-primary cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="icon-btn w-9 h-9 rounded-full border border-[var(--border)] text-xs font-mono font-medium flex items-center justify-center hover:border-[var(--accent-border)] hover:text-[var(--accent)] cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="icon-btn w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent-border)] hover:text-[var(--accent)] cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="icon-btn lg:hidden w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center cursor-pointer"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden flex flex-col gap-1 px-6 pb-4 text-sm border-b border-[var(--border)] glass">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => goTo(item.hash)}
              className="text-left py-2 text-[var(--text)] hover:text-[var(--accent)] hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
            >
              {t.nav[item.key]}
            </button>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="py-2 text-[var(--text)] hover:text-[var(--accent)] hover:translate-x-1.5 transition-all duration-300"
          >
            {t.nav.blog}
          </Link>
          <button
            onClick={() => goTo('#contact')}
            className="text-left py-2 text-[var(--text)] hover:text-[var(--accent)] hover:translate-x-1.5 transition-all duration-300 cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>
      )}
    </header>
  )
}
