import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'

const nav = {
  Company:  [
    { label: 'About',     to: '/about' },
    { label: 'Services',  to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers',   to: '/careers' },
    { label: 'Insights',  to: '/blog' },
  ],
  Services: [
    { label: 'Business Strategy',      to: '/services' },
    { label: 'Technology',             to: '/services' },
    { label: 'Financial Advisory',     to: '/services' },
    { label: 'Cybersecurity',          to: '/services' },
    { label: 'Cloud & AI',             to: '/services' },
  ],
  Legal: [
    { label: 'Privacy Policy',     to: '#' },
    { label: 'Terms of Service',   to: '#' },
    { label: 'Cookie Policy',      to: '#' },
    { label: 'Accessibility',      to: '#' },
  ],
}

const socials = [
  { label: 'LinkedIn',  href: '#', icon: 'in' },
  { label: 'Twitter',   href: '#', icon: '𝕏' },
  { label: 'GitHub',    href: '#', icon: '⌥' },
]

export default function Footer() {
  return (
    <footer className="relative bg-midnight border-t border-white/5 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-navy-900/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Top grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-navy-600 rounded-sm rotate-45 group-hover:rotate-[50deg] transition-transform duration-500" />
                <span className="relative font-display font-bold text-white text-lg z-10">J</span>
              </div>
              <span className="font-display font-semibold text-xl text-white tracking-wide">JConsulting</span>
            </Link>
            <p className="text-silver-500 text-sm leading-relaxed max-w-xs mb-6">
              Canada's premier consulting firm delivering strategic insight, technology transformation, and financial excellence to global enterprises.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 glass flex items-center justify-center rounded-sm text-silver-400 hover:text-white hover:border-navy-500 transition-all duration-300 text-sm font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          {Object.entries(nav).map(([section, items]) => (
            <motion.div key={section} variants={staggerItem}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-silver-500 mb-5">{section}</h4>
              <ul className="space-y-3">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-silver-400 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-navy-500 transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact strip */}
        <div className="py-8 border-b border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '⌖', label: '100 King Street West, Suite 5700', sub: 'Toronto, ON  M5X 1C9, Canada' },
            { icon: '⌕', label: import.meta.env.VITE_CONTACT_PHONE || '+1 (416) 555-0100', sub: '24/7 Support Available' },
            { icon: '✉', label: import.meta.env.VITE_CONTACT_EMAIL || 'info@jconsulting.ca', sub: 'Response within 2 hours' },
          ].map(({ icon, label, sub }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="text-navy-400 text-lg mt-0.5">{icon}</span>
              <div>
                <p className="text-sm text-white font-medium">{label}</p>
                <p className="text-xs text-silver-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-600">
            © {new Date().getFullYear()} JConsulting Inc. All rights reserved. Incorporated in Canada.
          </p>
          <div className="flex items-center gap-1 text-xs text-silver-600">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-slow" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
