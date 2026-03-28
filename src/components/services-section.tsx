"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Bot, Database, BarChart3, Cog, Zap, Shield, ArrowUpRight } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export const ServicesSection = memo(function ServicesSection() {
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
    const element = document.getElementById("services-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [handleIntersection])

  const services = [
    {
      icon: Bot,
      title: t("service1_title"),
      description: t("service1_desc"),
      size: "lg",
      color: "bg-purple-600",
      lightColor: "bg-purple-50",
    },
    {
      icon: Database,
      title: t("service2_title"),
      description: t("service2_desc"),
      size: "md",
      color: "bg-blue-600",
      lightColor: "bg-blue-50",
    },
    {
      icon: BarChart3,
      title: t("service3_title"),
      description: t("service3_desc"),
      size: "md",
      color: "bg-cyan-600",
      lightColor: "bg-cyan-50",
    },
    {
      icon: Cog,
      title: t("service4_title"),
      description: t("service4_desc"),
      size: "md",
      color: "bg-indigo-600",
      lightColor: "bg-indigo-50",
    },
    {
      icon: Zap,
      title: t("service5_title"),
      description: t("service5_desc"),
      size: "lg",
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
    },
    {
      icon: Shield,
      title: t("service6_title"),
      description: t("service6_desc"),
      size: "md",
      color: "bg-slate-900",
      lightColor: "bg-slate-50",
    },
  ]

  return (
    <section id="services-section" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9]">
                CORE<br/>
                <span className="text-purple-600">CAPABILITIES</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium">
                {t("services_subtitle")}
              </p>
            </div>
            <div className="hidden md:block pb-2">
              <div className="text-8xl font-black text-slate-900/5 select-none">01</div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-slate-100 p-10 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col justify-between ${
                service.size === 'lg' ? 'md:col-span-3' : 'md:col-span-2'
              } ${service.lightColor} hover:bg-white`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-[15deg] transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Capability.{String(i+1).padStart(2, '0')}</span>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-slate-900" />
                </div>
              </div>

              {/* Decorative Blur */}
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${service.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
