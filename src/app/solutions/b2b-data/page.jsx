"use client";
import React from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import HeroB2B from "@/app/components/b2b-data/HeroB2B";
import FAQB2B from "@/app/components/b2b-data/FAQB2B";
import Integrations from "@/app/components/Integrations";
import IntegrationsGrid from "@/app/components/IntegrationsGrid";
import HowItWorks from "@/app/components/solutions/HowItWorks";

export default function B2BDataPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <HeroB2B />
      <Integrations/>
      <HowItWorks/>
      <IntegrationsGrid/>
      <FAQB2B />
      <Footer />
    </div>
  );
}
