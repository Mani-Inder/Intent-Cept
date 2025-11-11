import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const team = [
    {
      name: "Daniel Swick",
      title: "Founder – CTO",
      email: "daniel@intentcept.com",
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
    <main className="font-sans text-gray-900 overflow-hidden">


      {/* Top Section — Contact Hero */}
      <section className="relative text-center py-24 px-6 bg-gradient-to-br from-white via-[#fff8f5] to-[#fdeee4] font-sans">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#BBC863]/10 blur-3xl rounded-full -z-10"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
          Let’s Start the <span className="text-[#a53000]">Conversation</span>
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Have a question, partnership idea, or just want to learn more about IntentCept?  
          We’d love to hear from you. Reach out below — we’ll get back quickly.
        </p>
      </section>

      

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {/* Email */}
          <div className="bg-[#fffaf8] border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-8 text-center">
            <Mail className="w-10 h-10 text-[#a53000] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-3">We respond within 24 hours.</p>
            <a
              href="mailto:support@intentcept.com"
              className="text-[#a53000] font-medium hover:underline"
            >
              support@intentcept.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#fffaf8] border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-8 text-center">
            <Phone className="w-10 h-10 text-[#a53000] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-3">Mon–Fri, 9:00AM–6:00PM EST</p>
            <a
              href="tel:+17405278020"
              className="text-[#a53000] font-medium hover:underline"
            >
              +1 (740) 527-8020
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-white via-[#fff8f5] to-[#fdeee4] text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Meet Our <span className="text-[#a53000]">Leadership</span>
        </h2>
        <p className="text-gray-700 mb-12 max-w-xl mx-auto">
          The team behind IntentCept — building tools that help agencies win more business with data-driven precision.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-[280px]"
            >
              <img
                src={person.img}
                alt={person.name}
                className="h-32 w-32 rounded-full object-cover border-4 border-[#a53000]/20 shadow-md mx-auto"
              />
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.title}</p>
              <div className="w-12 h-1 bg-[#a53000] mx-auto my-3 rounded-full"></div>
              <a
                href={`mailto:${person.email}`}
                className="text-sm text-[#a53000] hover:underline"
              >
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-white via-[#fff8f5] to-[#fdeee4] text-center">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#BBC863]/10 blur-3xl rounded-full -z-10"></div>

        <h2 className="text-4xl font-bold mb-4">
          Send Us a <span className="text-[#a53000]">Message</span>
        </h2>
        <p className="text-gray-700 mb-10">
          Whether it’s a demo request or a quick question — we’re ready to help.
        </p>

        <form className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-6 text-left">
          {[
            { type: "text", placeholder: "Full Name *" },
            { type: "email", placeholder: "Email Address *" },
            { type: "tel", placeholder: "Phone Number *" },
            { type: "text", placeholder: "Company Name" },
          ].map((input, i) => (
            <input
              key={i}
              type={input.type}
              placeholder={input.placeholder}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#a53000]/60 focus:border-[#a53000] outline-none transition-all duration-200"
              required
            />
          ))}

          <textarea
            rows="5"
            placeholder="Your Message..."
            className="md:col-span-2 w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#a53000]/60 focus:border-[#a53000] outline-none transition-all duration-200"
            required
          ></textarea>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#a53000] text-white font-semibold py-3.5 rounded-full shadow-md hover:bg-[#8f2800] hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      
    </main>
  );
}
