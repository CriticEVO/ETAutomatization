"use client"

import { memo } from "react"
import { useLanguage } from "../lib/language-context"

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-50 border-t border-slate-200 relative overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Company Info */}
          <div className="flex items-center space-x-4 mb-8 group cursor-pointer">
            <div className="w-14 h-14 relative transform transition-all duration-500 group-hover:scale-110 will-change-transform">
              <img
                src="/images/etai-logo-clean.png"
                alt="E&T Automatization Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {t("hero_title")}
              </h3>
              <p className="text-sm font-bold text-purple-600 uppercase tracking-widest">{t("ai_specialists")}</p>
            </div>
          </div>

          <div className="w-full max-w-xs h-px bg-slate-200 mb-8"></div>

          {/* Copyright */}
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} <span className="text-slate-900 font-bold">{t("hero_title")}</span>. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
})
