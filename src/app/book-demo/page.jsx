import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import BookDemoPage from "./book-demo-form";
import FAQ from "../components/enhance/FAQ";
import FAQSection from "../components/FAQSection";
import IntegrationsGrid from "../components/IntegrationsGrid";
import PricingSection from "../components/PricingPlans";

export default function PricingPage() {
  return (
        <>
        <Header/>
        <BookDemoPage/>
        <PricingSection/>
        <IntegrationsGrid/>
        <FAQSection/>
        <Footer/>
        </>
  );
}