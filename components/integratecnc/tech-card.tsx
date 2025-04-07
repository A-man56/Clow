"use client"

import { motion } from "framer-motion"
import { Code2, Layers, Paintbrush, FileJson } from "lucide-react"

export default function TechCard() {
  const technologies = [
    { name: "Next.js", icon: <Layers className="h-6 w-6" /> },
    { name: "React", icon: <Code2 className="h-6 w-6" /> },
    { name: "Tailwind", icon: <Paintbrush className="h-6 w-6" /> },
    { name: "JavaScript", icon: <FileJson className="h-6 w-6" /> },
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
            stroke="url(#tech-gradient)"
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
            <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tech Stack</h2>
        <p className="text-gray-600 mb-6">
          Modern web development tools and frameworks for building responsive, high-performance applications.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
              whileHover={{ backgroundColor: "#f3f4f6" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mr-3 text-blue-500">{tech.icon}</div>
              <span className="font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

