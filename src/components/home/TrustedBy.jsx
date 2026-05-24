import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/utils/animations'

const partners = [
  { name: 'Google',    logo: '⬡ Google'   },
  { name: 'Meta',      logo: '◈ Meta'     },
  { name: 'Anthropic', logo: '◎ Anthropic' },
  { name: 'Deloitte',  logo: '▣ Deloitte' },
  { name: 'KPMG',      logo: '◉ KPMG'    },
  { name: 'RBC',       logo: '◇ RBC'      },
]

// Double the array for seamless infinite scroll
const doubled = [...partners, ...partners]

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-midnight overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-silver-600"
        >
          Trusted by world-class organizations
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map(({ name, logo }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 glass rounded-sm px-8 py-4 border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-default"
            >
              <span className="font-display text-lg text-silver-500 group-hover:text-white transition-colors whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Google, Meta, Anthropic — highlighted */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={0.2}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: 'Google',    desc: 'Cloud & AI Strategy Partner' },
            { name: 'Meta',      desc: 'Business Strategy Partner' },
            { name: 'Anthropic', desc: 'AI Integration Partner' },
          ].map(({ name, desc }) => (
            <div key={name} className="glass border-gradient rounded-sm px-6 py-3 flex items-center gap-3">
              <div className="w-2 h-2 bg-navy-500 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-silver-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
