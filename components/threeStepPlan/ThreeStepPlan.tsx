"use client";

import React, { useEffect, useState } from "react";

// Helper to generate bezier points (smooth curve)
function calculateBezierPoints(p0, p1, p2, steps = 100) {
    const points = [];
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
        const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
        points.push({ x, y });
    }
    return points;
}

// Helper to detect peaks (top points) and valleys (bottom points)
function findPeaksAndValleys(points) {
    const result = [];
    for (let i = 1; i < points.length - 1; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const next = points[i + 1];

        if (prev.y > curr.y && next.y > curr.y) {
            result.push({ ...curr, type: "peak" });
        } else if (prev.y < curr.y && next.y < curr.y) {
            result.push({ ...curr, type: "valley" });
        }
    }
    return result;
}

export default function ResponsiveThreeStepPlan() {
    const [dots, setDots] = useState([]);

    useEffect(() => {
        const segment1 = calculateBezierPoints({ x: -100, y: 200 }, { x: 150, y: 350 }, { x: 400, y: 200 });
        const segment2 = calculateBezierPoints({ x: 400, y: 200 }, { x: 700, y: 50 }, { x: 1000, y: 200 });
        const segment3 = calculateBezierPoints({ x: 1000, y: 200 }, { x: 1300, y: 350 }, { x: 1500, y: 200 });

        const allPoints = [...segment1, ...segment2.slice(1), ...segment3.slice(1)];
        const detectedDots = findPeaksAndValleys(allPoints);

        setDots(detectedDots);
    }, []);

    return (
        <div className=" w-full  overflow-hidden bg-F6F1E9 flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full text-purple-600 font-medium">
                    <span>How It Works</span> <span>🔥</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mt-4">Get Your App In 5 Weeks</h2>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">With A 3-Step Plan</h3>
            </div>

            {/* SVG Curve Section - Full Width with Padding */}
            <div className="relative mx-auto overflow-hidden" style={{ width: "85%", height: "300px" }}>
                <svg
                    className="absolute top-0 left-0"
                    width="100%"
                    height="300"
                    viewBox="-100 0 1600 300"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    {/* Extended W Shape Path */}
                    <path
                        d="M-100 200 Q150 350 400 200 T1000 200 T1500 200"
                        stroke="#E0DDF5"
                        strokeWidth="6"
                        fill="none"
                    />

                    {/* Auto-placed dots */}
                    {dots.map((dot, index) => (
                        <circle
                            key={index}
                            cx={dot.x}
                            cy={dot.y}
                            r="8"
                            fill="#6C47FF"
                        />
                    ))}
                </svg>

                {/* Steps Positioned Correctly */}
                <div className="relative z-10 flex justify-between w-full pt-32">
                    {/* Step 1 - Perfect (no changes) */}
                    <div className="flex flex-col items-center text-center w-1/3 relative top-10">
                        <span className="bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            STEP - 01
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">Discover</h4>
                        <p className="text-gray-500">Contact Us</p>
                    </div>

                    {/* Step 2 - Slightly lower (decreased height) */}
                    <div className="flex flex-col items-center text-center w-1/3 relative top-16">
                        <span className="bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            STEP - 02
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">Design & Develop</h4>
                        <p className="text-gray-500">Our Process</p>
                    </div>

                    {/* Step 3 - Raised higher (increased height) */}
                    {/* Step 3 - Shifted Left */}
                    <div className="flex flex-col items-center text-center w-1/3 relative top-10 left-8">
                        <span className="bg-purple-200 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            STEP - 03
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">Launch & Growth</h4>
                        <p className="text-gray-500">Outcome</p>
                    </div>

                </div>
            </div>

            {/* Quote Section */}
            <div className="mt-24 bg-purple-50 p-6 rounded-xl text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 font-medium">
                    “500 million new apps will be created—more than in the last 40 years.
                    The only way to achieve this is through low-code development.”
                    <span className="italic font-semibold text-gray-900"> — Satya Nadella @CEO Microsoft</span>
                </p>
            </div>
        </div>
    );
}
