import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Languages } from '@/components/languages'
import { PricingCard } from '@/components/pricing-card'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <main className="w-full max-w-6xl px-6 space-y-40">
        <Header />
        <Languages />
        <Testimonials />
        <PricingCard />
      </main>
      <Footer />
    </>
  )
}
