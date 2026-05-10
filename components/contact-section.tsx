"use client"

import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"
import { TRANSLATIONS, t } from "@/data/translations"

export function ContactSection() {
  const { lang } = useLanguage()
  return (
    <section id="contact" className="relative py-32 px-8">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/4 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 block text-sm uppercase tracking-widest text-primary">
              {t(TRANSLATIONS.contact.label, lang)}
            </span>
            <h2 className="mb-8 text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t(TRANSLATIONS.contact.heading, lang)}
            </h2>
            <p className="mb-10 max-w-md text-lg font-light text-muted-foreground">
              {t(TRANSLATIONS.contact.desc, lang)}
            </p>
            
            <motion.a
              href="mailto:hello@studio801.com"
              className="group inline-flex items-center gap-4 rounded-full border border-primary bg-primary/10 px-8 py-4 text-foreground transition-all duration-300 hover:bg-primary hover:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-hover
            >
              <span className="text-sm font-medium uppercase tracking-widest">
                {t(TRANSLATIONS.contact.startProject, lang)}
              </span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="group" data-cursor-hover>
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                {t(TRANSLATIONS.contact.email, lang)}
              </span>
              <a 
                href="mailto:hello@studio801.com"
                className="text-2xl font-light text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl"
              >
                hello@studio801.com
              </a>
            </div>

            <div className="group" data-cursor-hover>
              <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                {t(TRANSLATIONS.contact.location, lang)}
              </span>
              <span className="text-2xl font-light text-foreground md:text-3xl">
                {t(TRANSLATIONS.contact.locationValue, lang)}
              </span>
            </div>

            <div>
              <span className="mb-4 block text-xs uppercase tracking-widest text-muted-foreground">
                {t(TRANSLATIONS.contact.followUs, lang)}
              </span>
              <div className="flex gap-6">
                {["Twitter", "LinkedIn", "Instagram", "Artstation"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-sm font-light text-muted-foreground transition-colors duration-300 hover:text-primary"
                    whileHover={{ y: -2 }}
                    data-cursor-hover
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
