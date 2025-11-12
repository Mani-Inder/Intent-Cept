// "use client";
import React from "react";

export default function MissedOpportunity() {
  return (
    <section className="relative bg-white py-16 md:py-20 px-4 md:px-6 text-center overflow-hidden font-sans">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-md p-6 sm:p-8 md:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 mb-4 leading-snug">
          You’re Losing Leads You Never Knew You Had.
        </h2>
        <p className="text-gray-700 text-base sm:text-[17px] max-w-xl mx-auto mb-5 leading-relaxed">
          Every day, real buyers visit your site — and disappear without a trace.
          Analytics tell you <em>how many</em>. IntentCept tells you <strong>who</strong>.
        </p>

        <div className="w-20 h-[3px] bg-[#a53000] mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-700 text-base sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
          Traditional tools count visits, but not interest. With{" "}
          <strong>IntentCept’s cookieless visitor ID</strong>, uncover the companies
          and decision-makers behind every visit — instantly and ethically.
        </p>

        <p className="text-[15px] sm:text-[17px] text-[#a53000] font-semibold mt-6 sm:mt-8">
          Stop losing invisible leads. Start capturing opportunity.
        </p>

        <div className="mt-8">
          <a href="/book-demo/">
            <button className="bg-[#a53000] text-white px-8 py-3 rounded-md font-semibold text-sm sm:text-base hover:bg-[#8f2800] transition-all duration-300">
              Reveal My Hidden Leads
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
