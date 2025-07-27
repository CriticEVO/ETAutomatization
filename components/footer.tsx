"use client"

import { Zap, Github, Linkedin, Twitter } from "lucide-react"

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

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Zap className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ET Automatization
                </h3>
                <p className="text-sm text-gray-500">AI Integration Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Transforming businesses through cutting-edge AI integration. We specialize in seamlessly implementing
              artificial intelligence solutions that drive efficiency, innovation, and competitive advantage.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about-section" },
                { name: "Services", href: "#services-section" },
                { name: "AI Assistant", href: "#chat-console" },
                { name: "Case Studies", href: "#" },
                { name: "Blog", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "AI Chatbots",
                "Machine Learning",
                "Process Automation",
                "Data Analytics",
                "AI Integration",
                "Consulting",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:translate-x-1 transform inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">© {currentYear} ET Automatization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
