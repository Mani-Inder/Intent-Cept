import React from "react";
import {
  Mail,
  Zap,
  Link2,
  Cloud,
  Workflow,
  Send,
  Printer,
  Settings,
  Repeat,
} from "lucide-react";
import Image from "next/image";

export default function IntegrationsGrid({ glass = false }) {
  const integrations = [
    {
      icon: ( <img
            src="Integrations_logos/Lead.png"
            alt="LeadConnector"
            width={30}
            height={30}
      />
    ),
      title: "LeadConnector",
      desc: "Sync and manage your leads effortlessly with LeadConnector. Streamline follow-ups and nurture prospects within your CRM.",
      link: "https://www.leadconnectorhq.com/",
    },
    {
      icon: ( <Image 
            src="Integrations_logos/zapier-icon.svg"
            alt="Zapier"
            width={30}
            height={30}
      />
    ),
      title: "Zapier",
      desc: "Automate workflows across apps and streamline your processes. Save hours with smart, trigger-based automation.",

      link: "https://zapier.com/",
    },
    {
      icon: ( <img
            src="Integrations_logos/kartra.png"
            alt="Kartra"
            width={30}
            height={30}
      />
    ),
      title: "Kartra",
      desc: "Connect leads directly to Kartra’s all-in-one marketing suite. Manage campaigns, sales funnels, and customer journeys.",
      link: "https://www.kartra.com/",
    },
    {
      icon: ( <Image 
            src="Integrations_logos/mailbox.svg"
            alt="MailBox Power"
            width={30}
            height={30}
      />
    ),
      title: "MailBoxPower",
      desc: "Mailbox Power automates client gifting and direct mail to make nurturing relationships simple and memorable.",
      link: "https://www.mailboxpower.com/",
    },
    {
      icon: ( <img
            src="Integrations_logos/Click-Funnels.png"
            alt="Click-Funnels"
            width={30}
            height={30}
      />
    ),
      title: "ClickFunnels",
      desc: "Send leads directly into your ClickFunnels pipelines and optimize your conversions without manual setup.",
      link: "https://www.clickfunnels.com/",
    },
    {
      icon: ( <img
            src="Integrations_logos/Send-Grid.png"
            alt="SendGrid"
            width={100}
            height={100}
      />
    ),
      title: "SendGrid",
      desc: "Send transactional or marketing emails through SendGrid’s reliable cloud-based email delivery platform.",
      link: "https://sendgrid.com/",
    },
    {
      icon: ( <img
            src="Integrations_logos/Quick-Print-Studio.png"
            alt="QuickStudio"
            width={80}
            height={80}
      />
    ),
      title: "QuickPrintStudio",
      desc: "Automate printing and delivery with QuickPrint — ideal for branded mailers and client communications.",
      link: "#",
    },
    {
      icon: ( <Image 
            src="Integrations_logos/make-color.svg"
            alt="Zapier"
            width={30}
            height={30}
      />
    ),
      title: "Make",
      desc: "Visual workflow builder that lets you automate and connect apps without any coding knowledge.",
      link: "https://www.make.com/",
    },
  ];

  // Dynamic card style
  const cardStyle = glass
    ? "group rounded-2xl p-8 text-left bg-white/30 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.1)] hover:shadow-[0_8px_40px_rgba(31,38,135,0.15)] transition-all duration-300"
    : "group rounded-2xl p-8 text-left bg-white border border-gray-100 shadow-sm hover:shadow-[0_12px_35px_rgba(165,48,0,0.1)] hover:border-[#a53000]/30 transition-all duration-300";

  return (
    <section
      id="integrations"
      className="py-24 px-6 text-center relative bg-gradient-to-b from-white via-[#fff8f6] to-white overflow-hidden font-sans"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(165,48,0,0.07),_transparent_60%)] -z-10"></div>

      {/* Heading */}
      <h2 className="text-[42px] md:text-[50px] font-bold text-gray-900 mb-4 tracking-tight">
        Connect, Automate, <span className="text-[#a53000]">Grow Smarter</span>
      </h2>
      <p className="text-gray-700 mb-14 max-w-2xl mx-auto text-[18px] leading-relaxed">
        Integrate your agency workflows with powerful marketing and automation
        tools. Connect once — automate forever.
      </p>

      {/* Integration Cards */}
      <div className="  grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {integrations.map((item, i) => (
          <div key={i} className={cardStyle}>
            <div
              className={`bg-[#fff8f6] inline-flex items-center justify-center w-14 h-14 rounded-full ${item.color} mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
            >
              {item.icon}
            </div>
            <h3 className="text-[22px] font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-[18px] mb-3">
              {item.desc}
            </p>

            {/* Simple Text Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a53000] font-medium  hover:text-[#8f2800] transition-colors duration-200"
              >
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-20">
        <a
          href="/book-demo/"
          className="inline-block bg-[#a53000] hover:bg-[#8f2800] text-white px-8 py-3 rounded-full font-semibold text-[17px] shadow-md hover:shadow-lg transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
