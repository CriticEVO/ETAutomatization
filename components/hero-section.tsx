"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { ChevronDown, Zap, Brain, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HeroSection = memo(function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const fullText = "Transforming Business with AI Intelligence"

  const scrollToChat = useCallback(() => {
    const element = document.getElementById("chat-console")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero-section"
      className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
    >
      {/* Animated background elements - optimized with transform3d */}
      <div className="absolute inset-0 will-change-transform">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse transform-gpu"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000 transform-gpu"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-cyan-500/3 rounded-full blur-3xl animate-spin-slow transform-gpu"></div>
      </div>

      {/* Floating icons - optimized */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        <Zap className="absolute top-1/4 left-1/4 w-8 h-8 text-purple-400/20 animate-float transform-gpu" />
        <Brain className="absolute top-1/3 right-1/4 w-10 h-10 text-cyan-400/20 animate-float-delayed transform-gpu" />
        <Cpu className="absolute bottom-1/3 left-1/3 w-6 h-6 text-gray-400/20 animate-float-slow transform-gpu" />
      </div>

      <div
        className={`text-center z-10 max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2 sm:mb-4">
            E&T Automatization
          </h1>
          <div className="h-10 sm:h-16 flex items-center justify-center">
            <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light px-2">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          We specialize in seamlessly integrating cutting-edge AI solutions into your business operations, driving
          efficiency, innovation, and competitive advantage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button
            size="lg"
            onClick={scrollToChat}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 will-change-transform"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent will-change-transform"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator - optimized */}
      <button
        onClick={scrollToChat}
        className="absolute bottom-2 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow hover:text-white transition-colors duration-300 cursor-pointer will-change-transform"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      </button>
    </section>
  )
})
