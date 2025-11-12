"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// app/page.jsx
export const metadata = {
  title: "IntentCept | Intelligent Acquisition System",
  description:
    "Identify, capture, and convert high-intent leads with IntentCept’s AI-powered acquisition system for agencies and marketers.",
  alternates: {
    canonical: "https://intentcept.vercel.app/",
  },
};


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm font-sans sticky top-0 z-[1000]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-8 relative">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/Logos/IntentCept.png"
            alt="IntentCept Logo"
            width={24}
            height={24}
            priority
            className="h-10 sm:h-12 w-auto object-contain scale-400"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-gray-800 font-semibold text-[15px] lg:text-[16px]">
          {/* About Dropdown */}
          <div className="relative group">
            <a href="/">
            <button className="hover:text-[#a53000] transition-colors">
              About
            </button>
            </a>
            
            <div className="absolute left-0 mt-3 w-48 rounded-lg bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <ul className="py-2 text-gray-800 text-sm">
                <li>
                  <a
                    href="#why-us"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <Link href="/pricing" className="hover:text-[#a53000] transition-colors">
            Pricing
          </Link>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <a href="/solutions/website-visitor-identifier">
                <button className="hover:text-[#a53000] transition-colors">
                  Solutions
                </button>
            </a>
            <div className="absolute left-0 mt-3 w-56 rounded-lg bg-white border border-gray-200 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-2 text-gray-800 text-sm">
                <li>
                  <Link
                    href="/solutions/website-visitor-identifier"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    Website Visitor Identifier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/enhance-search"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    Enhanced Search ID
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions/b2b-data"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-[#a53000]"
                  >
                    B2B Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <Link href="/contact" className="hover:text-[#a53000] transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA Button (Desktop Only) */}
        <a href="/book-demo/" className="hidden md:block">
          <button className="bg-[#a53000] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-sm hover:shadow-md transition-all duration-300">
            Book A Demo
          </button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md py-4 px-6 space-y-4">
          <Link href="/" className="block text-gray-800 hover:text-[#a53000]">
            Home
          </Link>
          <Link href="/pricing" className="block text-gray-800 hover:text-[#a53000]">
            Pricing
          </Link>
          <Link
            href="/solutions/website-visitor-identifier"
            className="block text-gray-800 hover:text-[#a53000]"
          >
            Solutions
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-[#a53000]">
            Contact
          </Link>
          <div className="pt-4">
            <a href="/book-demo/">
              <button className="w-full bg-[#a53000] text-white py-2 rounded-md font-semibold hover:bg-[#8f2800] transition-all duration-300" name="Ham-Burger">
                Book A Demo
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
