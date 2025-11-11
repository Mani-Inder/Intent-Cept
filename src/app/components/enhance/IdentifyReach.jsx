import React from "react";
import Image from "next/image";
import { XCircle, CheckCircle } from "lucide-react";

export default function IdentifyReach() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-gradient-to-b from-white via-[#fff8f5] to-white relative font-sans">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Don’t Just Advertise — <span className="text-[#a53000]">Identify & Reach</span> the People Already Searching for You
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mt-8">
        Stop wasting ad spend on cold audiences. Connect directly with high-intent buyers already looking for your solution.
      </p>

      <div className="relative grid md:grid-cols-2 items-center gap-10 mt-10">
        {/* LEFT (Old Way) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">The Old Way</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 w-5 h-5 mt-1" />
              Target cold audiences with zero interest.
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 w-5 h-5 mt-1" />
              Spend heavily on impressions, not conversions.
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 w-5 h-5 mt-1" />
              Rely on outdated targeting and wasted reach.
            </li>
          </ul>
        </div>

        

        {/* RIGHT (IntentCept Way) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition-all duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">The IntentCept Way</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              Reach verified prospects already searching for your service.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              Get complete lead profiles — name, company, and contact info.
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              Maximize ROI with data-driven targeting and CRM integration.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
