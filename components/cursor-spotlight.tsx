"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

interface CursorSpotlightProps {
  containerRef: React.RefObject<HTMLElement | null>
}

export function CursorSpotlight({ containerRef }: CursorSpotlightProps) {
  const [isInside, setIsInside] = useState(false)
  
  // Direct motion values - no spring for instant response
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Transform to CSS translate for centering
  const translateX = useTransform(mouseX, (x) => x - 200)
  const translateY = useTransform(mouseY, (y) => y - 200)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseEnter = () => setIsInside(true)
    const handleMouseLeave = () => setIsInside(false)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [containerRef, mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInside ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Single oval spotlight element */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: translateX,
          top: translateY,
          width: "400px",
          height: "400px",
          background: `radial-gradient(ellipse at center, 
            rgba(255, 242, 224, 0.22) 0%, 
            rgba(255, 242, 224, 0.15) 25%, 
            rgba(35, 93, 122, 0.18) 50%, 
            rgba(35, 93, 122, 0.12) 70%, 
            transparent 100%)`,
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  )
}
