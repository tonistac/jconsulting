import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/components/layout/Layout'
import Home      from '@/pages/Home'
import About     from '@/pages/About'
import Services  from '@/pages/Services'
import Portfolio from '@/pages/Portfolio'
import Careers   from '@/pages/Careers'
import Blog      from '@/pages/Blog'
import Contact   from '@/pages/Contact'

// Page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about"     element={<PageTransition><About /></PageTransition>} />
        <Route path="/services"  element={<PageTransition><Services /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/careers"   element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/blog"      element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/contact"   element={<PageTransition><Contact /></PageTransition>} />
        {/* 404 */}
        <Route path="*" element={
          <PageTransition>
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
              <p className="font-counter text-[8rem] text-navy-800 leading-none">404</p>
              <h1 className="font-display text-3xl text-white mb-4">Page Not Found</h1>
              <p className="text-silver-500 mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="px-8 py-3 bg-navy-600 hover:bg-navy-500 text-white text-sm font-medium rounded-sm border border-navy-500 transition-all">
                Back to Home
              </a>
            </div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
