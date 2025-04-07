import React from "react";
import GoogleGeminiEffectDemo from "./googscr";
import TechCard from "./tech-card";
import NoTechCard from "./no-tech-card";

export default function Twocard() {
  return (
    <div className="bg-gray-900 flex flex-row justify-center items-start  p-6">
      <div>
        <TechCard />
      </div>
      <div>
        <GoogleGeminiEffectDemo />
      </div>
      <div>
        <NoTechCard />
      </div>
    </div>
  );
}
