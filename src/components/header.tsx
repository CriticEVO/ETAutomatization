"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigationItems = [
    { name: t("nav_home"), id: "hero-section" },
    { name: t("nav_about"), id: "about-section" },
    { name: t("nav_services"), id: "services-section" },
    { name: t("nav_contact"), id: "contact-section" },
  ]

  const scrollToServices = useCallback(() => {
    const element = document.getElementById("services-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("hero-section")}>
            <div className="w-10 h-10 relative transform transition-all duration-300 group-hover:scale-110 will-change-transform">
              <img
                src="/images/etai-logo-clean.png"
                alt="E&T Automatization Logo"
                className="w-full h-full object-contain brightness-110 contrast-110 saturate-90"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {t("hero_title")}
              </h1>
              <p className="text-xs text-gray-500 -mt-1">{t("ai_integration")}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-gray-900/50 rounded-full p-1 border border-gray-800">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  language === "en" ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("bg")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  language === "bg" ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                BG
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 will-change-transform"
              >
                {t("view_services")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800/50">
            <nav className="flex flex-col space-y-4 p-6">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={scrollToServices}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all duration-300 mt-4 will-change-transform"
              >
                {t("view_services")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
})
