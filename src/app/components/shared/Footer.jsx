import React from "react";

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      {/* Top Section */}
      <div className="bg-[#EEEEEE] text-gray-300 text-center py-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
          {/* Logo */}
          <img
            src="/Logos/footer-IntentCept.png"
            alt="IntentCept Logo"
            className="h-10 w-auto object-contain scale-270"
          />

          {/* Divider Line */}
          <div className="w-2/3 border-t border-gray-400"></div>

          {/* Footer Links */}
          <div className="flex justify-center items-center flex-wrap gap-8 text-black font-semibold text-[15px]">
            <a
              href="#"
              className="transition-all duration-300 hover:text-[#a53000]"
            >
              Privacy Policy
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="transition-all duration-300 hover:text-[#a53000]"
            >
              Terms of Use
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="transition-all duration-300 hover:text-[#a53000]"
            >
              Affiliate
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#2a2e36] text-center py-3 font-sans">
        <p className="text-[13px] text-white">
          © Copyright {new Date().getFullYear()} IntentCept. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
