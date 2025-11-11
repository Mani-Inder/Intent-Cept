import React from "react";

export default function MissedOpportunity() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff9f7] to-white py-16 px-6 text-center overflow-hidden font-sans">
      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,48,0,0.08),_transparent_70%)] -z-10"></div>

      {/* Main Card */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-[0_8px_25px_rgba(165,48,0,0.1)] transition-all duration-300 hover:scale-[1.01]">
        
        {/* Headline */}
        <h2 className="text-[30px] md:text-[36px] font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          You’re Losing Leads You Never Knew You Had.
        </h2>

        {/* Subheading */}
        <p className="text-gray-700 text-[16px] md:text-[17px] max-w-xl mx-auto mb-6 leading-relaxed">
          Every day, real buyers visit your site — and disappear without a trace.  
          Analytics tell you <em>how many</em>. IntentCept tells you <strong>who</strong>.
        </p>

        {/* Divider */}
        <div className="w-20 h-[3px] bg-[#a53000] mx-auto mb-8 rounded-full"></div>

        {/* Body Copy */}
        <p className="text-gray-700 text-[16px] md:text-[17px] leading-relaxed max-w-2xl mx-auto">
          Traditional tools count visits, but not interest.  
          With <strong>IntentCept’s cookieless visitor ID</strong>, uncover the companies and
          decision-makers behind every visit — instantly, ethically, and effortlessly.
        </p>

        {/* Punchline */}
        <p className="text-[17px] md:text-[18px] text-[#a53000] font-semibold mt-8">
          Stop losing invisible leads. Start capturing opportunity.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a href="/book-demo/">
            <button className="bg-[#a53000] text-white px-8 py-3 rounded-full font-semibold text-[16px] hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
              Reveal My Hidden Leads
            </button>
          </a>
        </div>
      </div>

      {/* Subtle Glows */}
      <div className="absolute top-16 left-8 w-52 h-52 bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-16 right-8 w-52 h-52 bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>
    </section>
  );
}
