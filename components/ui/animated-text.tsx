"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
  size?: "sm" | "md" | "lg" | "xl"
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0.2, 
  staggerDelay = 0.1,
  size = "md" 
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const words = text.split(" ")

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl lg:text-5xl"
  }

  return (
    <div ref={ref} className={`flex flex-wrap ${sizeClasses[size]} ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + index * staggerDelay,
            ease: "easeOut",
          }}
          className="mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
} 