"use client"

import { useEffect, useState, useCallback, memo } from "react"
import { Phone, Mail, User, Send } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export const ContactSection = memo(function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    })
    const element = document.getElementById("contact-section")
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [handleIntersection])

  return (
    <section id="contact-section" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Header */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                LET'S TALK<br/>
                <span className="text-purple-600">FUTURE.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                {t("contact_subtitle")}
              </p>

              {/* Email Card */}
              <div className="group bg-slate-900 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-110">
                    <Send className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Send a message</span>
                    <a href="mailto:contact@et-automatization.com" className="text-xl sm:text-2xl font-black text-white hover:text-purple-400 transition-colors tracking-tight">
                      contact@et-automatization.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact People */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { name: t("contact_name_enyo"), phone: t("contact_phone_enyo"), role: "AI Strategist", delay: 200 },
                { name: t("contact_name_todor"), phone: t("contact_phone_todor"), role: "Technical Director", delay: 400 }
              ].map((person, i) => (
                <div 
                  key={i}
                  className={`group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${person.delay}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-500">
                    <User className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-purple-600 transition-colors">{person.name}</h3>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{person.role}</p>
                  </div>
                  <div className="pt-6 border-t border-slate-200/50 flex items-center gap-3">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <a href={`tel:${person.phone}`} className="text-lg font-black text-slate-900 hover:text-purple-600 transition-colors">
                      {person.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
