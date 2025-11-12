import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
// import ContactAddress from "../components/ContactAddress";
// import ContactTeam from "../components/ContactTeam";
import ContactForm from "../components/ContactForm";

// app/contact/page.jsx
export const metadata = {
  title: "Contact Us | IntentCept",
  description:
    "Reach out to the IntentCept team for demos, support, or partnership inquiries. We’re here to help you grow.",
  keywords: [
    "Contact IntentCept",
    "Book a Demo",
    "Customer Support",
    "Sales Inquiry",
    "Lead Generation Help",
  ],
  openGraph: {
    title: "Contact IntentCept",
    description:
      "Get in touch with IntentCept to start capturing better leads today.",
    url: "https://intentcept.vercel.app/contact",
    images: ["/og-image.png"],
  },
};


export default function ContactPage() {
  return (
    <div id="contact" className="Contact-form">
      <Header/>
        <ContactForm/> 
      <Footer />
    </div>
  );
}
