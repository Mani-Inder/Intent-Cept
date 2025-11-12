"use client";
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
      desc: "We monitor internet search traffic for those keywords, names, and URLs. Our system can monitor in real time. When a potential customer searches for your keywords or competitors, we’ll let you know!",
    },
    {
      icon: "/How-It-Works/rocket.png",
      title: "Tell Who Is Searching",
      desc: "Automatically collect and deliver verified contact information—name, email, phone number, and more—directly to your agency dashboard.",
    },
  ];

  return (
    <section className="py-20 px-6 font-sans text-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
        How It Works
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
        We provide agencies with an AI-powered system to identify, capture, and
        convert website visitors into sales-ready leads.
      </p>

      {/* Steps Container */}
<div className="max-w-6xl mx-auto border border-gray-200 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-left p-6 sm:p-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start space-y-3">
            {/* Icon */}
            <div className="w-10 h-10">
              <Image
                src={step.icon}
                alt={step.title}
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
