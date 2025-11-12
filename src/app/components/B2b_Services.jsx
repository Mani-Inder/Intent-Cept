"use client";
import React from "react";
import Image from "next/image";

export default function B2BLeadDataFeatures() {
  const features = [
    {
      title: "Win More Clients with the Right B2B Data for Your Agency",
      description:
        "Help your clients reach the right businesses with contact details and company info that makes outreach easier, faster, and more effective.",
      points: [
        "Reach Real People Who Make Decisions — Find names, job titles, emails, phone numbers, and LinkedIn profiles—so your clients talk to the right person every time.",
        "Know the Business Before You Pitch — Get details like company size, website, revenue range, and more to make your client’s outreach more targeted and relevant.",
        "Run Campaigns That Actually Work — Use clean and ready-to-use data for cold email, LinkedIn messages, and ad targeting to get better results with less effort.",
        "Show Clients Real Value, Fast — When your outreach connects and converts, your agency stands out—making it easier to keep clients and win new ones.",
      ],
      image: "/illustrations/Capture-Leads.png",
    },
    {
      title: "Get data instantly—skip the scraping, save time",
      description:
        "No more waiting for lead lists or relying on scraping tools that may break or violate terms of service. With B2B data, your leads are delivered in real time.",
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
        "Trust and compliance are at the core of Exact Match ID. All data is ethically sourced and adheres to global privacy standards.",
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
                  className="object-contain"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  loading="lazy"
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
