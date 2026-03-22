"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home"
            className="group relative"
            data-cursor-hover
          >
            <span className="text-lg font-medium tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              Studio 801
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Link
                  href={item.href}
                  className="group relative text-sm font-light tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  data-cursor-hover
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}
