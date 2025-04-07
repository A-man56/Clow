"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

const features = [
    {
        title: "No-Code Solutions",
        subtitle: "Launch Your MVP in 2 Weeks",
        points: [
            // "Ideal for startups and non-technical founders",
            "Build SaaS apps using Bubble and Softr tools",
            "Automate workflows with Zapier and n8n",
            "Set up custom Notion templates"
        ]
    },
    {
        title: "Low-Code Solutions",
        subtitle: "Customize Without Complexity",
        points: [
            "Combine no-code tools with custom APIs",
            // "Extend with plugins and custom UIs",
            "Integrate payment gateways in Bubble apps",
            "Build Airtable dashboards with Next.js",
        ]
    },
    {
        title: "With-Code Solutions",
        subtitle: "Scale Seamlessly",
        points: [
            "Perfect for scaling businesses low code",
            "Build full-stack apps with Next.js & FastAPI",
            "No-code backend + custom frontend"
        ]
    }
]

const BusinessFeatures = () => {
    return (
        <section className="relative w-full flex justify-center  overflow-hidden">
            {/* Decorative Gradient Circle */}
            <div className="absolute -top-100 -left-12 w-[400px] h-[400px] pointer-events-none opacity-20">
                <img
                    src="/photos/GradientCircle.svg"
                    alt="Gradient Circle"
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 p-4 relative z-10">
                {/* Left Text Section */}
                <div className="max-w-xl">
                    <div className="inline-flex items-center space-x-2 mb-10 rounded-full bg-purple-100 px-4 py-1">
                        <span className="text-purple-600 font-medium flex items-center space-x-1">
                            <span>🌟</span>
                            <span>Our Features</span>
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-10">
                        Build, Automate, and Scale—Your Way
                    </h2>

                    <p className="text-gray-600 text-xl leading-relaxed mb-6">
    Clow helps you build, automate, and scale from <strong>No-Code MVPs</strong> for quick launches to <strong>Low-Code</strong> solutions that blend drag-and-drop tools with custom features.
    <br />
    For growing businesses, our With-Code services deliver scalable <strong>full-stack or Hybrid architectures</strong> (no-code backend + custom frontend), combining the best of no-code speed with custom flexibility.
</p>


                    <Button variant="blue" size="fixed" className="mt-7">Free discovery call →</Button>
                </div>

                {/* Right Features Cards - Stacked Overlapping Layout */}
                <div className="relative flex flex-col space-y-0"> {/* Remove space-y for overlap */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                            whileHover={{
                                y: -5, // Slight lift on hover
                                scale: 1.03,
                                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
                                zIndex: 10 // Bring to front on hover
                            }}
                            className="relative bg-white rounded-xl shadow-lg p-5 w-80 md:w-96 border border-gray-200 cursor-pointer"
                            style={{
                                zIndex: features.length - index,
                                marginTop: index === 0 ? 0 : -15,// Overlapping effect
                                right: index * 50
                            }}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                            <p className="text-sm text-gray-500">{feature.subtitle}</p>

                            {/* Bullet Points */}
                            <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-gray-600">
                                {feature.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>

                            {/* Avatars */}
                            <div className="absolute bottom-4 right-4 flex -space-x-2">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    className="w-6 h-6 rounded-full border border-white"
                                    alt="User 1"
                                />
                                <img
                                    src="https://randomuser.me/api/portraits/women/32.jpg"
                                    className="w-6 h-6 rounded-full border border-white"
                                    alt="User 2"
                                />
                            </div>

                            {/* Optional Circle Indicator */}
                            <div className="absolute top-4 right-4 w-4 h-4 border border-gray-300 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BusinessFeatures
