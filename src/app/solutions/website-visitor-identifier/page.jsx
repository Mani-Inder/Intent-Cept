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
