"use client";
import React from "react";
import {
  Wrench,
  CreditCard,
  Infinity,
  Headphones,
  Share2,
  Settings,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      iconBg: "bg-[#ffeceb]",
      icon: <Wrench className="w-5 h-5 text-[#a53000]" />,
      title: "Fully White-labeled SAAS",
      desc: "Launch your own branded platform with complete customization.",
    },
    {
      iconBg: "bg-[#eaf1ff]",
      icon: <CreditCard className="w-5 h-5 text-[#a53000]" />,
      title: "Pay Only For Contacts",
      desc: "No hidden fees, just pay for the leads you generate.",
    },
    {
      iconBg: "bg-[#fff3eb]",
      icon: <Infinity className="w-5 h-5 text-[#a53000]" />,
      title: "Unlimited Clients And Campaigns",
      desc: "Scale without limits—manage as many clients and campaigns as you need.",
    },
    {
      iconBg: "bg-[#eaf7ff]",
      icon: <Headphones className="w-5 h-5 text-[#a53000]" />,
      title: "Responsive, Reliable Support",
      desc: "Get expert assistance anytime, whenever you need it.",
    },
    {
      iconBg: "bg-[#edf0ff]",
      icon: <Share2 className="w-5 h-5 text-[#a53000]" />,
      title: "Personalised Contact Flow",
      desc: "Use custom webhooks to send contacts directly to your preferred platform.",
    },
    {
      iconBg: "bg-[#f2f2ff]",
      icon: <Settings className="w-5 h-5 text-[#a53000]" />,
      title: "Product Customization",
      desc: "Customize features to match your business needs on a client level.",
    },
  ];

  return (
    <section id="why-us" className="bg-[#fafaff] py-20 px-6 font-sans text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why Choose Us
      </h2>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
        With a fully white-labeled platform, seamless integrations, and
        personalized support, we ensure you get the best results—without limitations.
      </p>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:shadow-md transition-all duration-300"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-md ${item.iconBg} mb-4`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#8f2800] transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
