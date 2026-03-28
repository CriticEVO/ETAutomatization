"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "bg"

interface Translations {
  [key: string]: {
    en: string
    bg: string
  }
}

const translations: Translations = {
  // Navigation
  nav_home: { en: "Home", bg: "Начало" },
  nav_about: { en: "About", bg: "За нас" },
  nav_services: { en: "Services", bg: "Услуги" },
  nav_contact: { en: "Contact", bg: "Контакт" },
  
  // Header/Footer
  view_services: { en: "View Services", bg: "Вижте Услугите" },
  ai_integration: { en: "AI Integration", bg: "AI Интеграция" },
  ai_specialists: { en: "AI Integration Specialists", bg: "Специалисти по AI Интеграция" },
  all_rights_reserved: { en: "All rights reserved.", bg: "Всички права запазени." },

  // Hero Section
  hero_title: { en: "E&T Automatization", bg: "E&T Автоматизация" },
  hero_subtitle: { en: "Transforming Business with AI Intelligence", bg: "Трансформираме Бизнеса с AI Интелект" },
  hero_description: { 
    en: "We specialize in seamlessly integrating cutting-edge AI solutions into your business operations, driving efficiency, innovation, and competitive advantage through intelligent workflow automatization.",
    bg: "Ние се специализираме в безпроблемното интегриране на авангардни AI решения във вашите бизнес операции, стимулирайки ефективност, иновации и конкурентно предимство чрез интелигентна автоматизация на работния процес."
  },
  learn_more: { en: "Learn More", bg: "Научете Повече" },

  // About Section
  about_title: { en: "About", bg: "За" },
  about_subtitle: { 
    en: "We are pioneers in AI integration and business workflow automatization, helping businesses unlock their full potential through intelligent automation and cutting-edge artificial intelligence solutions that enhance workflow performance and operational efficiency.",
    bg: "Ние сме пионери в AI интеграцията и автоматизацията на бизнес работни процеси, помагайки на бизнеса да разгърне пълния си потенциал чрез интелигентна автоматизация и авангардни решения с изкуствен интелект, които подобряват производителността и оперативната ефективност."
  },
  mission_title: { en: "Our Mission", bg: "Нашата Мисия" },
  mission_desc: { 
    en: "To democratize AI technology and make business workflow automatization accessible for businesses of all sizes, driving innovation and operational efficiency through intelligent automation solutions.",
    bg: "Да демократизираме AI технологията и да направим автоматизацията на работния процес достъпна за бизнеси от всякакъв мащаб, стимулирайки иновации и оперативна ефективност чрез интелигентни решения за автоматизация."
  },
  team_title: { en: "Our Team", bg: "Нашият Екип" },
  team_desc: { 
    en: "Expert AI engineers, data scientists, automation specialists, and business consultants dedicated to delivering exceptional workflow performance optimization and automatization services.",
    bg: "Експертни AI инженери, специалисти по данни, експерти по автоматизация и бизнес консултанти, посветени на предоставянето на изключителна оптимизация на работния процес и услуги за автоматизация."
  },
  vision_title: { en: "Our Vision", bg: "Нашата Визия" },
  vision_desc: { 
    en: "A future where AI seamlessly integrates with human creativity to solve complex business challenges through advanced automatization and intelligent workflow solutions.",
    bg: "Бъдеще, в което изкуственият интелект се интегрира безпроблемно с човешката креативност за решаване на сложни бизнес предизвикателства чрез усъвършенствана автоматизация и интелигентни решения."
  },

  // Services Section
  services_title: { en: "Our Automatization", bg: "Нашата Автоматизация" },
  services_span: { en: "Services", bg: "Услуги" },
  services_subtitle: { 
    en: "Comprehensive AI integration and business workflow automatization solutions tailored to transform your business operations, enhance workflow performance, and drive sustainable growth through intelligent automation.",
    bg: "Всеобхватни решения за AI интеграция и автоматизация на работни процеси, пригодени да трансформират вашите бизнес операции и да стимулират устойчив растеж чрез интелигентна автоматизация."
  },
  
  service1_title: { en: "AI Chatbots & Virtual Assistants", bg: "AI Чатботове и Виртуални Асистенти" },
  service1_desc: { 
    en: "Custom AI-powered chatbots and virtual assistants with advanced speech-to-text integration to enhance customer service and internal operations through intelligent automation and workflow optimization.",
    bg: "Персонализирани AI чатботове и виртуални асистенти с усъвършенствана интеграция на реч в текст за подобряване на обслужването на клиенти и вътрешните операции чрез интелигентна автоматизация."
  },
  service1_f1: { en: "24/7 Customer Support Automation", bg: "24/7 Автоматизация на поддръжката" },
  service1_f2: { en: "Speech-to-Text Integration", bg: "Интеграция на реч в текст" },
  service1_f3: { en: "Natural Language Processing", bg: "Обработка на естествен език" },
  service1_f4: { en: "Multi-platform Integration", bg: "Многоплатформена интеграция" },

  service2_title: { en: "Data Analytics & Machine Learning", bg: "Анализ на данни и Машинно обучение" },
  service2_desc: { 
    en: "Advanced machine learning models and data analytics solutions to extract insights from your data and optimize business workflow performance.",
    bg: "Усъвършенствани модели за машинно обучение и решения за анализ на данни за извличане на прозрения от вашите данни и оптимизиране на работните процеси."
  },
  service2_f1: { en: "Predictive Analytics Automation", bg: "Автоматизация на прогнозния анализ" },
  service2_f2: { en: "Real-time Processing", bg: "Обработка в реално време" },
  service2_f3: { en: "Custom ML Models", bg: "Персонализирани ML модели" },

  service3_title: { en: "Business Intelligence & Automation", bg: "Бизнес интелигентност и Автоматизация" },
  service3_desc: { 
    en: "AI-driven business intelligence platforms that transform raw data into actionable insights for enhanced workflow automatization.",
    bg: "Платформи за бизнес интелигентност, управлявани от AI, които трансформират суровите данни в приложими прозрения за подобрена автоматизация."
  },
  service3_f1: { en: "Interactive Dashboards", bg: "Интерактивни табла" },
  service3_f2: { en: "Automated Reporting", bg: "Автоматизирано отчитане" },
  service3_f3: { en: "Trend Analysis", bg: "Анализ на тенденциите" },

  service4_title: { en: "Process Automation & Optimization", bg: "Автоматизация и Оптимизация на процеси" },
  service4_desc: { 
    en: "Intelligent automation solutions that streamline workflows, reduce manual tasks, and enhance business process efficiency through ET automatization.",
    bg: "Интелигентни решения за автоматизация, които рационализират работните процеси, намаляват ръчните задачи и подобряват бизнес ефективността."
  },
  service4_f1: { en: "Workflow Optimization", bg: "Оптимизация на работния поток" },
  service4_f2: { en: "RPA Integration", bg: "RPA Интеграция" },
  service4_f3: { en: "Smart Decision Making", bg: "Интелигентно вземане на решения" },

  service5_title: { en: "AI Integration Services", bg: "Услуги за AI Интеграция" },
  service5_desc: { 
    en: "Seamless integration of AI capabilities into your existing systems and applications for comprehensive business workflow automatization.",
    bg: "Безпроблемна интеграция на AI възможности във вашите съществуващи системи и приложения за всеобхватна автоматизация."
  },
  service5_f1: { en: "API Development", bg: "API Разработка" },
  service5_f2: { en: "System Integration", bg: "Системна интеграция" },
  service5_f3: { en: "Performance Optimization", bg: "Оптимизация на производителността" },

  service6_title: { en: "AI Security & Compliance", bg: "AI Сигурност и Съответствие" },
  service6_desc: { 
    en: "Ensure your AI implementations and automatization solutions are secure, ethical, and compliant with industry standards.",
    bg: "Уверете се, че вашите AI внедрявания и решения за автоматизация са сигурни, етични и отговарят на индустриалните стандарти."
  },
  service6_f1: { en: "Security Audits", bg: "Одити на сигурността" },
  service6_f2: { en: "Compliance Monitoring", bg: "Мониторинг на съответствието" },
  service6_f3: { en: "Ethical AI Guidelines", bg: "Насоки за етичен AI" },

  // Contact Section
  contact_title: { en: "Contact", bg: "Контактна" },
  contact_span: { en: "Information", bg: "Информация" },
  contact_subtitle: { 
    en: "Ready to transform your business with AI automation? Get in touch with our experts to discuss your automatization needs.",
    bg: "Готови ли сте да трансформираме вашия бизнес с AI автоматизация? Свържете се с нашите експерти, за да обсъдим вашите нужди."
  },
  contact_mail: { en: "mail:", bg: "имейл:" },
  contact_name_enyo: { en: "Enyo Yanakiev", bg: "Еньо Янакиев" },
  contact_name_todor: { en: "Todor Enchev", bg: "Тодор Енчев" },
  contact_call: { en: "Call", bg: "Обадете се на" },
  contact_phone_enyo: { en: "+359 88 718 5580", bg: "+359 88 718 5580" },
  contact_phone_todor: { en: "+359 89 676 7280", bg: "+359 89 676 7280" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "en" || savedLang === "bg")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
