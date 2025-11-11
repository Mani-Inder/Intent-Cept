import React from "react";
import Image from "next/image";
import { CheckCircle, XCircle } from "lucide-react";

export default function RevealContact() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8f5] to-white py-20 px-6 text-center overflow-hidden font-sans">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      {/* Header */}
      <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-3 leading-tight">
        Anonymous No More:{" "}
        <span className="text-[#a53000]">Reveal the People Behind Every Click</span>
      </h2>
      <p className="text-gray-600 text-[16.5px] max-w-2xl mx-auto mb-14">
        Stop guessing who visits your site. IntentCept turns your anonymous traffic into{" "}
        <span className="font-semibold text-gray-800">
          real, verified decision-makers
        </span>{" "}
        — without cookies, forms, or friction.
      </p>

      {/* Main Horizontal Layout */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-30">
        {/* LEFT CARD */}
        <div className="bg-[#fef9f6] border border-gray-200 rounded-xl p-8 text-left shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-1/3">
          <h3 className="text-[18px] font-semibold text-gray-900 mb-4">
            The Old Way
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <XCircle className="text-red-500 w-8 h-8 mt-1" />
              <span>  </span>
              <span>
                Google Analytics shows you <b>numbers</b>, not <b>names</b>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 w-8 h-8 mt-1" />
              <span>
                You spend ad dollars on visitors who disappear without a trace.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <XCircle className="text-red-500 w-8 h-8 mt-1" />
              <span>
                Valuable leads slip away behind <b>forms and gated content</b>.
              </span>
            </li>
          </ul>
        </div>

        

        {/* RIGHT CARD */}
        <div className="bg-[#fefcf9] border border-gray-200 rounded-xl p-8 text-left shadow-sm hover:shadow-md transition-all duration-300 w-full md:w-1/3">
          <h3 className="text-[18px] font-semibold text-gray-900 mb-4">
            The IntentCept Way
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-8 h-8 mt-1" />
              <span>
                Identify real visitors — <b>names, companies, and verified contacts</b>.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span>
                Instantly <b>deliver enriched leads</b> to your CRM or email.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span>
                100% <b>cookieless</b>, privacy-safe, and installs in minutes.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold text-[17px] hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
            Reveal My Hidden Leads
          </button>
        </a>
      </div>
    </section>
  );
}
