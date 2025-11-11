import React from "react";
import Image from "next/image";

export default function AgencySection() {
  return (
    <section className="bg-[#fff9f7] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left">
          {/* Heading */}
          <h2 className="text-[42px] font-bold text-gray-900 leading-tight mb-6">
            Your <span className="text-[#a53000]">Agency.</span><br />
            Your <span className="text-[#a53000]">Leads.</span><br />
            Your <span className="text-[#a53000]">Brand.</span>
          </h2>

          {/* Subheading */}
          <p className="text-[18px] text-gray-700 mb-10 leading-relaxed">
            Discover, capture, and deliver high-intent leads — powered by precision
            tracking and seamless integrations, all under your own brand.
          </p>

          {/* Feature List */}
          <div className="space-y-8 border-l-4 border-[#a53000] pl-6">
            <div>
              <h4 className="font-semibold text-gray-900 text-[18px] mb-1">
                Capture & Identify
              </h4>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Use intelligent keyword and behavior tracking to identify real users
                actively searching for your clients’ services. IntentCept pinpoints
                opportunities in real time, ensuring your leads are always fresh and relevant.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 text-[18px] mb-1">
                Deliver
              </h4>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Automatically route verified contacts directly into your CRM, email
                platform, or sales pipeline — no manual work required. Our integration
                layer ensures data is synchronized instantly and accurately.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 text-[18px] mb-1">
                Scale
              </h4>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Expand your agency effortlessly with unlimited campaigns, complete
                white-label branding, and streamlined lead management. Focus on
                results — while IntentCept automates the rest.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a href="/book-demo/">
              <button className="bg-[#a53000] text-white px-8 py-3 rounded-full font-semibold text-[17px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                Start Scaling Your Agency with Precision
              </button>
            </a>
          </div>
        </div>

        {/* Right Funnel Image */}
        <div className="relative flex justify-center">
          {/* Background Glow */}
          <div className="absolute -z-10 w-80 h-80 bg-[#a53000]/10 rounded-full blur-3xl top-10 right-10"></div>

          {/* Funnel Graphic */}
          <Image
            src="/Agency-Icons/Funnel.png" // Replace this with your new funnel PNG path
            alt="Agency Funnel Illustration"
            width={500}
            height={500}
            className="object-contain mt-90 drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
