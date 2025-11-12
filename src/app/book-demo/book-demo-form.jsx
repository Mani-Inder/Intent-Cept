
import React from "react";
import Image from "next/image";

export default function BookDemoPage() {
  const founders = [
    {
      name: "Daniel Swick",
      title: "Founder – CTO",
      img: "/Contact-Team/daniel.png",
    },
    {
      name: "Casey Hamilton",
      title: "Founder – CSO",
      img: "/Contact-Team/casey.png",
    },
  ];

  return (
    <section className="bg-[#fafaff] py-16 md:py-20 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="text-left">
          <button className="text-[12px] sm:text-[13px] font-medium bg-[#f0f3ff] text-[#1a1a1a] px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            SEE EXACT MATCH IN ACTION
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4">
            Book Your <span className="text-[#a53000]">Free Demo</span> — Not A
            Sales Pitch
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-lg">
            Book a personalized demo with our team. We’ll walk you through how
            Exact Match works, answer your questions, and show how it can
            support your agency’s growth.
          </p>

          {/* Founders */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-start sm:gap-16 md:gap-20 gap-8">
            {founders.map((person, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center sm:text-left"
              >
                <Image
                  src={person.img}
                  alt={person.name}
                  width={50}
                  height={100}
                  quality={80}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-2"
                  priority
                />
                <h4 className="font-semibold text-gray-900 text-[15px] sm:text-[16px]">
                  {person.name}
                </h4>
                <p className="text-gray-600 text-[13px] sm:text-[14px]">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — FORM */}
        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 sm:p-8">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full text-gray-900 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter Your Name"
                className="w-full text-gray-900 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
                required
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Name of Business *
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full text-gray-900 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
                required
              />
            </div>

            {/* Monthly Income */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                What is the monthly income of your agency? *
              </label>
              <select
                className="w-full text-gray-800 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
                required
              >
                <option value="">Please select option</option>
                <option value="below10k">Below $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k+">$100,000+</option>
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number "
                className="w-full text-gray-900 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
                required
              />
            </div>

            {/* Referral */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Referral Source
              </label>
              <input
                type="text"
                placeholder="Who's Referal"
                className="w-full text-gray-900 border border-gray-300 rounded-md px-4 py-2.5 focus:border-[#a53000] outline-none"
              />
            </div>

            {/* Legal Notice */}
            <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
              By providing a telephone number and submitting the form, you
              consent to be contacted by SMS. Message & data rates may apply.
              Reply STOP to opt out.
            </p>

            {/* Policy Links */}
            <p className="text-xs sm:text-[13px] text-gray-500 mt-2">
              <a
                href="/privacy-policy/"
                className="text-[#a53000] hover:underline mr-2 font-medium"
              >
                Privacy Policy
              </a>
              |
              <a
                href="/terms-of-service/"
                className="text-[#a53000] hover:underline ml-2 font-medium"
              >
                Terms of Service
              </a>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#a53000] text-white font-semibold py-3 sm:py-3.5 rounded-md hover:bg-[#8f2800] transition-all duration-300 mt-4 text-sm sm:text-base"
            >
              Book A Demo Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
