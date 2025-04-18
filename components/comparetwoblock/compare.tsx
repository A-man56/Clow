"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { SparklesCore } from "./sparkles";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../lib/utils";
import { IconDotsVertical } from "@tabler/icons-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
  containerWidth?: string;
  containerHeight?: string;
}

export const Compare = ({
  firstImage = "/photos/firstImage.png",
  secondImage = "/photos/secondImage.png",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
  containerWidth = "500px",
  containerHeight = "450px",
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
const autoplayRef = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      cancelAnimationFrame(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true);
        stopAutoplay();
      }
    },
    [slideMode, stopAutoplay]
  );

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
      if (!isMouseOver) {
        startAutoplay();
      }
    }
  }, [slideMode, isMouseOver, startAutoplay]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent)));
        });
      }
    },
    [slideMode, isDragging]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleStart(e.touches[0].clientX);
    },
    [handleStart]
  );

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    
      <div
        ref={sliderRef}
        className={cn(
          "mx-auto flex justify-center items-center bg-black rounded-2xl overflow-hidden ",
          className
        )}
        style={{
          width: containerWidth,
          height: containerHeight,
          position: "relative",
          cursor: slideMode === "drag" ? "grab" : "col-resize",
          minHeight: "100px",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={mouseLeaveHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        <AnimatePresence initial={false}>
          <motion.div
            className="h-full w-px absolute top-0 m-auto z-30 bg-gradient-to-b from-transparent from-[5%] to-[95%] via-indigo-500 to-transparent"
            style={{
              left: `${sliderXPercent}%`,
              top: "0",
              zIndex: 40,
            }}
            transition={{ duration: 0 }}
          >
            <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
            <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
            <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
              <MemoizedSparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            {showHandlebar && (
              <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
                <IconDotsVertical className="h-4 w-4 text-black" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
          <AnimatePresence initial={false}>
            {firstImage ? (
              <motion.div
                className={cn(
                  "absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none overflow-hidden",
                  firstImageClassName
                )}
                style={{
                  clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
                }}
                transition={{ duration: 0 }}
              >
                <img
                  alt="first image"
                  src={firstImage}
                  className={cn(
                    "absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none object-cover",
                    firstImageClassName
                  )}
                  draggable={false}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false}>
          {secondImage ? (
            <motion.img
              className={cn(
                "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none object-cover",
                secondImageClassname
              )}
              alt="second image"
              src={secondImage}
              draggable={false}
            />
          ) : null}
        </AnimatePresence>
      </div>
    
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);