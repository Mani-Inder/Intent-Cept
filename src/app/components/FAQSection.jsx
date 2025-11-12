"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Can I customize the platform to fit my brand?",
      answer:
        "Absolutely! Our platform is fully white-labeled, meaning you can customize branding, UI, and features to match your business.",
    },
    {
      question: "What payment methods do you accept ?",
      answer:
        "We accept all major credit cards, Stripe, and PayPal for convenient and secure transactions.",
    },
    {
      question: "Is there a time limit on using the platform?",
      answer:
        "No, you can use the platform as long as your subscription remains active — with no time restrictions.",
    },
    {
      question: "Do I have limits on the number of clients or campaigns I can create?",
      answer:
        "There are no limits — you can create as many clients or campaigns as you need within your plan.",
    },
    {
      question: "Can I integrate my leads into my CRM or other platforms?",
      answer:
        "Yes, you can integrate with CRMs or other tools easily using our built-in integrations or API.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is straightforward and based on your selected plan — transparent with no hidden fees.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 chat and email support, along with onboarding and technical help whenever you need it.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-[#f9f9ff] py-20 px-6 font-sans text-center">
<div className="max-w-3xl mx-auto text-left space-y-3 px-3">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-md transition-all ${
                activeIndex === index ? "bg-white" : "bg-white"
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
                  className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-4 text-[15px] text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14">
          <a href="/book-demo/">
            <button className="bg-[#b13200] text-white font-semibold px-10 py-3 rounded-md hover:bg-[#922800] transition-all duration-300">
              GET INSTANT ACCESS
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
