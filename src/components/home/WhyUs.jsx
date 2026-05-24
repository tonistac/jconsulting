import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'

const pillars = [
  {
    icon: '◈',
    title: 'Senior Practitioners Only',
    desc: 'Every engagement is led by former McKinsey, Goldman Sachs, and Big Tech alumni. No junior consultants on client work.',
  },
  {
    icon: '⬡',
    title: 'Canadian Roots, Global Reach',
    desc: 'Headquartered in Toronto with boots on the ground in 30+ countries. We combine local market intelligence with global best practice.',
  },
  {
    icon: '◎',
    title: 'Outcome-Aligned Fees',
    desc: "A portion of our fees are tied to measurable outcomes. We win when you win — that's the only arrangement we accept.",
  },
  {
    icon: '◉',
    title: 'Speed Without Compromise',
    desc: 'Our proprietary methodologies deliver enterprise-grade results in weeks, not quarters. Urgency is embedded in our culture.',
  },
  {
    icon: '◇',
    title: '24/7 Dedicated Support',
    desc: "Your engagement team is reachable around the clock. Critical situations don't respect business hours, and neither do we.",
  },
  {
    icon: '▣',
    title: 'IP-Rich Methodologies',
    desc: 'We leave behind playbooks, frameworks, and trained teams — not dependencies. Our clients become more capable, not more reliant.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-28 bg-midnight overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: editorial content */}
          <div>
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-navy-500" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">
                  Why JConsulting
                </span>
              </div>
              <h2
                className="font-display font-semibold gradient-text leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                A Different Kind of Consulting Firm
              </h2>
              <p className="text-silver-400 text-lg leading-relaxed mb-8 font-light">
                We built JConsulting because the world didn't need another consulting firm — it needed a better one. One that moves faster, thinks deeper, and measures success in client outcomes rather than billable hours.
              </p>

              {/* Large quote */}
              <blockquote className="relative glass border-gradient rounded-sm px-6 py-5 mb-8">
                <span className="absolute top-3 left-4 font-display text-5xl text-navy-700 leading-none">"</span>
                <p className="text-white font-display text-lg italic leading-relaxed pl-6">
                  We don't just advise — we build. Every recommendation we make, we'd stake our reputation on executing ourselves.
                </p>
                <footer className="mt-3 pl-6 text-xs text-silver-500">
                  — James Okafor, Founder & CEO
                </footer>
              </blockquote>

              {/* CTA */}
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-navy-400 hover:text-white transition-colors group"
              >
                <span>Meet our leadership team</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: pillar grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="glass border-gradient rounded-sm p-5 hover:bg-white/6 transition-all duration-300 group"
              >
                <span className="text-2xl text-navy-400 group-hover:text-navy-300 transition-colors block mb-3">
                  {icon}
                </span>
                <h4 className="font-semibold text-white text-sm mb-2">{title}</h4>
                <p className="text-silver-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
