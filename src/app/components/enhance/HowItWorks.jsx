import React from "react";
import { Search, Brain, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[#a53000]" />,
      title: "Define Your Target Audience",
      desc: "Choose your keywords, industries, and regions — we’ll find people actively searching for your solution.",
    },
    {
      icon: <Brain className="w-8 h-8 text-[#a53000]" />,
      title: "We Match Real-Time Intent Data",
      desc: "Our AI-powered system identifies in-market buyers using verified, privacy-safe behavioral signals.",
    },
    {
      icon: <Send className="w-8 h-8 text-[#a53000]" />,
      title: "Receive Qualified Leads Instantly",
      desc: "Get fresh, verified contacts delivered to your dashboard or CRM — automatically.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 text-center font-sans">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
       <span className="text-[#a53000]">How</span>  It Works
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
        IntentCept transforms anonymous web activity into real, verified opportunities — in three simple steps.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-10 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 text-left md:text-center"
          >
            <div className="flex justify-center mb-5">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700 text-[16px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
