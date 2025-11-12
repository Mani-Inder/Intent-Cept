import Image from "next/image";


import Header from "./components/shared/Header";
import HeroSection from "./components/HeroSection";
import Integrations from "./components/Integrations";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import AgencySection from "./components/AgencySection";
import IntegrationsGrid from "./components/IntegrationsGrid";
import FAQSection from "./components/FAQSection";
import Footer from "./components/shared/Footer";
import Services from "./components/Services";


export const metadata = {
  title: "IntentCept | Intelligent Acquisition System",
  description:
    "IntentCept helps agencies identify, capture, and convert high-intent leads into qualified customers with AI-powered automation and analytics.",
  keywords: [
    "IntentCept",
    "Lead Generation",
    "AI Marketing",
    "Automation Platform",
    "Customer Acquisition",
  ],
  alternates: {
    canonical: "https://intentcept.vercel.app/",
  },
  openGraph: {
    title: "IntentCept | Intelligent Acquisition System",
    description:
      "Identify, capture, and convert high-intent leads into customers with IntentCept’s AI-powered automation platform.",
    url: "https://intentcept.vercel.app/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntentCept | Intelligent Acquisition System",
    description:
      "Discover how IntentCept transforms anonymous traffic into verified, high-intent leads.",
    images: ["/og-image.png"],
  },
};




export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Integrations />
      <HowItWorks />
      <WhyChooseUs />
      <Services/>
      <AgencySection />
      <IntegrationsGrid glass={true} />
      <FAQSection/>
      <Footer/>


    </main>
  );
}
