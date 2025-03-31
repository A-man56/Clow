import React from "react";
import { Compare } from "./compare";

export function CompareDemo() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        Build, Automate, and Scale—Your Way
      </h1>
      <h2 className="text-lg text-center text-gray-500 mt-5 mb-5">
        From streamlined workflows to custom integrations, get the flexibility to build exactly what you need.
      </h2>

      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-start m">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="ml-10 mt-40" // Adjust spacing 
        >
          <Compare
            firstImage="/photos/firstImage.png"
            secondImage="/photos/secondImage.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="flex justify-center items-center bg-black rounded-2xl overflow-hidden"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
    </>
  );
}
