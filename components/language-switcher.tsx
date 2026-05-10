"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "./language-provider"
import { Language } from "@/data/translations"

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  return (
    <div className="relative z-[60]">
      {/* Current Language Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium tracking-wider text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm">{current.flag}</span>
        <span>{current.label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-1 min-w-[120px] overflow-hidden rounded-xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl"
          >
            {LANGUAGES.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLang(language.code)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-xs font-medium tracking-wider transition-all duration-200 ${
                  lang === language.code
                    ? "bg-[#ff3300]/20 text-[#ff3300]"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="text-sm">{language.flag}</span>
                <span>{language.label}</span>
                {lang === language.code && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto text-[#ff3300]"
                  >
                    ●
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
