
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Pricing | IntentCept",
  description:
    "Choose the perfect IntentCept plan to scale your agency with unlimited leads, automation, and integrations.",
  keywords: [
    "IntentCept Pricing",
    "Lead Generation Pricing",
    "Marketing Automation Plans",
    "AI Sales Platform",
    "Agency Growth Tools",
  ],
  openGraph: {
    title: "IntentCept Pricing",
    description:
      "Find the right IntentCept plan to grow your agency — transparent pricing for every stage.",
    url: "https://intentcept.vercel.app/pricing",
    images: ["/og-image.png"],
  },
};

export default function PricingHero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-white font-sans">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <div className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-600 bg-white/60 backdrop-blur-md shadow-sm">
          BUILT TO SCALE. PRICED TO WIN.
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
          Unlock Your <span className="text-[#a53000]">Agency’s</span> Next-Level Potential
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
          Whether you're starting strong or scaling fast, there’s a plan that matches your momentum.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-12 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-[85%] sm:w-[70%] md:w-[90%] lg:w-[80%] max-w-[600px]">
          <Image
            src="/Logos/Graphics.png"
            alt="IntentCept Pricing Banner"
            width={650}
            height={450}
            className="w-full h-auto rounded-lg drop-shadow-lg transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
