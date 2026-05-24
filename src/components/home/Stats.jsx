import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 11,   suffix: '+',  label: 'Years in Canada',          sub: 'Est. Toronto 2014' },
  { value: 280,  suffix: '+',  label: 'Global Clients',           sub: 'Across 30+ countries' },
  { value: 98,   suffix: '%',  label: 'Client Retention Rate',    sub: 'Industry-leading' },
  { value: 4.2,  suffix: 'B+', label: 'Client Revenue Generated', sub: 'Measurable impact', prefix: '$', decimals: 1 },
  { value: 120,  suffix: '+',  label: 'Consultants Worldwide',    sub: 'Senior practitioners' },
  { value: 24,   suffix: '/7', label: 'Support Availability',     sub: 'Always on' },
]

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deep navy background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-navy-950/30 to-midnight" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      {/* Glowing center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-navy-800/20 blur-[80px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="text-xs font-semibold tracking-[0.25em] uppercase text-navy-400 mb-3"
          >
            Impact by the numbers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
            className="font-display font-semibold gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Results That Speak for Themselves
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden"
        >
          {stats.map(({ value, suffix, label, sub, prefix, decimals }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="relative bg-midnight hover:bg-navy-950/60 transition-colors duration-300 p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-2">
                <AnimatedCounter
                  end={value}
                  suffix={suffix}
                  prefix={prefix}
                  decimals={decimals}
                />
              </div>
              <p className="font-semibold text-white text-sm mb-1">{label}</p>
              <p className="text-xs text-silver-600">{sub}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-navy-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
