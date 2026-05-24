import { Helmet } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Hero           from '@/components/home/Hero'
import TrustedBy      from '@/components/home/TrustedBy'
import ServicesPreview from '@/components/home/ServicesPreview'
import Stats           from '@/components/home/Stats'
import WhyUs           from '@/components/home/WhyUs'
import Testimonials    from '@/components/home/Testimonials'
import Support247      from '@/components/home/Support247'
import Newsletter      from '@/components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>JConsulting — Premium Global Consulting | Toronto, Canada</title>
        <meta name="description" content="JConsulting is Canada's premier consulting firm delivering business strategy, technology transformation, and financial advisory to global enterprises." />
      </Helmet>
      <Toaster position="top-right" />
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Support247 />
      <Newsletter />
    </>
  )
}
