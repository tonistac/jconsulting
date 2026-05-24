import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'

const services = [
  'Business Strategy',
  'Technology Transformation',
  'Financial Advisory',
  'Cybersecurity',
  'Cloud & AI',
  'Risk Management',
  'DevSecOps',
  'Digital Transformation',
  'Other / Not sure yet',
]

const faq = [
  {
    q: 'What is the typical engagement size?',
    a: 'Our engagements range from targeted 4-week strategy sprints ($25K+) to multi-year transformation programs ($1M+). We work with mid-market companies through Fortune 500 enterprises.',
  },
  {
    q: 'Do you work with clients outside Canada?',
    a: 'Yes. While we are headquartered in Toronto, we serve clients across North America, Europe, and increasingly in Asia Pacific. Our consultants travel or engage remotely as needed.',
  },
  {
    q: 'How quickly can you staff an engagement?',
    a: 'For most mandates, we can have a team mobilized within 5–10 business days. For urgent situations, we have a rapid response team available within 48 hours.',
  },
  {
    q: 'What makes JConsulting different from Big 4 firms?',
    a: 'We staff only senior practitioners on client work — no analysts or associates. Our fees reflect this, and so do our outcomes. Clients consistently cite our speed, directness, and execution capability as differentiators.',
  },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq]  = useState(null)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    toast.success("Message received! A partner will contact you within 2 hours.", {
      style: { background: '#122E90', color: '#fff', border: '1px solid #1B3AA8' },
      duration: 5000,
    })
    setForm({ name: '', email: '', company: '', service: '', message: '' })
    setLoading(false)
  }

  return (
    <>
      <Helmet>
        <title>Contact — JConsulting | Book a Consultation</title>
        <meta name="description" content="Get in touch with JConsulting. Book a consultation, ask about services, or speak with a senior partner." />
      </Helmet>
      <Toaster position="top-right" />

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Get In Touch</span>
            </div>
            <h1
              className="font-display font-semibold gradient-text leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Let's Start a Conversation
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed font-light max-w-2xl">
              Whether you&apos;re facing an urgent challenge or planning a major initiative, we&apos;d like to hear from you. A senior partner will personally respond within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              className="lg:col-span-3"
            >
              <h2 className="font-display text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Jane Smith' },
                    { name: 'email',   label: 'Work Email',    type: 'email', placeholder: 'jane@company.com' },
                    { name: 'company', label: 'Company',       type: 'text',  placeholder: 'Acme Corp' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name} className={name === 'message' ? 'sm:col-span-2' : ''}>
                      <label className="block text-xs font-semibold text-silver-500 mb-2 tracking-wide uppercase">{label}</label>
                      <input
                        type={type}
                        name={name}
                        required
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-silver-700 focus:outline-none focus:border-navy-500 transition-colors"
                      />
                    </div>
                  ))}

                  {/* Service select */}
                  <div>
                    <label className="block text-xs font-semibold text-silver-500 mb-2 tracking-wide uppercase">Service Area</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-midnight border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-navy-500 transition-colors"
                    >
                      <option value="">Select a service…</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-silver-500 mb-2 tracking-wide uppercase">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your challenge or initiative…"
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder-silver-700 focus:outline-none focus:border-navy-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-navy-600 hover:bg-navy-500 text-white text-sm font-semibold rounded-sm border border-navy-500 hover:border-navy-400 transition-all duration-300 shadow-glow hover:shadow-glow disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : 'Send Message →'}
                </button>

                <p className="text-xs text-silver-700 text-center">
                  All enquiries receive a personal response from a senior partner within 2 business hours.
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact info */}
              <div className="glass border-gradient rounded-sm p-6">
                <h3 className="font-semibold text-white mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: '⌖', label: 'Head Office',  value: '100 King Street West, Suite 5700\nToronto, ON  M5X 1C9' },
                    { icon: '⌕', label: 'Phone',        value: '+1 (416) 555-0100' },
                    { icon: '✉', label: 'Email',        value: 'info@jconsulting.ca' },
                    { icon: '⏱', label: 'Availability', value: '24/7 — Response in < 2 hrs' },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <span className="text-navy-400 mt-0.5 flex-shrink-0">{icon}</span>
                      <div>
                        <p className="text-xs text-silver-600 uppercase tracking-wider mb-0.5">{label}</p>
                        <p className="text-sm text-white whitespace-pre-line">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass border-gradient rounded-sm overflow-hidden h-44 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-silver-600 text-sm mb-1">📍 Toronto Financial District</p>
                  <p className="text-silver-700 text-xs">100 King Street West</p>
                </div>
              </div>

              {/* Status */}
              <div className="glass rounded-sm p-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse-slow flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-semibold">Available now</p>
                  <p className="text-xs text-silver-600">Avg. response time: 47 minutes</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ */}
          <div className="mt-20">
            <h2 className="font-display text-3xl font-semibold gradient-text mb-8 text-center">Frequently Asked Questions</h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="max-w-3xl mx-auto space-y-3"
            >
              {faq.map(({ q, a }, i) => (
                <motion.div key={i} variants={staggerItem} className="glass border-gradient rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-white text-sm">{q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="text-silver-500 text-xl flex-shrink-0"
                    >+</motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-silver-400 leading-relaxed">{a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
