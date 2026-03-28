"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "../lib/language-context"

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
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection("hero-section")}>
            <div className="w-10 h-10 relative transform transition-all duration-500 group-hover:rotate-[360deg] will-change-transform">
              <img
                src="/images/etai-logo-clean.png"
                alt="E&T Automatization Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">
                {t("hero_title")}
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-purple-600 font-bold -mt-0.5">{t("ai_integration")}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200/50">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  language === "en" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("bg")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 ${
                  language === "bg" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-slate-600"
                }`}
              >
                BG
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={scrollToServices}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-200"
              >
                {t("view_services")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-slate-900 p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-4 p-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-bold text-slate-700 hover:text-purple-600 transition-colors duration-300 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={scrollToServices}
                className="bg-slate-900 hover:bg-slate-800 text-white w-full py-6 rounded-xl font-bold mt-4"
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
