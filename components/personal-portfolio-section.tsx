"use client"

import { motion } from "framer-motion"
import { PERSONAL_PORTFOLIO_CATEGORIES } from "@/data/personal-portfolio-data"

export function PersonalPortfolioSection() {
  return (
    <section className="w-full bg-[#0d0d0d] py-24 md:py-32 flex flex-col items-center">
      <div className="container px-4 md:px-8 max-w-7xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex items-center"
        >
          <h2 className="font-black text-6xl sm:text-7xl md:text-[90px] tracking-tighter uppercase flex gap-4">
            {/* Solid text for 'OUR' with blinking effect */}
            <motion.span
              animate={{ opacity: [0.1, 1, 0.2, 0.9, 0.1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                times: [0, 0.15, 0.25, 0.4, 1],
                ease: "easeInOut"
              }}
              className="text-white/80"
            >
              OUR
            </motion.span>
            {/* Solid orange text for 'PORTFOLIO' */}
            <span className="text-[#ff3300]">
              PORTFOLIO
            </span>
          </h2>
        </motion.div>

        {/* List of Categories */}
        <div className="flex flex-col w-full">
          {/* Top border line */}
          <div className="w-full h-[1px] bg-white/10" />

          {PERSONAL_PORTFOLIO_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col md:flex-row md:items-start justify-between py-12 border-b border-white/10 transition-colors hover:bg-white/[0.02]"
              data-cursor-hover
            >
              {/* Left Title */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-6 md:gap-12 w-full md:w-1/2 mb-6 md:mb-0">
                <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
                  {category.title}
                </h3>
                
                <a href={`#${category.id}`} className="font-sans text-[12px] font-bold tracking-[0.1em] text-[#ff3300] uppercase underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap">
                  MORE
                </a>
              </div>

              {/* Right Tags */}
              <div className="flex flex-col items-start md:items-end justify-center w-full md:w-1/2 gap-2 text-left md:text-right">
                {category.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="font-sans text-[11px] sm:text-[13px] md:text-[15px] font-medium tracking-[0.05em] text-white/50 uppercase transition-colors group-hover:text-white/80">
                    {tag}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
