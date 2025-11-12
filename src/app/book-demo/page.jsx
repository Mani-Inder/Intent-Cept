import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import BookDemoPage from "./book-demo-form";
import FAQ from "../components/enhance/FAQ";
import FAQSection from "../components/FAQSection";
import IntegrationsGrid from "../components/IntegrationsGrid";
import PricingSection from "../components/PricingPlans";

export const metadata = {
  title: "Book a Demo | IntentCept",
  description:
    "Book a personalized IntentCept demo — see how our intelligent acquisition system helps agencies identify, capture, and convert high-intent leads effortlessly.",
  keywords: [
    "Book a Demo",
    "IntentCept Demo",
    "Lead Generation Demo",
    "AI Marketing Demo",
    "Agency Growth Tools",
    "High-Intent Leads",
    "Sales Automation Platform",
  ],
  openGraph: {
    title: "Book a Demo | IntentCept",
    description:
      "Get a live walkthrough of the IntentCept Intelligent Acquisition System — discover how to identify and convert high-intent leads.",
    url: "https://intentcept.vercel.app/book-demo",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo | IntentCept",
    description:
      "See IntentCept in action — book your free demo today and discover the power of AI-driven lead acquisition.",
    images: ["/og-image.png"],
  },
};


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