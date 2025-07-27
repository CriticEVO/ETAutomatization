"use client"

import { useEffect, useState } from "react"
import { Bot, Database, BarChart3, Cog, Zap, Shield } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Bot,
      title: "AI Chatbots & Assistants",
      description:
        "Custom AI-powered chatbots and virtual assistants to enhance customer service and internal operations.",
      features: ["24/7 Customer Support", "Natural Language Processing", "Multi-platform Integration"],
    },
    {
      icon: Database,
      title: "Data Analytics & ML",
      description: "Advanced machine learning models and data analytics solutions to extract insights from your data.",
      features: ["Predictive Analytics", "Real-time Processing", "Custom ML Models"],
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "AI-driven business intelligence platforms that transform raw data into actionable insights.",
      features: ["Interactive Dashboards", "Automated Reporting", "Trend Analysis"],
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks.",
      features: ["Workflow Optimization", "RPA Integration", "Smart Decision Making"],
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems and applications.",
      features: ["API Development", "System Integration", "Performance Optimization"],
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI implementations are secure, ethical, and compliant with industry standards.",
      features: ["Security Audits", "Compliance Monitoring", "Ethical AI Guidelines"],
    },
  ]

  return (
    <section
      id="services-section"
      className="py-8 sm:py-20 bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Comprehensive AI solutions tailored to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-900/20 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-gray-800/20 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
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
}
