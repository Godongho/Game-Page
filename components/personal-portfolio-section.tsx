"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { PERSONAL_PORTFOLIO_CATEGORIES } from "@/data/personal-portfolio-data"
import { PORTFOLIO_LIST_FONTS } from "@/data/font-config"
import { useLanguage } from "./language-provider"
import { TRANSLATIONS, t } from "@/data/translations"

export function PersonalPortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { lang } = useLanguage()

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
          <h2 className="font-black tracking-tighter uppercase flex gap-4" style={{ fontSize: PORTFOLIO_LIST_FONTS.mainTitle }}>
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
              {t(TRANSLATIONS.portfolioSection.mainTitleLeft, lang)}
            </motion.span>
            {/* Solid orange text for 'PORTFOLIO' */}
            <span className="text-[#ff3300]">
              {t(TRANSLATIONS.portfolioSection.mainTitleRight, lang)}
            </span>
          </h2>
        </motion.div>

        {/* List of Categories */}
        <div className="flex flex-col w-full">
          {/* Top border line */}
          <div className="w-full h-[1px] bg-white/30" />

          {PERSONAL_PORTFOLIO_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between py-20 md:py-24 border-b border-white/30 transition-colors overflow-hidden"
              data-cursor-hover
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Background Image - slides in slowly from left, 70% width */}
              <AnimatePresence>
                {hoveredIndex === index && category.hoverImage && (
                  <motion.div
                    className="absolute inset-y-0 left-0 z-0"
                    style={{ width: "70%" }}
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    exit={{ clipPath: "inset(0 100% 0 0)" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={category.hoverImage}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="70vw"
                      style={{
                        maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                      }}
                    />
                    {/* Dark overlay for text readability */}
                    <div
                      className="absolute inset-0 bg-black/40"
                      style={{
                        maskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Left Title */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline gap-6 md:gap-12 w-full md:w-1/2 mb-6 md:mb-0">
                <h3 className="font-tech font-black text-white tracking-widest uppercase" style={{ fontSize: PORTFOLIO_LIST_FONTS.categoryTitle }}>
                  {TRANSLATIONS.portfolioCategories[index]
                    ? t(TRANSLATIONS.portfolioCategories[index].title, lang)
                    : category.title}
                </h3>
                
                <a href={`#${category.id}`} className="font-sans font-bold tracking-[0.1em] text-[#ff3300] uppercase underline decoration-1 underline-offset-4 opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap" style={{ fontSize: PORTFOLIO_LIST_FONTS.moreLink }}>
                  {t(TRANSLATIONS.portfolioSection.more, lang)}
                </a>
              </div>

              {/* Right Tags */}
              <div className="relative z-10 flex flex-col items-start md:items-end justify-center w-full md:w-1/2 gap-2 text-left md:text-right">
                {category.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="font-sans font-medium tracking-[0.05em] text-white/50 uppercase transition-all duration-300 group-hover:text-[#ff3300]" style={{ fontSize: PORTFOLIO_LIST_FONTS.tag }}>
                    {TRANSLATIONS.portfolioCategories[index]?.tags[tagIndex]
                      ? t(TRANSLATIONS.portfolioCategories[index].tags[tagIndex], lang)
                      : tag}
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
