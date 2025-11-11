import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-white via-[#fff8f5] to-white relative overflow-hidden ">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(187,200,99,0.12),_transparent_70%)] -z-10"></div>

      {/* Left Content */}
      <div className="max-w-xl space-y-6 ml-20 text-center md:text-left">
        {/* Tagline */}
        <div className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 bg-white/60 backdrop-blur-md shadow-sm">
          OWN EVERY MOMENT OF INTENT
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Supercharge Your{" "}
          <span className="text-[#BBC863]">Growth</span> with{" "}
          <span className="text-[#a53000]">IntentCept</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          The intelligent, cookieless platform that captures, qualifies, and routes leads in real time — seamlessly under your brand.
        </p>

        {/* CTA */}
        <div>
          <a href="/book-demo/">
            <button className="bg-[#a53000] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-[#8f2800] hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Right Side (Hero Graphic) */}
      <div className="mt-12 md:mt-0 md:mr-70 flex justify-center md:justify-end">
        <Image
          src="/Logos/Graphics.png"
          alt="IntentCept Growth Diagram"
          width={520}
          height={360}
          className="rounded-xl drop-shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
