"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "3D Art & Modeling",
    description: "High-quality 3D assets, characters, and environments built for modern game engines.",
  },
  {
    number: "02",
    title: "Concept Art",
    description: "Visionary concept art that brings your game world to life before production begins.",
  },
  {
    number: "03",
    title: "2D Game Art",
    description: "Stylized 2D illustrations, UI elements, and sprite work for all platforms.",
  },
  {
    number: "04",
    title: "Animation",
    description: "Fluid character animations and cinematic sequences that captivate players.",
  },
  {
    number: "05",
    title: "VFX & Technical Art",
    description: "Stunning visual effects and optimized shaders for maximum performance.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-8">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Our Services
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="group border-t border-white/10 py-8 md:py-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              data-cursor-hover
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-light text-primary">
                    {service.number}
                  </span>
                  <h3 className="text-2xl font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="max-w-md text-sm font-light text-muted-foreground md:text-right">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
