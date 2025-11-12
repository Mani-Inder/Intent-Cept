// "use client";
import React from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import HeroB2B from "@/app/components/b2b-data/HeroB2B";
import FAQB2B from "@/app/components/b2b-data/FAQB2B";
import Integrations from "@/app/components/Integrations";
import IntegrationsGrid from "@/app/components/IntegrationsGrid";
import HowItWorks from "@/app/components/solutions/HowItWorks";
import B2BLeadDataFeatures from "@/app/components/B2b_Services";

export const metadata = {
  title: "B2B Data | IntentCept",
  description:
    "Access verified B2B data and decision-maker insights with IntentCept. Get real company leads, buying intent, and contact info updated in real time.",
  keywords: [
    "B2B Data",
    "IntentCept B2B Leads",
    "Business Contact Data",
    "Verified B2B Leads",
    "Company Insights",
    "B2B Sales Intelligence",
    "Lead Generation Platform",
  ],
  openGraph: {
    title: "B2B Data | IntentCept",
    description:
      "Get real-time B2B contact data and insights. Identify decision-makers, companies, and buying intent instantly.",
    url: "https://intentcept.vercel.app/b2b-data",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Data | IntentCept",
    description:
      "IntentCept delivers verified B2B contact and company data — real people, real intent, real results.",
    images: ["/og-image.png"],
  },
};


export default function B2BDataPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <HeroB2B />
      <Integrations/>
      <B2BLeadDataFeatures/>
      <HowItWorks/>
      <IntegrationsGrid/>
      <FAQB2B />
      <Footer />
    </div>
  );
}
