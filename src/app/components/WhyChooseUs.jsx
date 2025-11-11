// Option-1

// import React from "react";
// import {
//   Wrench,
//   CreditCard,
//   Infinity,
//   Headphones,
//   Share2,
//   Settings,
// } from "lucide-react";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: <Wrench className="w-8 h-8 text-[#a53000]" />,
//       title: "Fully White-labeled SAAS",
//       desc: "Launch your own branded platform with full control over customization and client experience.",
//     },
//     {
//       icon: <CreditCard className="w-8 h-8 text-[#a53000]" />,
//       title: "Pay Only For Contacts",
//       desc: "No subscriptions or hidden costs — pay only for the leads you generate, nothing more.",
//     },
//     {
//       icon: <Infinity className="w-8 h-8 text-[#a53000]" />,
//       title: "Unlimited Clients & Campaigns",
//       desc: "Grow your agency without limits. Manage endless clients and campaigns with ease.",
//     },
//     {
//       icon: <Headphones className="w-8 h-8 text-[#a53000]" />,
//       title: "Responsive, Reliable Support",
//       desc: "Access dedicated 24/7 expert support — we’re here whenever you need assistance.",
//     },
//     {
//       icon: <Share2 className="w-8 h-8 text-[#a53000]" />,
//       title: "Personalized Contact Flow",
//       desc: "Seamlessly route leads to your preferred CRMs, emails, or automation tools.",
//     },
//     {
//       icon: <Settings className="w-8 h-8 text-[#a53000]" />,
//       title: "Product Customization",
//       desc: "Tailor every feature to fit your agency’s workflow and operational needs.",
//     },
//   ];

//   return (
//     <section
//       id="why-us"
//       className="relative py-24 px-6 text-center bg-gradient-to-b from-white via-[#fff9f7] to-white overflow-hidden"
//     >
//       {/* Subtle background pattern effect */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(165,48,0,0.05),_transparent_60%)]"></div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900 mb-4 tracking-tight">
//           Why <span className="text-[#a53000]">Choose Us</span>
//         </h2>
//         <p className="text-[18px] text-gray-700 max-w-2xl mx-auto leading-relaxed mb-16">
//           With a fully white-labeled platform, seamless integrations, and
//           personalized support, we help your agency achieve more — with no
//           restrictions, no compromises.
//         </p>

//         {/* Feature Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {features.map((item, i) => (
//             <div
//               key={i}
//               className="group relative bg-white rounded-2xl border border-gray-100 p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#a53000]/30"
//             >
//               {/* Glow hover effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a53000]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//               {/* Icon container */}
//               <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#fff2ee] shadow-inner group-hover:scale-110 group-hover:bg-[#a53000]/10 transition-all duration-500">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-[21px] font-semibold text-gray-900 mt-6 mb-3 group-hover:text-[#a53000] transition-colors">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="text-[16px] text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16">
//           <a href="/book-demo/">
//             <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300 text-[17px]">
//               Get Started
//             </button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// Option -2 




//  Option-3

import React from "react";
import {
  Wrench,
  CreditCard,
  Infinity,
  Headphones,
  Share2,
  Settings,
} from "lucide-react";

export default function WhyChooseUs_B() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-[#a53000]" />,
      title: "Fully White-labeled SAAS",
      desc: "Launch your own branded platform with complete customization.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#a53000]" />,
      title: "Pay Only For Contacts",
      desc: "No hidden fees — just pay for the leads you generate.",
    },
    {
      icon: <Infinity className="w-8 h-8 text-[#a53000]" />,
      title: "Unlimited Clients & Campaigns",
      desc: "Manage as many clients and campaigns as you need — without limits.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-[#a53000]" />,
      title: "Responsive, Reliable Support",
      desc: "Get expert assistance anytime you need it.",
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#a53000]" />,
      title: "Personalized Contact Flow",
      desc: "Send leads directly to your preferred platform with webhooks.",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#a53000]" />,
      title: "Product Customization",
      desc: "Customize features to match your business needs.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 px-6 text-center bg-gradient-to-b from-white via-[#fff7f3] to-[#fff3ef] font-sans"
    >
      <h2 className="text-[44px] font-bold text-gray-900 mb-4 tracking-tight">
        Why <span className="text-[#a53000]">Choose Us</span>
      </h2>
      <p className="text-gray-700 mb-14 max-w-2xl mx-auto text-[18px] leading-relaxed">
        Built for agencies that demand both performance and beauty — our tools
        help you scale seamlessly while staying true to your brand.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl p-10 bg-white shadow-[0_8px_30px_rgba(165,48,0,0.07)] hover:shadow-[0_12px_35px_rgba(165,48,0,0.15)] transition-all duration-300 border border-transparent hover:border-[#a53000]/20"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto rounded-full bg-[#fff0ea] mb-6">
              {item.icon}
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-[17px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white px-10 py-3.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
