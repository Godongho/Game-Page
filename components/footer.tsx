"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { TRANSLATIONS, t } from "@/data/translations"

export function Footer() {
  const { lang } = useLanguage()
  return (
    <footer className="border-t border-white/5 py-12 px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="#home"
              className="text-lg font-medium tracking-tight text-foreground transition-colors duration-300 hover:text-primary"
              data-cursor-hover
            >
              Studio 801
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <p className="text-sm font-light text-muted-foreground">
              &copy; {new Date().getFullYear()} Studio PADO. {t(TRANSLATIONS.footer.copyright, lang)}
            </p>
          </motion.div>

          {/* Back to top */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#home"
              className="group flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors duration-300 hover:text-foreground"
              data-cursor-hover
            >
              <span>{t(TRANSLATIONS.footer.backToTop, lang)}</span>
              <motion.svg
                className="h-4 w-4 rotate-[-90deg] transition-transform duration-300 group-hover:-translate-y-1"
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
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
