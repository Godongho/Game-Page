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
      className="relative flex min-h-[100svh] w-full flex-col items-center bg-[#0d0d0d] overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 pb-12"
    >
      <div className="relative w-full max-w-[1536px] mx-auto flex flex-col flex-1 z-10 justify-start">
        
        {/* Top Section: PADO & Contact */}
        <div 
          className="flex flex-row justify-between items-center w-full"
          style={{ marginTop: HERO_DATA.paddingTop || "15vh" }}
        >
          {/* PADO (Outline Text) */}
          <div className="relative z-20">
            <span suppressHydrationWarning
              className="font-tech text-[clamp(2.5rem,10vw,12rem)] font-bold italic leading-none tracking-widest text-transparent select-none block"
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

          {/* CONTACT US */}
          <motion.div
            className="relative z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link 
              href="#contact"
              data-cursor-hover
              className="group flex items-center rounded-full border border-white/20 bg-black/40 px-5 md:px-8 py-3 md:py-4 backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
            >
              <span suppressHydrationWarning className="text-[10px] md:text-sm font-medium tracking-wider text-white whitespace-nowrap">
                {HERO_DATA.contactBtnText}
              </span>
              <span className="ml-2 md:ml-4 text-white/50 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>

        </div>

        {/* Bottom Section: STUDIO */}
        <motion.div 
          className="relative z-0 flex w-full justify-start items-end pointer-events-none"
          style={{ 
            marginTop: HERO_DATA.verticalGap || "5vh",
            y: textY, 
            opacity 
          }}
        >
          <motion.div
            className="flex"
            style={{ gap: HERO_DATA.bgTextPos?.gap || "0px" }}
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

      </div>
    </section>
  )
}
