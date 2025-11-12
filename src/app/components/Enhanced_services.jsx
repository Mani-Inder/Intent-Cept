// "use client";
import React from "react";
import Image from "next/image";

export default function LeadDataFeatures() {
  const features = [
    {
      title: "Pinpoint-accurate contacts—no fillers, just your ideal leads",
      description:
        "Stop wasting time marketing to the masses. Start with search-based intent and send your marketing campaigns into overdrive. Enhanced Search ID delivers only the most relevant, high-intent contacts based on your exact keyword criteria.",
      points: [
        "You're flying blind. Stop guessing who’s actually in the market for your service—wasting ad dollars on people who may never buy.",
        "You're targeting too late. By the time you reach most prospects with traditional marketing, they’ve already chosen a competitor. Enhanced Search ID lets you reach them while they’re actively searching—not after the fact.",
        "You're paying for noise, not intent. Most marketing platforms charge you to reach broad audiences, hoping some are interested. Without Enhanced Search ID, you’re buying impressions—not buyers.",
      ],
      image: "/illustrations/Capture-Leads.png",
    },
    {
      title: "Get data instantly—skip the scraping, save time",
      description:
        "No more waiting for lead lists or relying on scraping tools that may break or violate terms of service. With Search ID, your leads are delivered in real time.",
      points: [
        "No Third-Party Delays — Cut out the middlemen. Our proprietary system ensures that data is delivered directly and securely—without bottlenecks.",
        "Built for Speed — Whether you’re scaling fast or handling high volumes, our infrastructure is optimized for real-time performance.",
        "Smarter Outreach, Better Results — With cleaner, more relevant data, your campaigns convert faster and with higher efficiency.",
      ],
      image: "/illustrations/white-labeled.png",
    },
    {
      title: "100% legally obtained data that is ready to use",
      description:
        "Trust and compliance are at the core of Enhanced Search ID. All data is ethically sourced and adheres to global privacy standards.",
      points: [
        "Enterprise-Grade Security — Data is encrypted, stored securely, and access is strictly permission-based.",
        "Ethically Sourced Data — Our data is collected through consent-based, privacy-compliant methods. Every contact meets regulatory standards, ensuring your campaigns are both effective and responsible.",
        "Peace of Mind — Use the data confidently for outreach, remarketing, and analytics—knowing it meets all legal requirements.",
      ],
      image: "/illustrations/Target.png",
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE COLUMN */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain "
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                />
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="w-full md:w-1/2 space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3 mt-4">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#a53000] text-lg mt-1">•</span>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
