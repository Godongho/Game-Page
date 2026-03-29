"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { HERO_DATA } from "@/data"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Paralax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative flex min-h-screen w-full flex-col bg-[#0d0d0d] overflow-hidden"
    >
      {/* 1. Massive Background Text (Split STU / DIO) */}
      <motion.div 
        className="absolute z-0 flex w-full justify-center items-end pointer-events-none"
        style={{ 
          bottom: HERO_DATA.bgTextPos.bottom,
          left: HERO_DATA.bgTextPos.left,
          right: HERO_DATA.bgTextPos.right,
          gap: HERO_DATA.bgTextPos.gap || "0px",
          y: textY, 
          opacity 
        }}
      >
        <motion.div
          className="flex gap-[inherit]"
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 1, 0.2, 0.9, 0.1],
          }}
          transition={{
            duration: HERO_DATA.bgTextFlickerDuration || 5,
            repeat: Infinity,
            repeatType: "mirror",
            times: [0, 0.15, 0.25, 0.4, 1],
            ease: "easeInOut"
          }}
        >
          <span 
            suppressHydrationWarning 
            className="leading-[0.8] text-white tracking-tighter select-none"
            style={{ 
              fontSize: HERO_DATA.bgTextSize || "clamp(4rem, 16vw, 18rem)", 
              fontWeight: HERO_DATA.bgTextWeight || "800" 
            }}
          >
            {HERO_DATA.bgTextLeft}
          </span>

          <span 
            suppressHydrationWarning 
            className="leading-[0.8] text-white tracking-tighter select-none"
            style={{ 
              fontSize: HERO_DATA.bgTextSize || "clamp(4rem, 16vw, 18rem)", 
              fontWeight: HERO_DATA.bgTextWeight || "800" 
            }}
          >
            {HERO_DATA.bgTextRight}
          </span>
        </motion.div>
      </motion.div>

      {/* 3. Cyberpunk Tech Outline Overlay ("PADO") - Static */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{ 
          top: HERO_DATA.outlineTextPos.top, 
          left: HERO_DATA.outlineTextPos.left,
        }}
      >
        <span suppressHydrationWarning
          className="font-tech text-[clamp(4.5rem,10vw,12rem)] font-bold italic leading-none tracking-widest text-transparent select-none"
          style={{ 
            WebkitTextStroke: `2px ${HERO_DATA.outlineColor}`,
            textShadow: HERO_DATA.glowColor !== "transparent" 
              ? `0 0 10px ${HERO_DATA.glowColor}, 0 0 20px ${HERO_DATA.glowColor}` 
              : "none"
          }}
        >
          {HERO_DATA.outlineText}
        </span>
      </div>


      {/* 4. Top Right Description Text - Removed because description was deleted from data */}

      {/* 6. Contact Us Button - Dynamic position */}
      <motion.div
        className="absolute z-30"
        style={{ 
          bottom: HERO_DATA.contactBtnPos.bottom, 
          right: HERO_DATA.contactBtnPos.right 
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Link 
          href="#contact"
          data-cursor-hover
          className="group flex items-center rounded-full border border-white/20 bg-black/40 px-6 py-3 backdrop-blur-md transition-all hover:bg-white/10"
        >
          <span suppressHydrationWarning className="text-sm font-medium tracking-wider text-white">
            {HERO_DATA.contactBtnText}
          </span>
          <span className="ml-4 text-white/50 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </motion.div>
    </section>
  )
}
