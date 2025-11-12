import React from "react";
import Image from "next/image";

export default function AgencySection() {
  return (
    <section className="bg-[#fff7f6] py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-xl border border-gray-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Your Agency. Your Leads. Your Brand.
          </h2>
          <p className="text-gray-700 mb-8">
            Capture, track, and deliver ready-to-convert leads—without third-party branding or software limitations.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Capture & Identify
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Use smart tracking tools to discover real people interested in your client’s business.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Deliver
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Automatically send leads to your favorite CRMs, email platforms, or sales pipelines with zero manual effort.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Scale
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Grow your agency effortlessly with unlimited campaigns, white-labeled branding, and flexible client management.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a href="/pricing/">
              <button className="bg-[#b53000] text-white px-6 py-3 rounded-md font-medium hover:bg-[#8f2800] transition">
                Start Scaling Your Agency Now!
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Funnel Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Agency-Icons/Funnel.png"
            alt="Lead Funnel"
            width={480}
            height={480}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
