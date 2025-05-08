"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

type AnimatedChildProps = {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export default function AnimatedChild({
  children,
  className = "",
  direction = "up",
  duration = 0.5,
}: AnimatedChildProps) {
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }
      case "down":
        return {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }
      case "left":
        return {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }
      case "right":
        return {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const variants = getDirectionVariants()

  return (
    <motion.div
      variants={variants}
      transition={{
        type: "tween",
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
