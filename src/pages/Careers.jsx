import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'

const openings = [
  { title: 'Senior Strategy Consultant',         team: 'Strategy',    location: 'Toronto / Remote', type: 'Full-time' },
  { title: 'Technology Principal — Cloud & AI',  team: 'Technology',  location: 'Toronto / Remote', type: 'Full-time' },
  { title: 'Financial Advisory Associate',       team: 'Finance',     location: 'Toronto',          type: 'Full-time' },
  { title: 'Cybersecurity Specialist',           team: 'Cyber',       location: 'Remote',           type: 'Full-time' },
  { title: 'DevSecOps Lead',                     team: 'Technology',  location: 'Toronto / Remote', type: 'Full-time' },
  { title: 'Business Analyst — Digital',        team: 'Strategy',    location: 'Remote',           type: 'Contract' },
]

const benefits = [
  { icon: '◈', title: 'Competitive Total Comp', desc: 'Top-quartile salary + performance bonus + equity participation for senior roles.' },
  { icon: '◎', title: 'Remote-First Culture',   desc: 'Work from anywhere. We focus on outcomes, not office hours.' },
  { icon: '⬡', title: 'Learning & Development', desc: '$5,000 annual L&D budget. MBA sponsorship available for senior consultants.' },
  { icon: '◉', title: 'Health & Wellness',       desc: 'Comprehensive benefits package including mental health coverage and wellness stipend.' },
  { icon: '◇', title: 'Meaningful Work',         desc: 'Work on complex, high-stakes mandates with real business impact from day one.' },
  { icon: '▣', title: '4-Day Summer Fridays',    desc: 'Half-days on Fridays from June through August.' },
]

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers — JConsulting | Join the Team</title>
        <meta name="description" content="Build your career at JConsulting. We're hiring senior strategy, technology, and financial consultants in Toronto and remote." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy-900/15 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Careers</span>
            </div>
            <h1
              className="font-display font-semibold gradient-text leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Join the Builders.<br />Not the Advisors.
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed font-light max-w-2xl">
              We're growing and looking for practitioners who've seen what great looks like — and want to deliver it for clients who are redefining their industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={viewportConfig}>
              <h2 className="font-display font-semibold gradient-text mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                A Different Kind of Career
              </h2>
              <div className="space-y-4 text-silver-400 leading-relaxed">
                <p>At JConsulting, you won't write decks for three years before talking to a client. From week one, you're in the room, contributing to real decisions with real stakes.</p>
                <p>We hire experienced practitioners — not fresh graduates — because we believe great consulting starts with having done the thing you're advising on.</p>
                <p>Our culture rewards intellectual courage, directness, and an obsessive commitment to client outcomes. If that sounds like you, we'd like to meet you.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              className="glass border-gradient rounded-sm p-8"
            >
              <p className="font-display text-5xl text-navy-700 leading-none mb-4">"</p>
              <p className="font-display text-xl italic text-white leading-relaxed">
                The best career decision I made was joining a firm where I was treated as a professional from day one, not trained to eventually become one.
              </p>
              <footer className="mt-4 text-xs text-silver-500">— Senior Technology Consultant, 3 years at JConsulting</footer>
            </motion.div>
          </div>

          {/* Benefits */}
          <SectionTitle eyebrow="Why JConsulting" title="What We Offer" className="mb-10" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20"
          >
            {benefits.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="glass border-gradient rounded-sm p-6 hover:bg-white/5 transition-colors group"
              >
                <span className="text-2xl text-navy-400 group-hover:text-navy-300 block mb-3">{icon}</span>
                <h4 className="font-semibold text-white mb-2 text-sm">{title}</h4>
                <p className="text-silver-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Open roles */}
          <SectionTitle eyebrow="Open Positions" title="Current Openings" className="mb-10" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-3"
          >
            {openings.map(({ title, team, location, type }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                whileHover={{ x: 4 }}
                className="glass border-gradient rounded-sm px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-semibold text-white">{title}</h4>
                  <Badge color="blue">{team}</Badge>
                  {type === 'Contract' && <Badge color="slate">Contract</Badge>}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-silver-500">📍 {location}</span>
                  <Link
                    to="/contact"
                    className="text-xs text-navy-400 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Apply →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Speculative */}
          <div className="mt-6 glass rounded-sm px-6 py-5 text-center">
            <p className="text-silver-400 text-sm">
              Don't see your role? We hire exceptional people regardless of current openings.{' '}
              <Link to="/contact" className="text-navy-400 hover:text-white transition-colors">
                Send us your CV →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
