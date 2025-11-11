import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      icon: "/How-It-Works/paper.png",
      title: "Define Key Words",
      desc: "We discover how potential customers search for your clients. Input their business keywords, competitors, and relevant search terms.",
    },
    {
      icon: "/How-It-Works/research-paper.png",
      title: "Monitor Search Traffic",
      desc: "We monitor search traffic in real time for those keywords, names, and URLs. When potential customers show intent, you’ll be notified instantly.",
    },
    {
      icon: "/How-It-Works/rocket.png",
      title: "Identify Who’s Searching",
      desc: "Automatically collect and deliver verified contact information — name, email, phone, and more — directly to your agency dashboard.",
    },
  ];

  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-white via-[#fff9f7] to-white relative overflow-hidden font-sans">
      {/* Decorative subtle gradient rings */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a53000]/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900 mb-6 tracking-tight">
          How It <span className="text-[#a53000]">Works</span>
        </h2>
        <p className="text-[18px] md:text-[20px] text-gray-700 max-w-2xl mx-auto leading-relaxed mb-16">
          Empower your agency with an AI-powered system that identifies, captures, and converts
          high-intent visitors into sales-ready leads — all in real time.
        </p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-gray-100 p-10 shadow-sm hover:shadow-xl hover:border-[#a53000]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full bg-[#fff3ef] flex items-center justify-center shadow-inner group-hover:bg-[#a53000]/10 transition-all duration-300">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={55}
                    height={55}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold text-gray-900 mb-4 group-hover:text-[#a53000] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                {step.desc}
              </p>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[3px] bg-[#a53000] transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
