// "use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose Your Keywords & Target Area",
      desc: "Define what your ideal customers are searching for and where they are located.",
    },
    {
      title: "We Run Real-Time Data Matching",
      desc: "Our system searches across multiple intent data sources and directories to find decision-makers and active buyers.",
    },
    {
      title: "Receive Qualified Leads Automatically",
      desc: "Get clean, ready-to-contact leads delivered to your CRM — no scraping, no manual research, no guessing.",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 font-sans text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        How It Works
      </h2>
      <p className="text-gray-600 mb-12 md:mb-14 max-w-2xl mx-auto text-base sm:text-lg px-2">
        Discover the 3-step system that transforms anonymous traffic into real, qualified leads.
      </p>

      {/* Steps */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-md bg-white text-left p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4"
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
