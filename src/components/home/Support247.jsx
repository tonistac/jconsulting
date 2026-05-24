import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeLeft, fadeRight, viewportConfig } from '@/utils/animations'

const channels = [
  { icon: '⌕', label: 'Phone', value: '+1 (416) 555-0100', note: 'Direct line, answered in <30s' },
  { icon: '✉', label: 'Email', value: 'support@jconsulting.ca', note: 'Response within 2 hours' },
  { icon: '💬', label: 'Live Chat', value: 'Available now', note: 'Avg. <2 min response' },
  { icon: '⌖', label: 'On-site', value: 'Emergency dispatch', note: 'Toronto & major cities' },
]

export default function Support247() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-midnight to-midnight" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-navy-800/10 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Always Available</span>
            </div>
            <h2
              className="font-display font-semibold gradient-text leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              24/7 Support.<br />
              <span className="text-white">Zero Exceptions.</span>
            </h2>
            <p className="text-silver-400 text-lg leading-relaxed mb-8 font-light">
              Business doesn't stop at 5pm. Neither do we. Every JConsulting engagement includes dedicated 24/7 access to your consulting team, with guaranteed response times and escalation paths for critical situations.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                '30-second phone answer guarantee',
                'Dedicated WhatsApp/Slack channel per engagement',
                'Emergency on-site dispatch within 4 hours (major cities)',
                'Monthly executive briefings included in all retainers',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-silver-400">
                  <span className="text-navy-400 mt-0.5 flex-shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 hover:border-navy-400 transition-all duration-300 shadow-glow-sm hover:shadow-glow"
            >
              Start a conversation
              <span>→</span>
            </Link>
          </motion.div>

          {/* Right: channel cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {channels.map(({ icon, label, value, note }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass border-gradient rounded-sm p-6 hover:bg-white/6 transition-all duration-300 group"
              >
                <span className="text-2xl text-navy-400 group-hover:text-navy-300 mb-3 block">{icon}</span>
                <p className="text-xs font-semibold tracking-widest uppercase text-silver-500 mb-1">{label}</p>
                <p className="text-white font-semibold text-sm mb-1">{value}</p>
                <p className="text-xs text-silver-600">{note}</p>
              </motion.div>
            ))}

            {/* Status indicator */}
            <div className="sm:col-span-2 glass rounded-sm px-5 py-4 flex items-center gap-3">
              <div className="flex gap-1">
                {[0.3, 0.5, 0.7].map(d => (
                  <span
                    key={d}
                    className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${d}s` }}
                  />
                ))}
              </div>
              <p className="text-sm text-white font-medium">All support channels are live and staffed</p>
              <span className="ml-auto text-xs text-silver-600">Updated now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
