import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import { services } from '@/data/services'

export default function ServicesPreview() {
  const featured = services.slice(0, 6)

  return (
    <section className="relative py-28 bg-midnight overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-navy-950/40 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="What We Do"
          title="End-to-End Consulting Excellence"
          subtitle="From boardroom strategy to deep technical implementation, we cover every dimension of enterprise transformation."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to="/services"
                className="group block glass border-gradient rounded-sm p-7 h-full hover:bg-white/6 transition-all duration-400"
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-3xl text-navy-400 group-hover:text-navy-300 transition-colors">
                    {svc.icon}
                  </span>
                  <span className="text-silver-700 group-hover:text-silver-400 text-xs transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-white mb-2 group-hover:gradient-text-blue transition-all">
                  {svc.title}
                </h3>
                <p className="text-xs font-medium text-navy-400 mb-3 tracking-wide uppercase">
                  {svc.short}
                </p>
                <p className="text-silver-500 text-sm leading-relaxed line-clamp-3">
                  {svc.description}
                </p>

                {/* Learn more */}
                <div className="mt-5 flex items-center gap-2 text-xs text-silver-600 group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/8 text-white text-sm font-medium rounded-sm border border-white/10 hover:border-navy-500 transition-all duration-300"
          >
            View all 8 services
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
