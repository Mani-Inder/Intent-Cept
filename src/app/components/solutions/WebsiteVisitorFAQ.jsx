"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WebsiteVisitorFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How does your Exact Match identify website visitors without cookies?",
      a: "We use IP intelligence, behavioral data, and secure third-party verification to match visitors to verified business data in real time.",
    },
    {
      q: "What kind of lead information will I receive?",
      a: "You’ll receive verified contact details including name, email, phone, company, and other data depending on your plan.",
    },
    {
      q: "Do I need to install anything complicated?",
      a: "No. Just one lightweight tracking pixel — no code or backend setup required.",
    },
    {
      q: "Will this slow down my website?",
      a: "Not at all. It’s fully optimized and will not affect load time or SEO.",
    },
    {
      q: "Can I integrate this with my CRM?",
      a: "Yes. We integrate seamlessly with HubSpot, Salesforce, HighLevel, and Zapier.",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 text-center font-sans">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto text-left space-y-3 px-2">
        {faqs.map((f, i) => (
          <div key={i} className="border border-gray-200 rounded-md bg-white">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center px-4 sm:px-5 py-3 sm:py-4 text-left"
            >
              <span className="font-semibold text-gray-900 text-sm sm:text-[16px]">
                {f.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  open === i ? "rotate-180 text-[#a53000]" : ""
                }`}
              />
            </button>
            {open === i && (
              <div className="px-4 sm:px-5 pb-3 sm:pb-4 text-gray-600 text-[14px] sm:text-[15px] border-t border-gray-100 leading-relaxed">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>

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
