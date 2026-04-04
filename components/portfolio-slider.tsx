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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            rotate: 35,
            stretch: -20,
            depth: 100,
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
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border transition-all duration-700 ${isActive
                    ? "border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)] ring-1 ring-white/20"
                    : "border-white/5 brightness-75"
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

                  {/* Text Overlay (Visible on Active & Hover only) */}
                  <AnimatePresence>
                    {isActive && hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-10 p-6 sm:p-10 bg-black/60 backdrop-blur-[2px] flex flex-col justify-between"
                      >
                        {/* Top Text */}
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.4 }}
                          className="w-full text-center mt-2"
                        >
                          <h4 className="font-sans text-[12px] sm:text-[14px] font-bold tracking-[0.05em] text-white">
                            SERVICES PROVIDED: <span className="uppercase">{project.category}</span>
                          </h4>
                        </motion.div>

                        {/* Bottom Area */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 mb-2">
                          {/* Quote (Bottom Left) */}
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="w-full md:w-[65%]"
                          >
                            <p className="text-[13px] sm:text-[15px] md:text-[17px] leading-relaxed text-white italic font-bold drop-shadow-lg">
                              {project.quote}
                            </p>
                          </motion.div>

                          {/* Author (Bottom Right) */}
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="w-full md:w-auto text-left md:text-right flex flex-col items-start md:items-end justify-end shrink-0"
                          >
                            <p className="text-[13px] sm:text-[15px] md:text-[17px] font-bold text-[#ff3300] drop-shadow-lg whitespace-pre-wrap">
                              {project.author}
                            </p>
                            <p className="text-[13px] sm:text-[15px] md:text-[17px] font-bold text-[#ff3300] drop-shadow-lg whitespace-pre-wrap">
                              {project.company}
                            </p>
                          </motion.div>
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
