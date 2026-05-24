import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { staggerContainer, staggerItem, fadeLeft, fadeRight, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import { leadership, values } from '@/data/team'

function PageHero() {
  return (
    <section className="relative pt-20 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-navy-900/25 blur-[80px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-navy-500" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">About JConsulting</span>
          </div>
          <h1
            className="font-display font-semibold gradient-text leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Built for the Boldest<br />Business Challenges
          </h1>
          <p className="text-silver-400 text-xl leading-relaxed font-light max-w-2xl">
            Founded in Toronto in 2014, JConsulting brings together the world's top strategy, technology, and financial minds to help ambitious organizations achieve what others say is impossible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <h2 className="font-display font-semibold gradient-text mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              Our Story
            </h2>
            <div className="space-y-4 text-silver-400 leading-relaxed">
              <p>James Okafor left McKinsey in 2014 with a single thesis: enterprise consulting was broken. Clients were paying for slides, not solutions. For frameworks, not outcomes. For the appearance of progress, not the reality of transformation.</p>
              <p>He assembled a founding team of practitioners — engineers, financiers, operators — who had built and led things, not just advised on them. JConsulting's first client was a $400M Canadian manufacturer facing obsolescence. In 18 months, the client grew revenue by 34% and entered two new markets.</p>
              <p>Today, JConsulting serves 280+ organizations across 30 countries from our Toronto headquarters, with engagements ranging from C-suite strategy to deep technical implementation. The thesis hasn't changed.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            {/* Timeline */}
            <div className="relative space-y-8">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-navy-500 via-navy-600 to-transparent" />
              {[
                { year: '2014', event: 'Founded in Toronto by James Okafor' },
                { year: '2016', event: 'Opened Technology Practice; first enterprise AI engagement' },
                { year: '2018', event: 'Expanded to 50+ consultants; Financial Advisory launched' },
                { year: '2020', event: 'Cybersecurity & Cloud practice during global transformation surge' },
                { year: '2022', event: 'Partnerships announced with Google Cloud & Anthropic' },
                { year: '2024', event: '280+ global clients, 120 consultants, $4.2B client impact' },
              ].map(({ year, event }) => (
                <div key={year} className="flex gap-6 pl-10 relative">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-navy-500 rounded-full border-2 border-midnight" />
                  <div>
                    <span className="font-counter text-xl text-navy-400">{year}</span>
                    <p className="text-sm text-silver-400 mt-0.5">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MissionVision() {
  return (
    <section className="py-20 bg-navy-950/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: 'Mission',
              icon: '◈',
              title: 'To make every client unstoppable.',
              desc: 'We measure our success exclusively through client outcomes. Every project we take on, we ask: what does it take to make this organization genuinely unstoppable in their market?',
            },
            {
              label: 'Vision',
              icon: '◎',
              title: "Canada's most trusted global consulting firm.",
              desc: "We believe Canada produces the world's best consulting talent. Our vision is to build the defining Canadian consulting brand — one that leads not just nationally, but globally.",
            },
          ].map(({ label, icon, title, desc }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              className="glass border-gradient rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-navy-400">{icon}</span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">{label}</span>
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">{title}</h3>
              <p className="text-silver-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="What We Stand For" title="Our Values" className="mb-12" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map(({ icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="glass border-gradient rounded-sm p-6 text-center hover:bg-white/6 transition-colors group"
            >
              <span className="text-3xl text-navy-400 group-hover:text-navy-300 mb-4 block">{icon}</span>
              <h4 className="font-display text-lg font-semibold text-white mb-2">{title}</h4>
              <p className="text-silver-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Leadership"
          title="The Partners Behind the Work"
          subtitle="Our senior leadership team brings decades of practitioner experience from the world's top institutions."
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {leadership.map(({ name, role, bio, initials, gradient, linkedin }) => (
            <motion.div
              key={name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="glass border-gradient rounded-sm p-6 flex flex-col"
            >
              <div className={`w-16 h-16 rounded-sm bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-display font-semibold text-xl mb-5`}>
                {initials}
              </div>
              <h4 className="font-semibold text-white mb-0.5">{name}</h4>
              <p className="text-xs text-navy-400 mb-3 font-medium">{role}</p>
              <p className="text-silver-500 text-xs leading-relaxed flex-1">{bio}</p>
              <a href={linkedin} className="mt-4 text-xs text-navy-400 hover:text-white transition-colors inline-flex items-center gap-1">
                <span className="font-bold">in</span> View Profile →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — JConsulting | Canada's Premier Consulting Firm</title>
        <meta name="description" content="Learn about JConsulting — our story, mission, values, and the senior partners who lead our engagements." />
      </Helmet>
      <PageHero />
      <Story />
      <MissionVision />
      <Values />
      <Leadership />
    </>
  )
}
