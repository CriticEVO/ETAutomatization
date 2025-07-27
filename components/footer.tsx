"use client"

import { Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Company Info */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-6 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                E&T Automatization
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">AI Integration Specialists</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs sm:text-sm">© 2025 E&T Automatization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
