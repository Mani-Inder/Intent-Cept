"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "AGENCY WHITE-LABEL",
      price: "$1499",
      period: "/one-time",
      highlight: "Best for Agencies",
      features: [
        "Fully White-labeled SAAS",
        "Custom webhook integration",
        "Unlimited clients and campaigns",
        "Product Customization",
      ],
      button: "GET STARTED",
      accent: "#a53000",
    },
    {
      title: "ENTERPRISE API",
      price: "Let’s Talk!",
      period: "",
      highlight: "For Large-Scale Teams",
      features: [
        "Includes everything in Agency White-label",
        "Access to API endpoints",
        "Automate workflow via API",
        "Third-Party System Integration",
      ],
      button: "CONTACT SALES",
      accent: "#1f2937",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative bg-gradient-to-b from-white via-[#fff9f7] to-white py-24 px-6 text-center overflow-hidden font-sans"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.06),_transparent_60%)] -z-10"></div>

      {/* Header */}
      <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900 mb-4 tracking-tight">
        Choose Your <span className="text-[#a53000]">Right Plan</span> !
      </h2>
      <p className="text-[18px] text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
        Select from our tailored plans — built for flexibility, scalability, and growth.  
        Need something custom? We’ll craft a perfect solution for you.
      </p>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative group rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-[0_10px_35px_rgba(165,48,0,0.1)] transition-all duration-500 hover:scale-[1.02] text-left px-10 py-12`}
          >
            {/* Highlight Tag */}
            <div
              className={`absolute -top-3 left-8 text-white text-[13px] font-semibold px-3 py-1 rounded-full shadow-sm ${
                i === 0 ? "bg-[#a53000]" : "bg-gray-900"
              }`}
            >
              {plan.highlight}
            </div>

            {/* Title */}
            <h3
              className={`uppercase tracking-wide font-semibold text-[14px] mb-3 ${
                i === 0 ? "text-[#a53000]" : "text-gray-900"
              }`}
            >
              {plan.title}
            </h3>

            {/* Price */}
            <div className="flex items-end gap-1 mb-6">
              <h2 className="text-[44px] font-extrabold text-gray-900 leading-none">
                {plan.price}
              </h2>
              {plan.period && (
                <span className="text-[15px] text-gray-500 font-medium">
                  {plan.period}
                </span>
              )}
            </div>

            <div className="border-b border-gray-200 mb-6"></div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center text-[16px] text-gray-700 leading-relaxed"
                >
                  <CheckCircle2
                    className={`w-5 h-5 mr-3 ${
                      i === 0 ? "text-[#a53000]" : "text-gray-800"
                    }`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <a href="/book-demo/">
              <button
                className={`w-full py-3.5 rounded-full font-semibold text-[17px] transition-all duration-300 shadow-md hover:shadow-lg ${
                  i === 0
                    ? "bg-[#a53000] hover:bg-[#8f2800] text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.button}
              </button>
            </a>

            {/* Hover Accent Border */}
            <div
              className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[${plan.accent}] transition-all duration-500 pointer-events-none`}
            ></div>
          </div>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
