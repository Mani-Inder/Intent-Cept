import React from "react";

export default function HeroB2B() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8f5] to-white py-24 px-6 text-center overflow-hidden font-sans">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
        Your Agency’s Edge in{" "}
        <span className="text-[#a53000]">B2B Lead Intelligence</span>
      </h1>

      {/* Subheadline */}
      <p className="mt-5 text-gray-700 text-lg max-w-2xl mx-auto font-medium">
        IntentCept helps agencies uncover verified B2B contacts — real companies,
        real decision-makers, and real buying intent — updated in real time.
      </p>

      {/* CTA */}
      <a href="/book-demo/">
        <button className="mt-10 bg-[#a53000] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-[#8f2800] hover:shadow-lg transition-all duration-300">
          Get Started
        </button>
      </a>
    </section>
  );
}
