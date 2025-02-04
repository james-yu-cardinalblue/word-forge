import Hero from "./components/Hero"
import Challenge from "./components/Challenge"
import HowItWorks from "./components/HowItWorks"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"

export default function Home() {
  return (
    <main>
      <Hero />
      <Challenge />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
    </main>
  )
}

