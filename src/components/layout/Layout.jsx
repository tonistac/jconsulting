import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from '@/components/shared/BackToTop'
import ChatWidget from '@/components/shared/ChatWidget'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-midnight">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <ChatWidget />
    </div>
  )
}
