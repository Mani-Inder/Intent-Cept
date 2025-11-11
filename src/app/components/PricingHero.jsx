import React from "react";
import { ChevronDown } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-white via-[#fff8f5] to-white relative overflow-hidden font-sans">
      {/* Left Content */}
      <div className="md:w-1/2 text-left space-y-5 ml-25">
        {/* Tagline */}
        <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-xs md:text-sm font-medium text-gray-700 tracking-wide">
          BUILT TO SCALE. PRICED TO WIN.
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Unlock Your{" "}
          <span className="text-orange-700">Agency’s</span> <br />
          Next-Level Potential
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          Whether you're starting strong or scaling fast, there’s a plan that
          matches your momentum.
        </p>

        
        
      </div>

      {/* Right Image */}
      <div className="mt-12 md:mt-0 md:mr-70 flex justify-center md:justify-end ">
        <img
          src="Logos/Graphics.png"
          alt="Pricing Diagram"
          width={520}
          height={360}
          className="max-w-md w-460 mr-30 opacity-90 drop-shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
