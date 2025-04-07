"use client"

import { motion } from "framer-motion"
import { Zap, LineChart, Palette, Settings } from "lucide-react"

export default function NoTechCard() {
  const items = [
    { name: "Analytics", icon: <LineChart className="h-6 w-6" /> },
    { name: "Design", icon: <Palette className="h-6 w-6" /> },
    { name: "Performance", icon: <Zap className="h-6 w-6" /> },
    { name: "Settings", icon: <Settings className="h-6 w-6" /> },
  ]

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Moving border effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <motion.rect
            width="100%"
            height="100%"
            rx="16"
            ry="16"
            fill="none"
            stroke="url(#no-tech-gradient)"
            strokeWidth="2"
            animate={{
              pathLength: [0, 1],
              pathOffset: [0, 1],
            }}
            transition={{
              pathLength: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              },
              pathOffset: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "linear",
              },
            }}
          />
          <defs>
            <linearGradient id="no-tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Feature Card</h2>
        <p className="text-gray-600 mb-6">
          Modern web application features for building responsive, high-performance applications.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
              whileHover={{ backgroundColor: "#f3f4f6" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mr-3 text-blue-500">{item.icon}</div>
              <span className="font-medium text-gray-700">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

