"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import Image from "next/image"
import { HERO_DATA } from "@/data"
import { HEADER_FONTS } from "@/data/font-config"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "./language-provider"
import { TRANSLATIONS, t } from "@/data/translations"

import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang } = useLanguage()

  const navItems = [
    { label: t(TRANSLATIONS.nav.ourProject, lang), href: "#our-project" },
    { label: t(TRANSLATIONS.nav.ourPortfolio, lang), href: "#our-portfolio" },
    { label: t(TRANSLATIONS.nav.studio, lang), href: "#studio" },
    { label: t(TRANSLATIONS.nav.email, lang), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
    >
      <div className="relative flex w-full max-w-[98%] md:max-w-[94%] items-center justify-between rounded-full border border-white/20 bg-black/60 px-6 lg:px-12 py-4 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
        {/* Subtle Glass internal glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
        
        <nav className="flex w-full items-center justify-between relative z-10">
          {/* Logo */}
          <Link href="#home" data-cursor-hover className="relative z-10 block transition-transform duration-300 hover:scale-105 active:scale-95">
            <div className="relative flex h-10 w-40 items-center">
              <motion.div
                animate={{ 
                  height: isScrolled ? HERO_DATA.headerLogoSize : (HERO_DATA as any).headerLogoSizeTop || "64px" 
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <Image 
                  src="/logo-brush.png" 
                  alt="STUDIO PADO" 
                  width={200} 
                  height={100} 
                  style={{ height: "100%", width: "auto" }}
                  className="object-contain" 
                  priority
                />
              </motion.div>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul 
            className="hidden items-center md:flex"
            style={{ gap: HEADER_FONTS.navGap }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 + (0.1 * index),
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Link
                  href={item.href}
                  className="group relative font-mono font-bold text-white/60 transition-colors duration-300 hover:text-[#00f2ff]"
                  style={{ 
                    fontSize: HEADER_FONTS.navLinkSize,
                    letterSpacing: HEADER_FONTS.navLetterSpacing 
                  }}
                  data-cursor-hover
                >
                  <span suppressHydrationWarning className="relative z-10">{item.label.toUpperCase()}</span>
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-[2px] bg-[#00f2ff] shadow-[0_0_10px_rgba(0,242,255,1)]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Right Group (Language + Hamburger) */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white/80 hover:text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Sheikah Centered Detail (Subtle) */}
        <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent" />
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 px-6 py-8 backdrop-blur-xl"
          >
            {/* Mobile Menu Header (Logo & Close Btn) */}
            <div className="flex items-center justify-between mb-12">
              <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/logo-brush.png" 
                  alt="STUDIO PADO" 
                  width={150} 
                  height={50} 
                  className="object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white focus:outline-none p-2 rounded-full border border-white/10 bg-white/5"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-8 items-center mt-10">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-mono font-bold tracking-[0.2em] text-white/80 transition-colors hover:text-[#00f2ff]"
                  >
                    {item.label.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Footer detail for mobile menu */}
            <div className="mt-auto flex justify-center pb-8">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#00f2ff]/50 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
