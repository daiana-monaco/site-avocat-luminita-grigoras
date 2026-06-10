"use client"

import { motion } from "framer-motion"

export function AnimatedGradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base warm cream layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, #fff2e0 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />
      
      {/* Animated Trust Blue blob - top right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%]"
        style={{
          background: "radial-gradient(ellipse at center, #1e3a8a 0%, transparent 60%)",
          opacity: 0.12,
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Animated Trust Blue blob - bottom left */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[70%] h-[70%]"
        style={{
          background: "radial-gradient(ellipse at center, #1e3a8a 0%, transparent 60%)",
          opacity: 0.10,
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Warm cream center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]"
        style={{
          background: "radial-gradient(ellipse at center, #fff2e0 0%, transparent 50%)",
          opacity: 0.12,
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.15, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle Trust Blue accent - center right */}
      <motion.div
        className="absolute top-1/3 right-0 w-[50%] h-[60%]"
        style={{
          background: "radial-gradient(ellipse at right, #1e3a8a 0%, transparent 70%)",
          opacity: 0.08,
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -30, 10, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
