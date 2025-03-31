import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Fast", "Flexible", "Affordable", "Beautiful"], // The words to animate
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-gray-900">
          Turn Ideas Into Software
          <br className="hidden sm:block" />
          <span className="relative flex w-full justify-center overflow-hidden h-[1.2em] text-center">
            &nbsp;
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[titleNumber]}
                className="absolute font-bold text-purple-400"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {titles[titleNumber]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="mt-3 sm:mt-4 text-gray-600 text-base sm:text-lg">
          Clow combines no-code simplicity with custom-code power to build MVPs, automate workflows, and scale businesses in <span className="font-black">days, not months.</span>
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Button variant="blue" className="w-48 h-12 text-sm font-medium">
            Get Started Now →
          </Button>
          <Button variant="outline" className="w-48 h-12 text-sm font-medium">
            Learn More →
          </Button>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Customer 1"
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Customer 2"
              className="w-8 h-8 rounded-full border border-gray-300 -ml-2"
            />
            <span className="font-medium text-sm sm:text-base text-gray-700">2,291</span>
            <span className="text-sm sm:text-base text-gray-500">Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium text-sm sm:text-base text-gray-700">4.8/5</span>
            <div className="flex space-x-1 text-yellow-500 text-sm sm:text-base">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <span className="text-sm sm:text-base text-gray-500">#Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}