"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WebsiteVisitorFAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How does your Exact Match identify website visitors without cookies?",
      a: "We use IP intelligence, behavioral data, and secure third-party verification to match visitors to verified business and contact information in real time.",
    },
    {
      q: "What kind of lead information will I receive?",
      a: "You’ll receive verified contact details including name, email, phone number, company, and other data fields depending on your plan.",
    },
    {
      q: "Do I need to install anything complicated?",
      a: "Not at all. You simply add a single tracking pixel or script to your site — no complex setup or backend integration required.",
    },
    {
      q: "Will this slow down my website?",
      a: "No. Our lightweight tracking pixel is fully optimized for speed and will not affect your page load times or SEO performance.",
    },
    {
      q: "Can I integrate this with my existing CRM or tools?",
      a: "Yes! We support seamless integrations with major CRMs and automation tools like HubSpot, Salesforce, HighLevel, and Zapier.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-center relative overflow-hidden font-sans">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f7] to-white opacity-90 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-[38px] md:text-[48px] font-bold text-gray-900 mb-12 tracking-tight leading-tight">
          Frequently Asked <span className="text-[#a53000]">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-5 text-left">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-300 border rounded-2xl shadow-sm hover:shadow-md ${
                open === i
                  ? "border-[#a53000]/70 bg-[#fff8f6]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              >
                <span
                  className={`text-[18px] md:text-[19px] font-semibold transition-colors leading-snug ${
                    open === i
                      ? "text-[#a53000]"
                      : "text-gray-900 hover:text-[#a53000]"
                  }`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    open === i ? "rotate-180 text-[#a53000]" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-40 px-6 pb-5" : "max-h-0 px-6"
                }`}
              >
                <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed tracking-wide">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a href="/book-demo/">
            <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300 text-[17px]">
              Get Instant Access
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
