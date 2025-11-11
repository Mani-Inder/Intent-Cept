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
