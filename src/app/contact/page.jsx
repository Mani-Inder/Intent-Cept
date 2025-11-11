import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
// import ContactAddress from "../components/ContactAddress";
// import ContactTeam from "../components/ContactTeam";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div id="contact" className="Contact-form">
      <Header/>
        <ContactForm/> 
      <Footer />
    </div>
  );
}
