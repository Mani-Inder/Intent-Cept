'use client';
import React , {useEffect , useState} from "react";
import Image from "next/image";

const logos = [
  "Stripe.svg",
  "Google.png",
  "sendgrid.svg",
  "zapier.svg",
  "HighLevel.png",
  "Kartra.svg",
  "clickfunnels.svg",
  "twilio.svg",
  "MailBox.png",
  "business-google.svg"
];

export default function Integrations() {
  // Duplicate array to create continuous loop
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) return null; // Prevents SSR mismatch



  const allLogos = [...logos, ...logos];

  return (
    <section   className="py-16 text-center bg-white relative overflow-hidden font-sans">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl  font-bold text-gray-800 mb-10 tracking-relaxed">
       <span className="text-4xl md:text-5xl text-[#a53000]">Integrate</span> with your <span className="text-[#a53000]">tools</span> 
      </h2>


      {/* Left and right fade gradient */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling container */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center gap-15 mt-10 ">
          {allLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <Image
                src={`/Logos/${logo}`}
                alt={logo.replace(/\.\w+$/, "")}
                width={80}
                height={35}
                priority
                className="h-8 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />

            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
