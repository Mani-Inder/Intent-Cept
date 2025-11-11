import React from "react";
import Header from "@/app/components/shared/Header";
import Footer from "@/app/components/shared/Footer";
import Integrations from "@/app/components/Integrations";
import FAQ from "@/app/components/enhance/FAQ";
import Hero from "@/app/components/enhance/Hero";
import IntegrationsGrid from "@/app/components/IntegrationsGrid";
import IdentifyReach from "@/app/components/enhance/IdentifyReach";
import HowItWorks from "@/app/components/enhance/HowItWorks";

export default function EnhanceSearchPage(){
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white">
        <Header />
        <Hero />
        <Integrations />
        <IdentifyReach />
        <HowItWorks/>
        <IntegrationsGrid/>
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}