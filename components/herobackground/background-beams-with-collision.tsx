"use client";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 5, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 7, delay: 9 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 4, className: "h-6" },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 80, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 120, translateX: 120, duration: 6, repeatDelay: 5, delay: 3, className: "h-7" },
    { initialX: 1100, translateX: 1100, duration: 6, repeatDelay: 7, delay: 1, className: "h-10" },
    { initialX: 1110, translateX: 1110, duration: 6, repeatDelay: 10, delay: 9, className: "h-5" },
    { initialX: 500, translateX: 500, duration: 6, repeatDelay: 3, delay: 5, className: "h-16" },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 3, className: "h-6" },
    { initialY: 10, translateY: 10, duration: 6, repeatDelay: 2, delay: 1, className: "h-13" },
    
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-[40rem] to-black relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      {beams.map((beam) => (
        <Beam
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-black w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow: "0 0 24px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(0, 0, 0, 0.2)",
        }}
      ></div>
    </div>
  );
};

const Beam = React.forwardRef<  
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [beamKey, setBeamKey] = useState(0);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        // Reset beam position if it reaches the bottom
        if (beamRect.bottom >= containerRect.top) {
          setBeamKey((prevKey) => prevKey + 1);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);
    return () => clearInterval(animationInterval);
  }, [containerRef]);

  return (
    <motion.div
      key={beamKey}
      ref={beamRef}
      animate="animate"
      initial={{ translateY: beamOptions.initialY || "-200px", translateX: beamOptions.initialX || "0px", rotate: beamOptions.rotate || 0 }}
      variants={{
        animate: {
          translateY: beamOptions.translateY || "1800px",
          translateX: beamOptions.translateX || "0px",
          rotate: beamOptions.rotate || 0,
        },
      }}
      transition={{
        duration: beamOptions.duration || 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: beamOptions.delay || 0,
        repeatDelay: beamOptions.repeatDelay || 0,
      }}
      className={cn(
        "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-black via-gray-700 to-transparent",
        beamOptions.className
      )}
    />
  );
});

Beam.displayName = "Beam";
