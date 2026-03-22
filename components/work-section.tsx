"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "Fantasy RPG Environment",
    category: "Environment Art",
    description: "Immersive 3D environments for next-gen fantasy role-playing games",
  },
  {
    title: "Sci-Fi Character Design",
    category: "Character Art",
    description: "Futuristic character concepts and 3D models for AAA titles",
  },
  {
    title: "Mobile Game Assets",
    category: "2D Art",
    description: "Stylized 2D assets optimized for mobile gaming platforms",
  },
  {
    title: "VR Experience",
    category: "VR/AR",
    description: "High-fidelity virtual reality environments and interactions",
  },
]

function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof projects[0]
  index: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <motion.div
        style={{ scale }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-card"
        data-cursor-hover
      >
        {/* Image container with parallax */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 scale-110"
          >
            <div className="h-full w-full bg-gradient-to-br from-primary/20 via-secondary to-muted" />
            {/* Placeholder pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-2 text-6xl font-light text-foreground/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-sm uppercase tracking-widest text-foreground/20">
                  Game Art Project
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/10" />
        </div>

        {/* Content */}
        <div className="relative p-6">
          <motion.span 
            className="mb-2 block text-xs uppercase tracking-widest text-primary"
          >
            {project.category}
          </motion.span>
          <h3 className="mb-2 text-2xl font-light tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-sm font-light text-muted-foreground">
            {project.description}
          </p>
          
          {/* Arrow indicator */}
          <motion.div
            className="absolute right-6 bottom-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:text-primary"
            whileHover={{ scale: 1.1 }}
          >
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
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="relative py-32 px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-primary">
            Our Work
          </span>
          <h2 className="max-w-2xl text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
