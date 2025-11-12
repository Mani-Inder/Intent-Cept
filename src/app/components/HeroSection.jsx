
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 md:py-20 bg-white relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(187,200,99,0.12),_transparent_70%)] -z-10"></div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        {/* Tagline */}
        <div className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 bg-white/60 backdrop-blur-md shadow-sm">
          OWN EVERY MOMENT OF INTENT
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your <span className="text-black">Growth</span> with{" "}
          <span className="text-[#a53000]">IntentCept</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          The intelligent, cookieless platform that captures, qualifies, and routes leads in real time — seamlessly under your brand.
        </p>

        {/* CTA */}
        <div>
          <a href="/book-demo/">
            <button className="bg-[#a53000] text-white px-6 sm:px-8 py-3 rounded-md font-semibold text-base sm:text-lg hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Hero Graphic */}
      <div className="mt-12 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[85%] sm:w-[70%] md:w-[90%] lg:w-[80%] max-w-[600px]">
          <Image
            src="/Logos/Graphics.png"
            alt="IntentCept Growth Diagram"
            width={650}
            height={450}
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto rounded-lg drop-shadow-lg transition-transform duration-500 hover:scale-105"
            priority
            // quality={80}
          />
        </div>
      </div>
    </section>
  );
}
