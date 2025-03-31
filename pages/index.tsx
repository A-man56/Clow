import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import { CompareDemo } from '../components/CompareDemo';
import BusinessFeatures from '../components/BusinessFeatures';
import ThreeStepPlan from '../components/ThreeStepPlan';
import HeroSection from '../components/HeroSection';
import Testimonial from '../components/Testimonial';
import {MarqueeDemo} from '../components/slidermarquee';
import { FloatingDock } from '../components/floatingdock';
import Footer from '../components/Footer';
import GridBackground from "../components/GridBackground";
import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundBeamsWithCollision className="absolute" />
      <GridBackground />

      {/* Navbar */}
      <Navbar />

      {/* Content Sections */}
      <div className="relative z-10 mt-14">
        <HeroSection />  
      </div>

      <div className="relative z-10 mt-16">
        <CompareDemo />
      </div> {/* ✅ Added missing closing </div> */}

      <div className="relative z-10 mt-16">
        <MarqueeDemo />
      </div>

      <div className="relative z-10 mt-16">
        <ThreeStepPlan />
      </div>

      <div className="relative z-10 mt-16">
        <BusinessFeatures />
      </div>

      <div className="relative z-10 mt-16">
        <ContactSection />
      </div>

      <div className="relative z-10 mt-16">
        <Footer />
      </div>
    </div>
  );
}
