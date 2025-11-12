import React from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import Integrations from "@/app/components/Integrations";
import FAQ from "@/app/components/enhance/FAQ";
import Hero from "@/app/components/enhance/Hero";
import IntegrationsGrid from "@/app/components/IntegrationsGrid";
import IdentifyReach from "@/app/components/enhance/IdentifyReach";
import HowItWorks from "@/app/components/enhance/HowItWorks";
import LeadDataFeatures from "@/app/components/Enhanced_services";

export const metadata = {
  title: "Enhance Search | IntentCept",
  description:
    "Enhance your agency’s search intelligence with IntentCept. Discover high-intent users actively looking for your clients’ services — in real time.",
  keywords: [
    "Enhance Search",
    "Search Intelligence",
    "AI Search Tracking",
    "Intent Data",
    "High-Intent Users",
    "Marketing Automation",
    "Lead Capture Technology",
  ],
  openGraph: {
    title: "Enhance Search | IntentCept",
    description:
      "Find and target high-intent users searching for your clients’ services — IntentCept’s AI-powered search intelligence makes it possible.",
    url: "https://intentcept.vercel.app/enhance",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhance Search | IntentCept",
    description:
      "Supercharge your agency’s search campaigns with IntentCept — identify real users with real buying intent.",
    images: ["/og-image.png"],
  },
};


export default function EnhanceSearchPage(){
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white">
        <Header />
        <Hero />
        <Integrations />
        <IdentifyReach />
        <LeadDataFeatures/>
        <HowItWorks/>
        <IntegrationsGrid/>
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}