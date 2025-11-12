// "use client";
import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const team = [
    {
      name: "Daniel Swick",
      title: "Founder – CTO",
      email: "Daniel@intentcept.com",
      img: "/Contact-Team/daniel.png",
    },
    {
      name: "Casey Hamilton",
      title: "Founder – CSO",
      email: "casey@intentcept.com",
      img: "/Contact-Team/casey.png",
    },
  ];

  return (
    <main className="font-sans text-gray-900 bg-[#fafaff]">
      {/* Contact Title */}
      <section className="text-center py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact <span className="text-[#a53000]">US</span>
        </h2>
        <div className="w-16 h-[2px] bg-[#a53000] mx-auto mt-2"></div>
      </section>

      {/* Address Section */}
      <section className="text-center mb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">Address</h3>
        <div className="w-16 h-[2px] bg-[#a53000] mx-auto mb-8"></div>

        <div className="max-w-3xl mx-auto border border-[#a53000] rounded-md p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <div className="text-center md:text-left">
              <p className="font-semibold">@ Email Address</p>
              <p className="text-gray-600 text-sm">
                support@intentcept.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="text-center md:text-left">
              <p className="font-semibold">📞 Office Number</p>
              <p className="text-gray-600 text-sm">(740) 527-8020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-14">
          {team.map((person, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-32 h-32 rounded-full object-cover border border-gray-300 mb-4"
              />
              <h4 className="font-semibold text-gray-900">{person.name}</h4>
              <p className="text-gray-600 text-sm">{person.title}</p>
              <p className="text-gray-600 text-sm mt-2 flex items-center gap-1">
                <Mail className="w-4 h-4 text-[#a53000]" />
                <a
                  href={`mailto:${person.email}`}
                  className="text-[#a53000] hover:underline"
                >
                  {person.email}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="text-center pb-20">
        <h3 className="text-2xl font-bold mb-2">Have a Question?</h3>
        <div className="w-16 h-[2px] bg-[#a53000] mx-auto mb-8"></div>

        <form className="max-w-2xl mx-auto flex flex-col gap-4 px-6">
          <input
            type="text"
            placeholder="Full Name*"
            className="border border-gray-300 rounded-sm px-4 py-3 focus:border-[#a53000] outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="border border-gray-300 rounded-sm px-4 py-3 focus:border-[#a53000] outline-none"
            required
          />
          <input
            type="tel"
            placeholder="Phone*"
            className="border border-gray-300 rounded-sm px-4 py-3 focus:border-[#a53000] outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-sm px-4 py-3 focus:border-[#a53000] outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#a53000] text-white font-semibold py-3 rounded-sm hover:bg-[#8f2800] transition-all"
          >
            SEND!
          </button>
        </form>
      </section>
    </main>
  );
}
