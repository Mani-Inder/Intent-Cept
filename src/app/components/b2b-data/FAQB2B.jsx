"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQB2B() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    {
      q: "What is IntentCept’s B2B Data Platform?",
      a: "It’s a real-time intelligence system that reveals verified business contacts and decision-makers actively searching within your target industry.",
    },
    {
      q: "What kind of lead information will I receive?",
      a: "You’ll get verified contact data — name, company, title, email, phone, and buying intent — sourced ethically and refreshed in real time.",
    },
    {
      q: "Who can benefit from this platform?",
      a: "Marketing agencies, B2B SaaS, and enterprise sales teams that want accurate, intent-driven leads without manual research.",
    },
    {
      q: "How is this different from buying a list?",
      a: "Unlike static lists, IntentCept’s data updates constantly. You only receive active, high-intent contacts — not outdated spreadsheets.",
    },
    {
      q: "Can I integrate this with my CRM or automation tools?",
      a: "Yes. IntentCept integrates seamlessly with CRMs, pipelines, and automation tools like HubSpot, HighLevel, and Zapier via API or webhook.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-[#fff8f5] to-white text-center font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-5 text-left">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 ${
              active === i
                ? "border-[#a53000] bg-[#fff8f6] shadow-md"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md"
            }`}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
            >
              <span
                className={`text-[18px] font-semibold transition-colors ${
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
              <div className="px-6 pb-5 text-gray-700 border-t border-gray-100 text-[16px] leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
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
