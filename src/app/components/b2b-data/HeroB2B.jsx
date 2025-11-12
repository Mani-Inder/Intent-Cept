// "use client";
import React from "react";

export default function HeroB2B() {
  return (
    <section className="relative bg-white py-16 md:py-24 px-4 md:px-6 text-center overflow-hidden font-sans">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug md:leading-tight max-w-4xl mx-auto px-2">
        Your Agency’s Edge in{" "}
        <span className="text-[#a53000]">B2B Lead Intelligence</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-5 text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-medium px-3">
        IntentCept helps agencies uncover verified B2B contacts — real companies,
        real decision-makers, and real buying intent — updated in real time.
      </p>

      {/* CTA */}
      <a href="/book-demo/">
        <button className="mt-8 md:mt-10 bg-[#a53000] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-md font-semibold text-base md:text-lg shadow-md hover:bg-[#8f2800] hover:shadow-lg transition-all duration-300">
          Get Started
        </button>
      </a>
    </section>
  );
}
