"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback, memo } from "react"
import { Send, Terminal, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const MessageItem = memo(function MessageItem({ message }: { message: Message }) {
  return (
    <div className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fade-in`}>
      <div
        className={`max-w-[240px] sm:max-w-xs lg:max-w-md px-3 sm:px-4 py-2 rounded-lg ${
          message.isUser ? "bg-blue-600 text-white" : "bg-gray-800 text-green-400 border border-gray-700"
        }`}
      >
        <p className="break-words">{message.text}</p>
        <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
      </div>
    </div>
  )
})

export const ChatConsole = memo(function ChatConsole() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Welcome to E&T Automatization AI Assistant! I can help you with business workflow automatization, AI integration services, process optimization, and workflow performance enhancement. How can I assist you today? 😊",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

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

    const element = document.getElementById("chat-console")
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [handleIntersection])

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response with automatization-focused responses
    timeoutRef.current = setTimeout(() => {
      const responses = [
        "I'd be happy to help you learn more about our business workflow automatization services and AI integration solutions. What specific area of automatization interests you most?",
        "Our ET automatization solutions can significantly improve your workflow performance and operational efficiency. Would you like to know more about our process automation capabilities?",
        "That's a great question! Our automatization specialists excel in custom AI implementations and workflow optimization. Let me connect you with one of our automation experts.",
        "We offer comprehensive automatization consulting services including RPA, AI integration, and business process optimization. I can schedule a demo to show you how our solutions work in practice.",
        "Our AI-powered automatization solutions have helped many businesses improve productivity and workflow performance. Would you like to see some case studies of successful automatization implementations?",
        "E&T Automatization specializes in intelligent workflow solutions, process automation, and AI-driven business optimization. How can we help transform your business operations?",
      ]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }, [inputValue])

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault()
        handleSendMessage()
      }
    },
    [handleSendMessage],
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  return (
    <section id="chat-console" className="py-8 sm:py-20 bg-gray-900/50 relative overflow-hidden">
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h2>AI Assistant for Business Workflow Automatization Consulting</h2>
        <p>
          Get instant support for your automatization needs with our AI-powered assistant. Ask questions about business
          workflow automatization, AI integration services, process optimization, workflow performance enhancement, and
          ET automatization solutions.
        </p>
        <p>
          Our intelligent assistant provides expert guidance on robotic process automation (RPA), enterprise automation,
          digital transformation, and AI-powered business solutions.
        </p>
      </div>

     <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-gray-900/50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Try Our Automatization{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Experience the power of AI-driven conversations about business workflow automatization. Ask questions about
            our services, get expert advice on process optimization, or request a demo of our intelligent automation
            solutions.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Console Header */}
          <div className="bg-black rounded-t-2xl border border-gray-800/50 p-2 sm:p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2 text-gray-300">
                  <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-mono">E&T-Automatization-Assistant v2.1.0</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
                <span className="text-xs">ONLINE</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="bg-black/95 backdrop-blur-sm border-x border-gray-800/50 h-48 sm:h-96 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm">
            {messages.map((message) => (
              <MessageItem key={message.id} message={message} />
            ))}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-800 text-green-400 border border-gray-700 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-black rounded-b-2xl border border-gray-800/50 border-t-0 p-2 sm:p-4">
            <div className="flex space-x-2 sm:space-x-3">
              <Input
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask about business workflow automatization, AI integration, or process optimization..."
                className="flex-1 bg-black/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 font-mono text-sm"
                aria-label="Chat with AI Assistant about automatization services"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-4 sm:px-6 transition-all duration-300 transform hover:scale-105 will-change-transform"
                aria-label="Send message to automatization AI assistant"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono hidden sm:block">
              {">"} Press Enter to send • Ask about automatization services, workflow optimization, or AI integration
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono sm:hidden">{">"} Automatization AI Assistant</p>
          </div>
        </div>
      </div>
    </section>
  )
})
