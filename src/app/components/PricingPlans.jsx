"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      title: "AGENCY WHITE-LABLE",
      price: "$1499",
      features: [
        "Fully White-labled SAAS",
        "Custom webhook integration",
        "Unlimited clients and campaigns",
        "Product Customization",
      ],
    },
    {
      title: "ENTERPRISE API",
      price: "Let's Talk!",
      features: [
        "Includes everything in Agency White-label",
        "Access to API endpoints",
        "Automate workflow via API",
        "Third Party System Integration",
      ],
    },
  ];

  return (
    <section className="bg-[#fafaff] py-20 px-6 text-center font-sans">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Choose Your Right Plan!
      </h2>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        Select from best plans, ensuring a perfect match. Need more or less?
        Customize your subscriptions for a seamless fit.
      </p>

      {/* Pricing Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-[#a53000] rounded-sm bg-white text-left p-8 flex flex-col justify-between"
          >
            {/* Title */}
            <h3 className="text-[15px] font-semibold text-[#a53000] uppercase mb-3 tracking-wide">
              {plan.title}
            </h3>

            {/* Price */}
            <h2 className="text-[38px] font-extrabold text-gray-900 mb-4">
              {plan.price}
            </h2>

            <hr className="border-gray-200 mb-5" />

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700 text-[15px]">
                  <CheckCircle2 className="w-4 h-4 text-[#a53000] mt-[2px] mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <a href="/book-demo/" className="w-full mt-auto">
              <button className="w-full bg-[#a53000] hover:bg-[#8f2800] text-white font-semibold py-3 rounded-sm transition-all">
                GET STARTED
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
