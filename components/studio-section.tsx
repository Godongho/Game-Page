"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "./language-provider"
import { TRANSLATIONS, t } from "@/data/translations"



export function StudioSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])

  return (
    <section 
      id="studio" 
      ref={sectionRef}
      className="relative py-16 md:py-32 px-4 md:px-8"
    >
      <motion.div 
        className="mx-auto max-w-7xl"
        style={{ opacity }}
      >
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-primary">
            {t(TRANSLATIONS.studio.label, lang)}
          </span>
          <h2 className="max-w-3xl text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t(TRANSLATIONS.studio.heading, lang)}
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 text-lg font-light leading-relaxed text-muted-foreground">
              {t(TRANSLATIONS.studio.desc1, lang)}
            </p>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              {t(TRANSLATIONS.studio.desc2, lang)}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {TRANSLATIONS.studio.stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                className="group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                data-cursor-hover
              >
                <div className="rounded-2xl border border-white/5 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/20 group-hover:bg-card">
                  <div className="mb-2 text-4xl font-light text-foreground transition-colors duration-300 group-hover:text-primary md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="text-sm font-light uppercase tracking-widest text-muted-foreground">
                    {t(stat.label, lang)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
