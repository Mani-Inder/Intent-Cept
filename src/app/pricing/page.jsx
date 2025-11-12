"use client"

import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import PricingHero from "../components/PricingHero";
import PricingPlans from "../components/PricingPlans";
import PricingFAQ from "../pricing/FAQPricing"; // reuse
import Integrations from "../components/Integrations";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import IntegrationsGrid from "../components/IntegrationsGrid";
import Services from "../components/Services";



export default function PricingPage() {
  return (
    <div  className="pricing">
        <Header />
        <div className="bg-white"> 
            <PricingHero/>
        </div> 
        <Integrations/>

        <PricingPlans />
        <HowItWorks/>
        <WhyChooseUs/>
        <IntegrationsGrid/>   
        <Services/>     
        <PricingFAQ />
      
      <Footer />
    </div>
  );
}
