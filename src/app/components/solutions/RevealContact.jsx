// "use client";
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function RevealContact() {
  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 md:px-6 text-center font-sans">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug px-2">
        Anonymous No More:{" "}
        <span className="text-[#a53000]">Reveal the People Behind Every Click</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base sm:text-lg px-3">
        Stop guessing who visits your site. IntentCept turns your anonymous traffic
        into <span className="font-semibold text-gray-800">real, verified decision-makers</span> — no cookies, no forms, no friction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Old Way */}
        <div className="bg-[#f9f9fb] border border-gray-300 rounded-md p-5 sm:p-6 text-left">
          <h3 className="font-semibold text-lg text-gray-900 mb-3">The Old Way</h3>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              Google Analytics shows you <b>numbers</b>, not <b>names</b>.
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              You spend ad dollars on people who vanish.
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-[3px]" />
              Valuable leads stay hidden behind <b>forms and gated content</b>.
            </li>
          </ul>
        </div>

        {/* New Way */}
        <div className="bg-white border border-gray-300 rounded-md p-5 sm:p-6 text-left relative">
          <h3 className="font-semibold text-lg text-gray-900 mb-3">The IntentCept Way</h3>
          <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 w-5 h-5 mt-[3px]" />
              Identify real visitors — <b>names, companies, and verified contacts</b>.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 w-5 h-5 mt-[3px]" />
              Instantly deliver leads to your CRM or automation tools.
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-600 w-5 h-5 mt-[3px]" />
              100% cookieless, privacy-safe, and installs in minutes.
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white font-semibold px-8 sm:px-10 py-3 rounded-md hover:bg-[#8f2800] text-sm sm:text-base transition-all duration-300">
            Reveal My Hidden Leads
          </button>
        </a>
      </div>
    </section>
  );
}
