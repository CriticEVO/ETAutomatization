"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Target, Users, Lightbulb } from "lucide-react"

export const AboutSection = memo(function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [handleIntersection])

  const aboutItems = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To democratize AI technology and make it accessible for businesses of all sizes, driving innovation and growth.",
      delay: "delay-200",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Expert AI engineers, data scientists, and business consultants dedicated to your success.",
      delay: "delay-400",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description:
        "A future where AI seamlessly integrates with human creativity to solve complex business challenges.",
      delay: "delay-600",
    },
  ]

  return (
    <section id="about-section" className="py-8 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-cyan-900/5"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              E&T Automatization
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            We are pioneers in AI integration, helping businesses unlock their full potential through intelligent
            automation and cutting-edge artificial intelligence solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className={`bg-gray-900/30 backdrop-blur-sm p-4 sm:p-8 rounded-2xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 will-change-transform ${isVisible ? `opacity-100 translate-y-0 ${item.delay}` : "opacity-0 translate-y-10"}`}
            >
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transform transition-transform duration-300 hover:rotate-12 will-change-transform">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
