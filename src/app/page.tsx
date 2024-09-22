// "use client"

import { HeroSection } from "@/components/HeroSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { PricingSection } from "@/components/PricingSection"

export default function JourlixLandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-gray-100">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  )
}