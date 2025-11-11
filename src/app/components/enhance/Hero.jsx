import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8f5] to-white text-center py-24 px-6 overflow-hidden font-sans">
      {/* Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
        Find <span className="text-[#a53000]">High-Intent Leads</span> Actively Searching for Your Services
      </h1>
      <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto font-medium">
        IntentCept identifies people already looking for what you offer — real-time, verified, and ready to convert.
      </p>

      <a href="/book-demo/">
        <button className="mt-10 bg-[#a53000] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-[#8f2800] hover:shadow-lg transition-all duration-300">
          Get Started
        </button>
      </a>
    </section>
  );
}
