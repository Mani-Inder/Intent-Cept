"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "Can I customize the platform to fit my brand?",
      answer:
        "Yes! The platform is fully white-labeled. You can use your logo, color palette, and custom branding across your client portals and dashboards.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, Stripe, and PayPal. Enterprise customers can also request invoicing for additional flexibility.",
    },
    {
      question: "Is there a time limit on using the platform?",
      answer:
        "No. Once subscribed, you can use the platform without time restrictions. You’re free to cancel anytime directly from your dashboard.",
    },
    {
      question: "Do I have limits on the number of clients or campaigns I can create?",
      answer:
        "You can create unlimited clients, campaigns, and leads under your agency plan — no hidden caps or limitations.",
    },
    {
      question: "Can I integrate my leads into my CRM or other tools?",
      answer:
        "Absolutely! Our platform integrates directly with CRMs, marketing tools, and automation platforms through APIs and webhooks.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is tiered based on your agency size and usage volume. You can choose flexible monthly or discounted annual plans.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 live chat, email support, and personalized onboarding for all customers — plus priority assistance for enterprise clients.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-[#fafaff] py-20 px-6 text-center font-sans">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>

      {/* FAQ List */}
<div className="max-w-3xl mx-auto text-left space-y-3 px-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-md transition-all duration-300 bg-white ${
              activeIndex === index ? "shadow-sm" : ""
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
            >
              <span className="font-semibold text-[17px] text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180 text-[#a53000]" : ""
                }`}
              />
            </button>

            {/* Collapsible Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 px-5 pb-4" : "max-h-0 px-5"
              }`}
            >
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white font-semibold px-10 py-3 rounded-md hover:bg-[#8f2800] transition-all duration-300">
            Get Instant Access
          </button>
        </a>
      </div>
    </section>
  );
}
