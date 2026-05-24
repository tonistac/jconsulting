import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About' },
  { to: '/services',  label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/careers',   label: 'Careers' },
  { to: '/blog',      label: 'Insights' },
  { to: '/contact',   label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { isDark, toggle }      = useTheme()
  const location                = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-midnight/90 backdrop-blur-xl border-b border-white/5 shadow-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-navy-600 rounded-sm rotate-45 group-hover:rotate-[50deg] transition-transform duration-500" />
                <span className="relative font-display font-bold text-white text-lg z-10">J</span>
              </div>
              <span className="font-display font-semibold text-xl text-white tracking-wide">
                JConsulting
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-silver-400 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-px bg-navy-500"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="w-9 h-9 flex items-center justify-center rounded-sm text-silver-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {isDark ? '☀' : '☾'}
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 hover:border-navy-400 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(p => !p)}
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-sm hover:bg-white/5 transition-colors"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-silver-300"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-6 h-px bg-silver-300"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-silver-300"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-x-0 top-20 z-40 bg-midnight/95 backdrop-blur-xl border-b border-white/5 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {links.map(({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block py-3 px-4 text-base font-medium rounded-sm transition-colors ${
                        isActive
                          ? 'text-white bg-navy-700/40 border-l-2 border-navy-500'
                          : 'text-silver-400 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={toggle}
                  className="w-10 h-10 flex items-center justify-center rounded-sm glass text-silver-400 hover:text-white"
                >
                  {isDark ? '☀' : '☾'}
                </button>
                <Link
                  to="/contact"
                  className="flex-1 text-center py-3 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 transition-all"
                >
                  Book Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
