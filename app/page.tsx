import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ChatConsole } from "@/components/chat-console"
import { AboutSection } from "@/components/about-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ChatConsole />
      </main>
      <Footer />
    </div>
  )
}
