import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100 font-sans sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-8 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              src="/Logos/IntentCept.png"
              alt="IntentCept Logo"
              className="h-12 w-auto object-contain scale-400"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-16 text-gray-800 font-semibold text-[16px]">
          {/* About with dropdown */}
          <div className="relative group">
            <a href="/">
              <button className="relative hover:text-orange-700 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
                About
              </button>
            </a>

            {/* Elegant Dropdown */}
            <div className="absolute left-0 mt-3 w-52 rounded-2xl backdrop-blur-md bg-white/70 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <ul className="py-3 text-gray-800">
                <li>
                  <a
                    href="#why-us"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <a
            href="/pricing"
            className="relative inline-block hover:text-orange-700 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Pricing
          </a>

          {/* Solutions with dropdown */}
          <div className="relative group">
            <a href="/solutions/website-visitor-identifier">
              <button className="relative hover:text-orange-700 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full">
                Solutions
              </button>
            </a>

            <div className="absolute left-0 mt-3 w-60 rounded-2xl backdrop-blur-md bg-white/70 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <ul className="py-3 text-gray-800">
                <li>
                  <Link
                    href="/solutions/website-visitor-identifier"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    Website Visitor Identifier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/enhance-search"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    Enhanced Search ID
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/b2b-data"
                    className="block px-5 py-2.5 hover:text-orange-700 hover:bg-white/40 transition-all duration-200 rounded-lg"
                  >
                    B2B Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="relative inline-block hover:text-orange-700 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-orange-700 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact Us
          </Link>
        </nav>

        {/* Book Demo Button */}
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
            Book A Demo
          </button>
        </a>
      </div>
    </header>
  );
}
