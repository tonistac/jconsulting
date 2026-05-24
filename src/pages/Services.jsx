import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { services } from '@/data/services'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <>
      <Helmet>
        <title>Services — JConsulting | Strategic, Technology & Financial Consulting</title>
        <meta name="description" content="Explore JConsulting's full suite of consulting services — from business strategy and technology transformation to financial advisory and cybersecurity." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy-900/20 blur-[100px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Services</span>
            </div>
            <h1
              className="font-display font-semibold gradient-text leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Consulting Built for the Enterprise
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed font-light max-w-2xl">
              Eight integrated practice areas. One unified team. Every service is designed to deliver measurable outcomes — not just recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                variants={staggerItem}
                onClick={() => setActive(active === svc.id ? null : svc.id)}
                className="cursor-pointer"
              >
                <motion.div
                  layout
                  className={`glass border-gradient rounded-sm p-7 transition-all duration-300 ${
                    active === svc.id ? 'bg-navy-900/30 border-navy-600/40' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl text-navy-400">{svc.icon}</span>
                      <div>
                        <h3 className="font-display font-semibold text-xl text-white">{svc.title}</h3>
                        <p className="text-xs text-navy-400 font-medium uppercase tracking-wider mt-0.5">{svc.short}</p>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: active === svc.id ? 45 : 0 }}
                      className="text-silver-600 text-xl mt-1"
                    >+</motion.span>
                  </div>

                  <p className="text-silver-400 text-sm leading-relaxed mb-5">{svc.description}</p>

                  <AnimatePresence>
                    {active === svc.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/5">
                          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-silver-600 mb-3">Key Capabilities</p>
                          <div className="flex flex-wrap gap-2">
                            {svc.features.map(f => (
                              <Badge key={f} color="blue">{f}</Badge>
                            ))}
                          </div>
                          <Link
                            to="/contact"
                            className="mt-5 inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors"
                          >
                            Discuss this service →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Number */}
                  <div className="mt-3 flex items-center justify-end">
                    <span className="font-counter text-4xl text-silver-800">0{i + 1}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.3 }}
            className="mt-16 glass border-gradient rounded-sm p-10 text-center"
          >
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Not sure which service you need?
            </h2>
            <p className="text-silver-400 mb-8 max-w-lg mx-auto">
              Book a complimentary 45-minute discovery session with a senior partner. We'll help you identify the highest-leverage interventions for your specific situation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 shadow-glow transition-all duration-300"
            >
              Book Free Discovery Session
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
