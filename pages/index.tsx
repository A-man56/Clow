"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ContactSection from "../components/contactus/ContactSection";
import { CompareDemo } from "../components/comparetwoblock/CompareDemo";
import BusinessFeatures from "../components/businessfeatures/BusinessFeatures";
import ThreeStepPlan from "../components/threeStepPlan/ThreeStepPlan";
import HeroSection from "../components/herosection/HeroSection";
import { TestimonialsSectionDemo } from "../components/testimonial/final";
import Footer from "../components/footer/Footer";
import Preloader from "../components/preloader/preloader";
import Twocard from "../components/integratecnc/twocardtech";
import { DemoAccordion } from "../components/FAQSection/finalaccordion";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // match with your preloader animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="main-content"
          className="font-poppins min-h-screen relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Navbar */}
          <Navbar />

          {/* Hero Section with animation wrapper */}
          <motion.div
            className="relative z-10 mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          >
            <HeroSection />
          </motion.div>

          {/* Other Sections */}
          <div className="relative z-10 mt-16">
            <CompareDemo />
          </div>

          <div className="relative z-10 mt-16">
            <Twocard />
          </div>

          <div className="relative z-10 mt-16">
            <TestimonialsSectionDemo />
          </div>

          <div className="relative z-10 mt-16">
            <ThreeStepPlan />
          </div>

          <div className="relative z-10 mt-16">
            <BusinessFeatures />
          </div>

          <div className="relative z-10 mt-16">
            <DemoAccordion />
          </div>

          <div className="relative z-10 mt-16">
            <ContactSection />
          </div>

          <div className="relative z-10 mt-16">
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
