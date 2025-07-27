"use client"

import { useEffect, useState } from "react"
import { Target, Users, Lightbulb } from "lucide-react"

export function AboutSection() {
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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 to-cyan-900/5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ET Automatization
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are pioneers in AI integration, helping businesses unlock their full potential through intelligent
            automation and cutting-edge artificial intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 ${isVisible ? `opacity-100 translate-y-0 ${item.delay}` : "opacity-0 translate-y-10"}`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 transform transition-transform duration-300 hover:rotate-12">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
