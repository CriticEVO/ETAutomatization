"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Phone, Mail, User } from "lucide-react"

export const ContactSection = memo(function ContactSection() {
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

    const element = document.getElementById("contact-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section id="contact-section" className="py-8 sm:py-20 bg-black relative overflow-hidden">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>Contact E&T Automatization - Get in Touch with Our Automation Experts</h2>
        <p>
          Contact our automatization specialists for business workflow automation consulting, AI integration services,
          and intelligent process optimization solutions. Reach out to discuss your automation needs.
        </p>
      </div>

      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transform-gpu"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transform-gpu"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/3 to-cyan-500/3 rounded-full blur-3xl transform-gpu"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Information
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Ready to transform your business with AI automation? Get in touch with our experts to discuss your
            automatization needs.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Enyo Yanakiev */}
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 will-change-transform text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:rotate-12 will-change-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Enyo Yanakiev</h3>
                <div className="flex items-center justify-center text-gray-300 mb-2">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  <a
                    href="tel:+359887185580"
                    className="hover:text-white transition-colors duration-300"
                    aria-label="Call Enyo Yanakiev"
                  >
                    +359 88 718 5580
                  </a>
                </div>
              </div>
            </div>

            {/* Todor Enchev */}
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 will-change-transform text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 hover:rotate-12 will-change-transform">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Todor Enchev</h3>
                <div className="flex items-center justify-center text-gray-300 mb-2">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  <a
                    href="tel:+359896767280"
                    className="hover:text-white transition-colors duration-300"
                    aria-label="Call Todor Enchev"
                  >
                    +359 89 676 7280
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="text-center">
            <div className="bg-gray-900/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-800/30 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 will-change-transform inline-block">
              <div className="flex items-center justify-center text-gray-300 text-lg sm:text-xl">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span className="mr-2">mail:</span>
                <a
                  href="mailto:contact@et-automatization.com"
                  className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
                  aria-label="Send email to E&T Automatization"
                >
                  contact@et-automatization.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
