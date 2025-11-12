import React from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import WebsiteVisitorHero from "@/app/components/solutions/WebsiteVisitorHero";
import MissedOpportunity from "@/app/components/solutions/MissedOpportunity";
import RevealContact from "@/app/components/solutions/RevealContact";
import HowItWorks from "@/app/components/solutions/HowItWorks";
import WebsiteVisitorFAQ from "@/app/components/solutions/WebsiteVisitorFAQ";
import IntegrationsGrid from "@/app/components/IntegrationsGrid";
import Integrations from "@/app/components/Integrations";

export const metadata = {
  title: "Website Visitor Identifier | IntentCept",
  description:
    "Reveal anonymous website visitors with IntentCept’s Exact Match technology. Identify real people, companies, and verified contacts — no cookies required.",
  keywords: [
    "Website Visitor Tracking",
    "Visitor Identification",
    "Lead Tracking",
    "IntentCept Exact Match",
    "Anonymous Visitor Reveal",
    "Cookieless Tracking",
    "Lead Intelligence Platform",
  ],
  openGraph: {
    title: "Website Visitor Identifier | IntentCept",
    description:
      "Identify and convert your website visitors into verified leads with IntentCept’s intelligent visitor tracking technology.",
    url: "https://intentcept.vercel.app/visitor",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Visitor Identifier | IntentCept",
    description:
      "Turn your anonymous traffic into verified leads. Discover who’s visiting your site in real-time with IntentCept.",
    images: ["/og-image.png"],
  },
};


export default function WebsiteVisitorPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <WebsiteVisitorHero />
        <Integrations/>
        <MissedOpportunity />
        <RevealContact />
        <HowItWorks />
        <IntegrationsGrid/>
        <WebsiteVisitorFAQ />
        <Footer />
      </main>
      
    </>
  );
}
