import React from "react";
import Image from "next/image";
import { Target, Zap, Network, Database, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-[#a53000]" />,
      title: "Website Visitor Identification",
      desc: "Reveal exactly who’s visiting your clients’ sites — names, emails, companies, and intent data — all without forms or cookies.",
      // img: "/Services/visitor-id.png",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#a53000]" />,
      title: "Enhanced Search ID",
      desc: "Capture real-time keyword-level intent from Google and Bing searches. Convert search interest into actionable, verified leads.",
      // img: "/Services/search-id.png",
    },
    {
      icon: <Network className="w-8 h-8 text-[#a53000]" />,
      title: "B2B Data Intelligence",
      desc: "Access verified business contact data, company insights, and LinkedIn profiles — fueling sales, outreach, and partnerships.",
      // img: "/Services/b2b-data.png",
    },
    {
      icon: <Database className="w-8 h-8 text-[#a53000]" />,
      title: "Lead Enrichment API",
      desc: "Automate enrichment workflows with our API — instantly append missing contact details to any inbound or CRM lead record.",
      // img: "/Services/api.png",
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#a53000]" />,
      title: "White-Labeled Platform",
      desc: "Offer IntentCept as your own — branded dashboards, custom domains, and unlimited client seats. Your agency, your platform.",
      // img: "/Services/whitelabel.png",
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-white via-[#fff8f5] to-[#fdeee4] py-24 px-6 font-sans overflow-hidden ">
      {/* Accent Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BBC863]/10 blur-3xl rounded-full -z-10"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-[#a53000]">Core Services</span>
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Designed for agencies and enterprises — IntentCept empowers you with
          real-time lead visibility, intelligence, and automation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-left relative group"
          >
            {/* Icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <div className="text-[#a53000]/20 group-hover:text-[#a53000]/40 transition">
                <i className="fas fa-arrow-right text-xl"></i>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* Image */}
            {service.img && (
              <div className="mt-6 flex justify-center">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={320}
                  height={200}
                  className="rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
            Book a Free Demo
          </button>
        </a>
      </div>
    </section>
  );
}
