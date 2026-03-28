"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
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
      {/* 1. Massive Background Text (Level Design) */}
      <motion.div 
        className="absolute inset-x-0 bottom-[10%] z-0 flex w-full justify-between px-4 sm:px-12 md:px-24 pointer-events-none"
        style={{ y: textY, opacity }}
      >
        <span suppressHydrationWarning className="font-black text-[clamp(3.5rem,13vw,16rem)] leading-none text-white/80 tracking-tighter select-none">
          {HERO_DATA.bgTextLeft}
        </span>
        <span suppressHydrationWarning className="font-black text-[clamp(4.5rem,15vw,18rem)] leading-none text-white/80 tracking-tighter select-none">
          {HERO_DATA.bgTextRight}
        </span>
      </motion.div>

      {/* 2. Cyberpunk Tech Number Overlay ("801") */}
      <motion.div
        className="absolute left-[5%] top-[45%] z-20 pointer-events-none"
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span suppressHydrationWarning
          className="font-tech text-[clamp(6rem,12vw,16rem)] font-bold italic leading-none tracking-widest text-transparent select-none custom-text-stroke"
        >
          {HERO_DATA.outlineText}
        </span>
      </motion.div>



      {/* 4. Top Right Description Text */}
      <motion.div
        className="absolute right-[5%] top-[25%] z-30 max-w-[320px] text-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p suppressHydrationWarning className="text-sm font-light leading-relaxed text-white/70">
          {HERO_DATA.description}
        </p>
      </motion.div>

      {/* 5. Right Side Accent (Vertical text or icon) */}
      <motion.div
        className="absolute right-[8%] top-[50%] z-30 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-2 w-2 rounded-full border border-white/50 bg-transparent" />
          <div className="h-16 w-px bg-white/20" />
        </div>
      </motion.div>

      {/* 6. Contact Us Button / Component area */}
      <motion.div
        className="absolute right-[5%] bottom-[25%] z-30 flex items-center gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
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

      {/* 7. Bottom Right Circular Badge */}
      <motion.div
        className="absolute right-[3%] bottom-[5%] z-30 h-32 w-32"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.1 }}
      >
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-[#F05A28]/20 bg-[#0d0d0d]/50 backdrop-blur-sm" data-cursor-hover>
           {/* Center Text */}
           <div suppressHydrationWarning className="text-center text-xs font-bold leading-tight text-[#F05A28]">
             {HERO_DATA.badgeText2.split(' ')[0]}<br/>{HERO_DATA.badgeText2.split(' ')[1]}
           </div>
           
           {/* Rotating circular text pseudo-element effect (simplified) */}
           <svg className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fontSize="8.5" fill="#F05A28" fontWeight="bold" letterSpacing="2.5">
                <textPath href="#circlePath" startOffset="0%">
                   <tspan suppressHydrationWarning>{HERO_DATA.badgeText1}</tspan> • <tspan suppressHydrationWarning>{HERO_DATA.badgeText1}</tspan> •
                </textPath>
              </text>
           </svg>
        </div>
      </motion.div>
    </section>
  )
}
