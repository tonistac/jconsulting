import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { caseStudies } from '@/data/portfolio'

const tagColorMap = {
  blue:   'blue',
  indigo: 'indigo',
  sky:    'sky',
  slate:  'slate',
  navy:   'blue',
  red:    'red',
}

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio — JConsulting | Case Studies & Client Outcomes</title>
        <meta name="description" content="Explore JConsulting case studies — real transformations, measurable impact, and client success stories across industries." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Portfolio</span>
            </div>
            <h1
              className="font-display font-semibold gradient-text leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Impact Measured, Not Just Promised
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed font-light max-w-2xl">
              Every engagement generates measurable outcomes. Here's a selection of transformations we're proud to have led.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className={`glass border-gradient rounded-sm p-7 flex flex-col ${i === 0 ? 'lg:col-span-2' : ''}`}
              >
                {/* Top meta */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <Badge color={tagColorMap[cs.tagColor] || 'blue'}>{cs.tag}</Badge>
                  {cs.partnership && (
                    <span className="text-xs text-silver-500 glass px-2 py-1 rounded-sm">
                      ◈ {cs.partnership} Partnership
                    </span>
                  )}
                  <span className="ml-auto text-xs text-silver-600">{cs.duration} · {cs.team}</span>
                </div>

                <p className="text-xs font-semibold text-silver-600 mb-2 uppercase tracking-wider">{cs.client}</p>
                <h3 className={`font-display font-semibold text-white mb-3 ${i === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {cs.title}
                </h3>
                <p className="text-silver-400 text-sm leading-relaxed mb-6 flex-1">{cs.summary}</p>

                {/* Metrics */}
                <div className={`grid gap-4 mt-auto pt-6 border-t border-white/5 ${i === 0 ? 'grid-cols-3' : 'grid-cols-3'}`}>
                  {cs.metrics.map(({ value, label }) => (
                    <div key={label}>
                      <p className="font-counter text-3xl text-white">{value}</p>
                      <p className="text-xs text-silver-500 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partnership strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            className="mt-16 glass border-gradient rounded-sm p-8 md:p-10"
          >
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-navy-400 mb-6">
              Featured Enterprise Partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Google',    role: 'Cloud & AI — Joint delivery on 3 enterprise mandates' },
                { name: 'Meta',      role: 'Business Strategy — Emerging markets expansion research' },
                { name: 'Anthropic', role: 'AI Integration — Claude-powered enterprise tooling' },
              ].map(({ name, role }) => (
                <div key={name} className="flex items-center gap-3 glass px-5 py-3 rounded-sm">
                  <div className="w-2 h-2 bg-navy-400 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-silver-500">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 shadow-glow transition-all duration-300"
            >
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
