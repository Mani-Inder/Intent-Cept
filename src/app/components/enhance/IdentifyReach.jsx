// "use client";
import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function IdentifyReach() {
  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 text-center font-sans">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4 px-2">
        Don’t Just Advertise —{" "}
        <span className="text-[#a53000]">Identify and Reach</span> the People Already
        Searching for You
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 md:mb-14 text-base sm:text-lg px-3">
        Discover real people searching for your services — no guesswork, just actionable data.
      </p>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto items-start">
        {/* Old Way */}
        <div className="bg-[#f9f9fb] border border-gray-300 rounded-md text-left p-5 sm:p-6">
          <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              Target cold audiences with no intent.
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              Spend heavily on reach, not conversions.
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              Hope your ads find the right people.
            </li>
          </ul>
        </div>

        {/* IntentCept Way */}
        <div className="bg-white border border-gray-300 rounded-md text-left p-5 sm:p-6 relative">
          <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5 mt-[3px]" />
              Reach verified people searching for your service.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5 mt-[3px]" />
              Convert intent into action before competitors do.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5 mt-[3px]" />
              Maximize ROI with high-intent outreach.
            </li>
          </ul>

          <p className="absolute -top-5 right-4 text-[12px] sm:text-[13px] italic text-gray-700">
            Turn search intent into results
          </p>
        </div>
      </div>
    </section>
  );
}
