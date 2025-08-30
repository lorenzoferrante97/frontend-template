"use client"
import { motion } from "motion/react"

export default function UsersSkeleton() {
  return (
    <motion.div
      animate={{ scale: [0.98, 1, 0.98] }}
      className='w-full h-52 bg-base-300 opacity-80 rounded-xl bg-blend-screen'
      initial={{ scale: 0.98 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      }}></motion.div>
  )
}
