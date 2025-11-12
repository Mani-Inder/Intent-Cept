"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQB2B() {
  const [active, setActive] = useState(null);
  const toggle = (i) => setActive(active === i ? null : i);

  const faqs = [
    {
      q: "What is IntentCept’s B2B Data Platform?",
      a: "It’s a real-time intelligence system that reveals verified business contacts and decision-makers actively searching within your target market.",
    },
    {
      q: "What kind of lead information will I receive?",
      a: "You’ll receive verified contact data — name, title, company, email, phone, and buyer intent, updated continuously.",
    },
    {
      q: "Who can benefit from this platform?",
      a: "Marketing agencies, B2B SaaS companies, and enterprise sales teams who need accurate, high-intent leads.",
    },
    {
      q: "How is this different from buying a list?",
      a: "Unlike static lists, IntentCept delivers verified, active, and current contacts — no outdated data or guessing.",
    },
    {
      q: "Can I integrate this with my CRM?",
      a: "Yes! We integrate seamlessly with HubSpot, HighLevel, Salesforce, and other CRMs via API or webhooks.",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 text-center font-sans">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-10">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto text-left space-y-3 px-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-gray-200 rounded-md bg-white">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left"
            >
              <span className="font-semibold text-gray-900 text-sm sm:text-[16px] leading-snug">
                {f.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  active === i ? "rotate-180 text-[#a53000]" : ""
                }`}
              />
            </button>

            {active === i && (
              <div className="px-4 sm:px-5 pb-3 sm:pb-4 text-gray-600 text-[14px] sm:text-[15px] border-t border-gray-100 leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 md:mt-12">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-8 sm:px-10 py-3 rounded-md font-semibold hover:bg-[#8f2800] text-sm sm:text-base transition-all duration-300">
            Get Instant Access
          </button>
        </a>
      </div>
    </section>
  );
}
