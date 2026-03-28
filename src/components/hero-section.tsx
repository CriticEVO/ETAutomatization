"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { ChevronRight, ArrowRight, Play, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { useLanguage } from "../lib/language-context"

export const HeroSection = memo(function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const scrollToServices = useCallback(() => {
    const element = document.getElementById("services-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh"
    >
      {/* Decorative Aurora */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[40%] bg-cyan-100/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/[0.03] border border-slate-900/10 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {t("ai_integration")}
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                {t("hero_title").split(" ").map((word, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span className="block animate-reveal" style={{ animationDelay: `${i * 0.1 + 0.2}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="text-xl md:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium mb-10 tracking-tight transition-all duration-1000 delay-500 opacity-0 translate-y-4" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(1rem)' }}>
                {t("hero_description")}
              </p>

              <div className="flex flex-wrap gap-6 items-center transition-all duration-1000 delay-700 opacity-0 translate-y-4" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(1rem)' }}>
                <Button
                  onClick={scrollToServices}
                  className="h-16 px-10 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl group transition-all duration-500 shadow-2xl shadow-slate-900/10"
                >
                  <span className="text-lg font-black">{t("view_services")}</span>
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                <button className="flex items-center space-x-4 group py-2">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                    <Play className="w-4 h-4 text-slate-900 fill-slate-900" />
                  </div>
                  <span className="text-lg font-black text-slate-900">{t("learn_more")}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className={`relative transition-all duration-1500 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              {/* Glass Card */}
              <div className="glass-card rounded-[3rem] p-8 aspect-square flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="relative">
                  <Sparkles className="w-10 h-10 text-purple-600 mb-6" />
                  <div className="space-y-4">
                    <div className="h-2 w-32 bg-slate-900/10 rounded-full"></div>
                    <div className="h-2 w-48 bg-slate-900/5 rounded-full"></div>
                    <div className="h-2 w-40 bg-slate-900/5 rounded-full"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl font-black text-slate-900/20 mb-4 leading-none select-none">
                    AI WORKFLOW<br/>AUTOMATION
                  </div>
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Tech Label */}
      <div className="absolute bottom-20 right-0 transform translate-x-1/4 select-none pointer-events-none opacity-[0.03]">
        <div className="text-[25vh] font-black tracking-tighter leading-none whitespace-nowrap">
          FUTURE INTELLIGENCE
        </div>
      </div>
    </section>
  )
})
