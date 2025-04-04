import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import { CompareDemo } from '../components/CompareDemo';
import BusinessFeatures from '../components/BusinessFeatures';
import ThreeStepPlan from '../components/ThreeStepPlan';
import HeroSection from '../components/HeroSection';
import GoogleGeminiEffectDemo from '../components/googscr';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import GridBackground from "../components/GridBackground";
import { PixelTrailDemo } from "../components/homeDebounce";
// import { BackgroundBeamsWithCollision } from "../components/background-beams-with-collision";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      {/* <BackgroundBeamsWithCollision className="absolute" /> */}
      {/* <PixelTrailDemo /> */}  

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
      <GoogleGeminiEffectDemo/>
      </div>

      <div className="relative z-10 mt-16">
        
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
