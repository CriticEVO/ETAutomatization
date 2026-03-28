"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Bot, Database, BarChart3, Cog, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export const ServicesSection = memo(function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const services = [
    {
      icon: Bot,
      title: t("service1_title"),
      description: t("service1_desc"),
      features: [
        t("service1_f1"),
        t("service1_f2"),
        t("service1_f3"),
        t("service1_f4"),
      ],
    },
    {
      icon: Database,
      title: t("service2_title"),
      description: t("service2_desc"),
      features: [t("service2_f1"), t("service2_f2"), t("service2_f3")],
    },
    {
      icon: BarChart3,
      title: t("service3_title"),
      description: t("service3_desc"),
      features: [t("service3_f1"), t("service3_f2"), t("service3_f3")],
    },
    {
      icon: Cog,
      title: t("service4_title"),
      description: t("service4_desc"),
      features: [t("service4_f1"), t("service4_f2"), t("service4_f3")],
    },
    {
      icon: Zap,
      title: t("service5_title"),
      description: t("service5_desc"),
      features: [t("service5_f1"), t("service5_f2"), t("service5_f3")],
    },
    {
      icon: Shield,
      title: t("service6_title"),
      description: t("service6_desc"),
      features: [t("service6_f1"), t("service6_f2"), t("service6_f3")],
    },
  ]

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "50px",
    })

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section
      id="services-section"
      className="py-8 sm:py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden"
    >
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Comprehensive Automatization Services - Business Workflow Automation Solutions</h2>
        <p>{t("services_subtitle")}</p>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl transform-gpu"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            {t("services_title")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t("services_span")}</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            {t("services_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-gray-900/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-gray-800/20 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 will-change-transform ${isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 will-change-transform">
                  <service.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
