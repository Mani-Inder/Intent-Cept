import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactAddress() {
  return (
    <section className="relative text-center py-16 bg-gradient-to-b from-white via-[#fff8f5] to-[#fdeee4] font-sans overflow-hidden font-sans">
      {/* Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
        Get in <span className="text-[#a53000]">Touch</span>
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
        We’re here to help. Reach out through any of the channels below — our team will respond promptly.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="flex flex-col items-center bg-white shadow-lg border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
          <Mail className="w-10 h-10 text-[#a53000] mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
          <p className="text-gray-600 mb-2">support@exactmatchmarketing.com</p>
          <a
            href="mailto:support@exactmatchmarketing.com"
            className="text-[#a53000] text-sm font-medium hover:underline"
          >
            Send an Email →
          </a>
        </div>

        {/* Phone Card */}
        <div className="flex flex-col items-center bg-white shadow-lg border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
          <Phone className="w-10 h-10 text-[#a53000] mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
          <p className="text-gray-600 mb-2">(740) 527-8020</p>
          <a
            href="tel:+17405278020"
            className="text-[#a53000] text-sm font-medium hover:underline"
          >
            Speak with Support →
          </a>
        </div>
      </div>
    </section>
  );
}
