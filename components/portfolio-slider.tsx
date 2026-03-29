"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"

import { PORTFOLIO_PROJECTS } from "@/data/portfolio-data"

export function PortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0d0d0d] py-24 flex flex-col items-center justify-center">
      {/* Background radial Glow (Subtle) */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* 2. Header Style (Studio 801 Style) */}
      <div className="container relative z-10 mb-16 flex flex-col items-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] font-bold tracking-[0.4em] text-white/40 mb-2"
        >
          OUR SELECTION
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-mono text-3xl font-black tracking-tighter text-white md:text-5xl"
        >
          <span className="text-white">OUR </span>
          <span className="text-[#ff5500]">PORTFOLIO</span>
        </motion.h3>
      </div>

      {/* 3. Swiper Container */}
      <div className="w-full max-w-[1440px] px-4 md:px-0">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="portfolio-swiper !overflow-visible py-12"
          navigation={{
            prevEl: "#prev-btn",
            nextEl: "#next-btn",
          }}
        >
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <SwiperSlide
              key={project.id}
              className="!w-[320px] sm:!w-[500px] md:!w-[750px]"
            >
              {({ isActive }) => (
                <div
                  data-cursor-drag="true"
                  className={`group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border transition-all duration-700 ${isActive
                      ? "border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)] ring-1 ring-white/20"
                      : "border-white/5 opacity-40 grayscale brightness-50"
                    }`}
                >
                  {/* Main Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority={index === 0}
                  />

                  {/* Glassmorphism Text Overlay (Visible on Active only) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute inset-x-0 bottom-0 z-10 p-8 pt-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]"
                      >
                        <div className="relative flex flex-col gap-4">
                          {/* Logo Area */}
                          <div className="flex flex-col">
                            <h4 className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#ff5500] mb-2 uppercase">
                              {project.category}
                            </h4>
                            <h2 className="font-mono text-3xl font-black text-white/90 tracking-tighter sm:text-4xl md:text-5xl">
                              {project.title}
                            </h2>
                          </div>

                          {/* 3-Column Breakdown Area */}
                          <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-12">
                            {project.quote.split('|').map((part, idx) => (
                              <div key={idx} className="relative flex flex-col pt-4 border-t border-white/10 md:pt-0 md:border-t-0 md:pl-4 md:border-l first:border-0 first:pl-0">
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <p className="text-[11px] sm:text-[13px] leading-relaxed text-white/70 italic">
                                    {part.trim()}
                                  </p>
                                </motion.div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Internal Glow Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"
                    }`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 4. Controls (Arrows) */}
      <div className="mt-12 flex gap-4 relative z-20">
        <button
          id="prev-btn"
          data-cursor-hover
          className="flex h-12 w-16 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          id="next-btn"
          data-cursor-hover
          className="flex h-12 w-16 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* 5. Custom Swiper CSS for Arrows */}
      <style jsx global>{`
        .portfolio-swiper {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  )
}
