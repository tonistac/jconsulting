import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, fadeIn } from '@/utils/animations'

const floatingCards = [
  { icon: '◈', label: 'Strategy Sessions', value: '2,400+', top: '20%', left: '2%', delay: 0.8 },
  { icon: '◎', label: 'Revenue Generated', value: '$4.2B+', top: '55%', right: '2%', delay: 1.0 },
  { icon: '⬡', label: 'Offices', value: '3 Cities', bottom: '20%', left: '2%', delay: 1.2 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-midnight">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-navy-900/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-navy-800/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Diagonal line accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 right-0 w-[50%] h-full opacity-5" viewBox="0 0 400 800" fill="none">
          <line x1="400" y1="0" x2="0" y2="800" stroke="#3B5BDB" strokeWidth="1" />
          <line x1="380" y1="0" x2="-20" y2="800" stroke="#94A3B8" strokeWidth="0.5" />
          <line x1="420" y1="0" x2="20" y2="800" stroke="#3B5BDB" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating stat cards */}
      {floatingCards.map(({ icon, label, value, top, left, right, bottom, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute hidden xl:block"
          style={{ top, left, right, bottom }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
            className="glass border-gradient rounded-sm px-4 py-3 min-w-[140px]"
          >
            <span className="text-navy-400 text-lg block mb-1">{icon}</span>
            <p className="font-counter text-2xl text-white">{value}</p>
            <p className="text-xs text-silver-500 mt-0.5">{label}</p>
          </motion.div>
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 xl:py-40">
        <div className="max-w-4xl xl:max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-navy-500" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-navy-400">
              Toronto · Canada · Est. 2014
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-display font-semibold leading-[1.05] mb-6 text-white"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            Where Strategy
            <br />
            <em className="not-italic gradient-text">Meets Excellence.</em>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-silver-400 font-light leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            JConsulting partners with the world's most ambitious organizations to navigate complexity, accelerate growth, and build lasting competitive advantage.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-navy-600 hover:bg-navy-500 text-white font-medium text-sm rounded-sm border border-navy-500 hover:border-navy-400 transition-all duration-300 shadow-glow hover:shadow-glow glow-blue"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass hover:bg-white/8 text-white font-medium text-sm rounded-sm border border-white/15 hover:border-white/30 transition-all duration-300"
            >
              Explore Services →
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-wrap items-center gap-6"
          >
            {[
              { icon: '✦', text: '24/7 Support' },
              { icon: '✦', text: 'ISO 27001 Certified' },
              { icon: '✦', text: '98% Client Retention' },
              { icon: '✦', text: '11 Years in Canada' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-silver-500 text-xs">
                <span className="text-navy-500 text-xs">{icon}</span>
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  )
}
