import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section className="relative py-28 bg-midnight overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-navy-950/20 to-midnight" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="We let results speak. Here's what leaders say after working with us."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Featured testimonial */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass border-gradient rounded-sm p-8 md:p-10 h-full"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-navy-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote>
                  <span className="font-display text-6xl text-navy-700 leading-none block mb-2">"</span>
                  <p className="text-white font-light leading-relaxed text-lg font-display italic">
                    {t.quote}
                  </p>
                </blockquote>

                {/* Metric badge */}
                <div className="mt-6 inline-flex items-center gap-2 glass px-4 py-2 rounded-sm">
                  <span className="w-2 h-2 bg-navy-400 rounded-full" />
                  <span className="text-sm text-navy-300 font-semibold">{t.metric}</span>
                </div>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className={`w-12 h-12 rounded-sm bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-semibold text-sm font-display`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-silver-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {testimonials.map((item, i) => (
              <motion.button
                key={item.id}
                variants={staggerItem}
                onClick={() => setActive(i)}
                className={`text-left glass rounded-sm p-5 border transition-all duration-300 ${
                  active === i
                    ? 'border-navy-500 bg-navy-900/30'
                    : 'border-white/5 hover:border-white/10 hover:bg-white/4'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-sm bg-gradient-to-br ${item.avatarBg} flex items-center justify-center text-white text-xs font-semibold font-display`}>
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-silver-500">{item.company}</p>
                  </div>
                </div>
                <p className="text-xs text-silver-400 line-clamp-2">{item.quote.slice(0, 100)}…</p>
                <p className="text-xs text-navy-400 font-semibold mt-2">{item.metric}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-sm ${
                active === i ? 'w-6 h-2 bg-navy-500' : 'w-2 h-2 bg-silver-700 hover:bg-silver-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
