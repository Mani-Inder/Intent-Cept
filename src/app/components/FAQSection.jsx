"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Can I customize the platform to fit my brand?",
      answer:
        "Absolutely. The platform is fully white-labeled — you can add your logo, brand colors, and tailor the experience for each client to reflect your agency’s identity.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, Stripe, and PayPal. You can also connect your preferred payment gateway through our API integration.",
    },
    {
      question: "Is there a time limit on using the platform?",
      answer:
        "No. Your access remains active as long as your subscription is valid — no limits, no interruptions, full freedom.",
    },
    {
      question: "Do I have limits on the number of clients or campaigns I can create?",
      answer:
        "No limits whatsoever. Create unlimited clients, campaigns, and leads under your plan — no hidden restrictions.",
    },
    {
      question: "Can I integrate my leads into my CRM or other tools?",
      answer:
        "Yes. You can integrate directly with CRMs, email marketing tools, and automation platforms using our native integrations or webhooks.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is simple and scalable — based on the number of leads or contacts you generate. Pay for what you use, with no setup costs.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 live chat and email support, along with dedicated onboarding and technical assistance for agencies of all sizes.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-white py-20 px-6 text-center relative overflow-hidden font-sans">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff9f7] to-white opacity-90 pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-[38px] md:text-[48px] font-bold text-gray-900 mb-12 tracking-tight leading-tight">
          Frequently Asked <span className="text-[#a53000]">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-5 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 border rounded-2xl shadow-sm hover:shadow-md ${
                activeIndex === index
                  ? "border-[#a53000]/70 bg-[#fff8f6]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`text-[18px] md:text-[19px] font-semibold transition-colors leading-snug ${
                    activeIndex === index
                      ? "text-[#a53000]"
                      : "text-gray-900 hover:text-[#a53000]"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-[#a53000]" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 px-6 pb-5" : "max-h-0 px-6"
                }`}
              >
                <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed tracking-wide">
                  {faq.answer}
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
