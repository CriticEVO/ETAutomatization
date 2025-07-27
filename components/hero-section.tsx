"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Zap, Brain, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const fullText = "Transforming Business with AI Intelligence"

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

  const scrollToChat = () => {
    const element = document.getElementById("chat-console")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-cyan-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap className="absolute top-1/4 left-1/4 w-8 h-8 text-purple-400/20 animate-float" />
        <Brain className="absolute top-1/3 right-1/4 w-10 h-10 text-cyan-400/20 animate-float-delayed" />
        <Cpu className="absolute bottom-1/3 left-1/3 w-6 h-6 text-gray-400/20 animate-float-slow" />
      </div>

      <div
        className={`text-center z-10 max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            ET Automatization
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          We specialize in seamlessly integrating cutting-edge AI solutions into your business operations, driving
          efficiency, innovation, and competitive advantage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToChat}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToChat}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-gray-400 hover:text-white transition-colors duration-300" />
      </button>
    </section>
  )
}
