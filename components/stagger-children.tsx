"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

type StaggerChildrenProps = {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

export default function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.2,
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  )
}
