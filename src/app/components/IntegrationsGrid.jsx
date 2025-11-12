"use client";
import React from "react";
import Image from "next/image";

export default function IntegrationsGrid() {
  const integrations = [
    {
      icon: "/Integrations_logos/Lead.png",
      title: "LeadConnector",
      desc: "Sync and manage your leads effortlessly with LeadConnector. Streamline follow-ups and nurture prospects within your CRM.",
      link: "https://www.leadconnectorhq.com/",
    },
    {
      icon: "/Integrations_logos/zapier-icon.svg",
      title: "Zapier",
      desc: "Turn chaos into smooth operations by automating workflows yourself—no developers, no IT tickets, no delays. The only limit is your imagination.",
      link: "https://zapier.com/",
    },
    {
      icon: "/Integrations_logos/kartra.png",
      title: "Kartra",
      desc: "Connect your leads directly to Kartra’s all-in-one marketing platform. Automate campaigns, sales funnels, and customer interactions.",
      link: "https://kartra.com/",
    },
    {
      icon: "/Integrations_logos/mailbox.png",
      title: "MailBoxPower",
      desc: "Mailbox Power is the award-winning, all-in-one platform for automating client gifting & direct mail.",
      link: "https://go.mailboxpower.com/",
    },
    {
      icon: "/Integrations_logos/Click-Funnels.png",
      title: "ClickFunnels",
      desc: "Instantly direct leads into your ClickFunnels sales funnels. Optimize conversions and turn prospects into paying customers effortlessly.",
      link: "https://www.clickfunnels.com/",
    },
    {
      icon: "/Integrations_logos/webhooks.png",
      title: "Custom Webhook",
      desc: "Instantly send leads to any platform with our flexible webhook integration. Automate workflows and ensure real-time data transfer.",
      link: "https://zapier.com/apps/webhook/integrations",
    },
    {
      icon: "/Integrations_logos/Send-Grid.png",
      title: "SendGrid",
      desc: "SendGrid is a cloud-based email delivery platform that helps businesses manage and send both transactional and marketing emails efficiently.",
      link: "https://sendgrid.com/en-us",
    },
    
    {
      icon: "/Integrations_logos/make-color.svg",
      title: "Make",
      desc: "Make is a visual platform that allows users to automate workflows and connect various applications and services without needing to write code.",
      link: "https://www.make.com/en",
    },
  ];

  return (
    <section id="integrations" className="bg-[#fafaff] py-20 px-6 font-sans text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Integrations
      </h2>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        Connect your favorite tools and automate your workflows seamlessly.
      </p>

      {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-3">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:shadow-md transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#fff3ef] mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="object-contain"
                
             />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-3">
              {item.desc}
            </p>

            {/* Learn More */}
            <a
              href={item.link}
              className="text-[#a53000] font-medium hover:text-[#8f2800] text-[15px] inline-flex items-center"
            >
              Learn More <span className="ml-1">›</span>
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14">
        <a href="/book-demo/">
          <button className="bg-[#a53000] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#8f2800] transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </section>
  );
}
