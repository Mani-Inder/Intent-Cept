// "use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full font-sans bg-gray-600 text-gray-300">
      {/* Top Section */}
      <div className="py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
          {/* Logo */}
          <img
            src="/Logos/footer-IntentCept.png"
            alt="IntentCept Logo"
            className="h-8 sm:h-10 w-auto object-contain scale-300"
          />

          {/* Divider Line */}
          <div className="w-2/3 border-t border-gray-400"></div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-[15px] font-semibold text-gray-200">
            <a href="/privacy-policy/" className="hover:text-[#a53000] transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-400 hidden sm:inline">|</span>
            <a href="/terms-of-service/" className="hover:text-[#a53000] transition-colors">
              Terms of Use
            </a>
            
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#2a2e36] text-center py-3">
        <p className="text-xs sm:text-[13px] text-gray-200">
          © {new Date().getFullYear()} IntentCept. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
