"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    {
      q: "What is Enhanced Search ID?",
      a: "Enhanced Search ID delivers verified leads actively searching for your services based on your keywords, industries, and regions — in real time.",
    },
    {
      q: "How accurate is the data?",
      a: "Every contact is verified using multiple trusted data sources to ensure accuracy, compliance, and engagement readiness.",
    },
    {
      q: "Can I integrate with my CRM?",
      a: "Yes — IntentCept integrates seamlessly with platforms like HighLevel, Zapier, HubSpot, and others via webhooks or API.",
    },
    {
      q: "Is it compliant with privacy laws?",
      a: "Absolutely. Our technology is fully cookieless and adheres to GDPR, CCPA, and global privacy standards.",
    },
    {
      q: "Who can benefit from this?",
      a: "Agencies, marketers, and B2B businesses looking to generate in-market leads without relying on forms or cookies.",
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-white via-[#fff8f5] to-white font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`border rounded-xl transition-all ${
              active === i
                ? "border-[#a53000] bg-[#fff8f6] shadow-md"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span
                className={`font-semibold text-lg transition ${
                  active === i ? "text-[#a53000]" : "text-gray-900"
                }`}
              >
                {f.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  active === i ? "rotate-180 text-[#a53000]" : "text-gray-500"
                }`}
              />
            </button>

            {active === i && (
              <div className="px-6 pb-4 text-gray-700 border-t border-gray-100 text-[16px]">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold text-[17px] hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
            Get Instant Access
          </button>
        </a>
      </div>
    </section>
  );
}
    