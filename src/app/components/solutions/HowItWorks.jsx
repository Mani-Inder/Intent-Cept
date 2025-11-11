import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Plug. Play. Reveal.",
      desc: "Add our lightweight pixel to your site and watch anonymous visitors instantly transform into identifiable leads — no complex setup required.",
    },
    {
      number: "2",
      title: "We Reveal, Without Invading.",
      desc: "Our next-gen AI engine uses IP intelligence, device signals, and behavioral analytics — 100% cookieless and privacy-compliant.",
    },
    {
      number: "3",
      title: "From Visitor to Lead — Delivered to You.",
      desc: "Stop guessing who visited your site. We deliver verified leads straight to your CRM or dashboard in real-time.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f6fff9] to-white py-24 px-6 text-center overflow-hidden font-sans">
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_70%)] -z-10"></div>

      {/* Heading */}
      <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
        How It <span className="text-[#10b981]">Works</span>
      </h2>
      <p className="text-gray-700 text-[20px] max-w-2xl mx-auto mb-16 leading-relaxed">
        Discover how IntentCept transforms anonymous visitors into real, sales-ready leads — in three simple, seamless steps.
      </p>

      {/* Steps */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-[0_10px_35px_rgba(16,185,129,0.15)] transition-all duration-300 hover:scale-[1.02] text-left p-10"
          >
            {/* Step Number Circle */}
            <div className="absolute -top-5 left-10 bg-[#10b981] text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
              {step.number}
            </div>

            {/* Step Content */}
            <div className="mt-8">
              <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-[#10b981] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-800 text-[18px] leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Accent underline animation */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#10b981] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Bottom Accent CTA */}
      <div className="mt-16">
        <a href="/book-demo/">
          <button className="bg-[#10b981] text-white px-10 py-3.5 rounded-full font-semibold text-[17px] hover:bg-[#059669] shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
