import { HeroSection } from "./components/hero-section"
import { ServicesSection } from "./components/services-section"
import { AboutSection } from "./components/about-section"
import { ContactSection } from "./components/contact-section"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { LanguageProvider } from "./lib/language-context"

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
