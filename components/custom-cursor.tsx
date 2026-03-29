import { useEffect, useState } from "react"
import { motion, useMotionValue, AnimatePresence, useVelocity, useTransform, useSpring } from "framer-motion"
import { Hand } from "lucide-react"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDragMode, setIsDragMode] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Velocity-based tilt logic
  const velocityX = useVelocity(cursorX)
  const tiltRaw = useTransform(velocityX, [-2000, 2000], [-25, 25])
  const tilt = useSpring(tiltRaw, { damping: 20, stiffness: 200 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    const addHoverListeners = () => {
      // General Hover (Links, Buttons)
      const hoverElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea, select'
      )
      
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })

      // Drag Area (Portfolio, etc)
      const dragElements = document.querySelectorAll('[data-cursor-drag]')
      dragElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsDragMode(true)
          setIsHovering(true)
        })
        el.addEventListener('mouseleave', () => {
          setIsDragMode(false)
          setIsHovering(false)
        })
      })
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Initial setup and mutation observer for dynamic content
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
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
          className="relative flex items-center justify-center rounded-full border-[1.5px] border-white"
          animate={{
            width: isHovering ? 100 : 40,
            height: isHovering ? 100 : 40,
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
        >
          {/* Hand Icon on Drag Areas */}
          <AnimatePresence>
            {isDragMode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: tilt.get() }}
                exit={{ opacity: 0, scale: 0.5 }}
                style={{ rotate: tilt }}
                className="text-white fill-white transition-transform duration-200"
              >
                {isClicked ? (
                  /* Custom Closed Fist (Grabbing) SVG */
                  <svg 
                    width="32" height="32" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round"
                    className="animate-in fade-in zoom-in duration-150"
                  >
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                  </svg>
                ) : (
                  <Hand size={32} strokeWidth={1.5} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
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
            width: isDragMode ? 0 : (isHovering ? 12 : 8),
            height: isDragMode ? 0 : (isHovering ? 12 : 8),
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
