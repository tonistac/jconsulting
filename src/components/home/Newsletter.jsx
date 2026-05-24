import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/utils/animations'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail]       = useState('')
  const [loading, setLoading]   = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000)) // simulate
    toast.success("Thank you! You'll receive our next insights edition.", {
      style: { background: '#122E90', color: '#fff', border: '1px solid #1B3AA8' },
    })
    setEmail('')
    setLoading(false)
  }

  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-navy-900/20 blur-[80px] rounded-full" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-px w-8 bg-navy-500" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">
            Intelligence Briefing
          </span>
          <span className="h-px w-8 bg-navy-500" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.1}
          className="font-display font-semibold gradient-text mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          Stay Ahead of the Curve
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.2}
          className="text-silver-400 mb-10 leading-relaxed"
        >
          Join 14,000+ executives and practitioners receiving our weekly briefing on business strategy, technology trends, and financial intelligence — curated by JConsulting's senior partners.
        </motion.p>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.3}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-white/5 border border-white/10 rounded-sm px-5 py-3.5 text-sm text-white placeholder-silver-600 focus:outline-none focus:border-navy-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-7 py-3.5 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 hover:border-navy-400 transition-all duration-300 shadow-glow-sm hover:shadow-glow whitespace-nowrap disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : 'Subscribe Free'}
          </button>
        </motion.form>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.4}
          className="text-xs text-silver-700 mt-4"
        >
          No spam. Unsubscribe anytime. Read by executives at Google, Meta, RBC, and more.
        </motion.p>

        {/* Social proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.5}
          className="mt-8 flex flex-wrap justify-center gap-6"
        >
          {[
            { value: '14K+', label: 'Subscribers' },
            { value: '92%', label: 'Open Rate' },
            { value: '4.9★', label: 'Avg. Rating' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-counter text-2xl text-white">{value}</p>
              <p className="text-xs text-silver-600">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
