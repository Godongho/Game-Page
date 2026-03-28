"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { CURSOR_CONFIG } from "@/data"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea, select'
      )
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Initial setup and mutation observer for dynamic content
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border-[1.5px] border-white"
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
            borderColor: isHovering ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        />
      </motion.div>
      
      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 12 : 8,
            height: isHovering ? 12 : 8,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        />
      </motion.div>
    </>
  )
}
