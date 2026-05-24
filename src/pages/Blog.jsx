import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { staggerContainer, staggerItem, viewportConfig } from '@/utils/animations'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'
import { blogPosts, blogCategories } from '@/data/blogPosts'

const catColor = { Technology: 'blue', Finance: 'slate', Strategy: 'indigo', Cybersecurity: 'red' }

export default function Blog() {
  const [category, setCategory] = useState('All')
  const [search, setSearch]     = useState('')

  const filtered = blogPosts.filter(p => {
    const matchCat = category === 'All' || p.category === category
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = blogPosts.find(p => p.featured)
  const rest      = filtered.filter(p => !p.featured || category !== 'All' || search)

  return (
    <>
      <Helmet>
        <title>Insights — JConsulting | Strategy, Technology & Finance Intelligence</title>
        <meta name="description" content="Read JConsulting's latest thinking on business strategy, technology transformation, financial markets, and more." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-navy-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-navy-400">Insights</span>
            </div>
            <h1
              className="font-display font-semibold gradient-text leading-tight mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
            >
              Intelligence for Leaders
            </h1>
            <p className="text-silver-400 text-xl leading-relaxed font-light max-w-xl">
              Original thinking on strategy, technology, and finance — written by practitioners, for leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search + filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-sm px-5 py-3 text-sm text-white placeholder-silver-600 focus:outline-none focus:border-navy-500 transition-colors"
            />
            <div className="flex gap-2 flex-wrap">
              {blogCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
                    category === cat
                      ? 'bg-navy-600 text-white border border-navy-500'
                      : 'glass text-silver-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured article */}
          {featured && category === 'All' && !search && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass border-gradient rounded-sm p-8 md:p-10 mb-8 grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <Badge color={catColor[featured.category] || 'blue'} className="mb-4">{featured.category}</Badge>
                <h2 className="font-display font-semibold text-3xl text-white mb-3 leading-tight">{featured.title}</h2>
                <p className="text-silver-400 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-silver-600">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-blue-700 to-navy-800 flex items-center justify-center font-display font-bold text-2xl text-white">
                  {featured.authorInitials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{featured.author}</p>
                  <p className="text-xs text-silver-500">{featured.authorRole}</p>
                </div>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-navy-600 hover:bg-navy-500 text-white text-xs font-medium rounded-sm border border-navy-500 transition-all shadow-glow-sm"
                >
                  Read Article →
                </Link>
              </div>
            </motion.div>
          )}

          {/* Article grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {(category !== 'All' || search ? filtered : rest).map(post => (
              <motion.article
                key={post.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="glass border-gradient rounded-sm p-6 flex flex-col hover:bg-white/5 transition-all duration-300"
              >
                <Badge color={catColor[post.category] || 'blue'} className="mb-4 self-start">{post.category}</Badge>
                <h3 className="font-display font-semibold text-lg text-white leading-snug mb-3">{post.title}</h3>
                <p className="text-silver-500 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-blue-700 to-navy-800 flex items-center justify-center text-white text-xs font-semibold">
                      {post.authorInitials}
                    </div>
                    <div>
                      <p className="text-xs text-white font-medium">{post.author}</p>
                      <p className="text-xs text-silver-600">{post.readTime}</p>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs text-navy-400 hover:text-white transition-colors"
                  >
                    Read →
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-silver-500">No articles found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
