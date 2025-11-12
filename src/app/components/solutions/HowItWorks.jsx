// "use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Plug. Play. Reveal.",
      desc: "Add our lightweight pixel to your site and watch anonymous traffic turn into real leads.",
    },
    {
      title: "We Reveal, Without Invading",
      desc: "Our AI-driven system identifies decision-makers using IP and behavioral data — 100% cookieless and privacy-compliant.",
    },
    {
      title: "From Visitor to Lead — Delivered to You",
      desc: "Get verified lead details automatically in your CRM, no manual lookup or forms needed.",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 font-sans text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        How It Works
      </h2>
      <p className="text-gray-600 mb-12 md:mb-14 max-w-2xl mx-auto text-base sm:text-lg px-3">
        Discover how IntentCept transforms anonymous visitors into real, qualified leads — in just three simple steps.
      </p>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-md bg-white text-left p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-[16px] sm:text-[17px] text-gray-900 mb-1">
                {step.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
