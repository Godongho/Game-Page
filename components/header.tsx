"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import Image from "next/image"
import { HERO_DATA } from "@/data"

const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

import { useState, useEffect } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
      <div className="relative flex w-full max-w-[94%] items-center justify-between rounded-full border border-white/20 bg-white/[0.03] px-12 py-4 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
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
          <ul className="hidden items-center gap-10 md:flex">
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
                  className="group relative font-mono text-[11px] font-bold tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-[#00f2ff]"
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
        </nav>

        {/* Sheikah Centered Detail (Subtle) */}
        <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00f2ff]/30 to-transparent" />
      </div>
    </motion.header>
  )
}
