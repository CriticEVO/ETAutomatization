"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Target, Users, Lightbulb } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export const AboutSection = memo(function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    })
    const element = document.getElementById("about-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [handleIntersection])

  const aboutItems = [
    {
      icon: Target,
      title: t("mission_title"),
      description: t("mission_desc"),
      color: "text-purple-600",
      bg: "bg-purple-100/30",
    },
    {
      icon: Users,
      title: t("team_title"),
      description: t("team_desc"),
      color: "text-blue-600",
      bg: "bg-blue-100/30",
    },
    {
      icon: Lightbulb,
      title: t("vision_title"),
      description: t("vision_desc"),
      color: "text-emerald-600",
      bg: "bg-emerald-100/30",
    },
  ]

  return (
    <section id="about-section" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Header */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                WE BUILD THE<br/>
                <span className="text-purple-600">NEW STANDARD</span>
              </h2>
              <div className="w-20 h-2 bg-slate-900 mb-8"></div>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                {t("about_subtitle")}
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {aboutItems.map((item, i) => (
                <div 
                  key={i}
                  className={`group bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col md:flex-row gap-8 items-start md:items-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className={`w-16 h-16 shrink-0 rounded-2xl ${item.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-100/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  )
})
