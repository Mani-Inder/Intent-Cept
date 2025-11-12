// "use client";
import React from "react";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";


// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy  | IntentCept",
  description:
    "Learn how IntentCept collects, uses, and protects your data. Your privacy and security are our priority.",
  keywords: [
    "IntentCept Privacy Policy",
    "Data Protection",
    "User Privacy",
    "GDPR Compliance",
    "Data Security Policy",
  ],
};

export default function PrivacyPolicy() {
  return (
    <>
    <link rel="icon" href="/favicon.ico" />
<link rel="canonical" href="https://www.intentcept.com" />

    <Header/>
    <main className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10">
          Last updated: <strong>November 12, 2025</strong>
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          At <strong>IntentCept</strong>, your privacy is our top priority. This
          Privacy Policy explains how we collect, use, and safeguard your
          personal information when you use our platform, services, or website.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We collect information that you provide directly to us, such as when
          you register for an account, contact support, or complete a form. This
          may include your name, email, phone number, company details, and
          billing information.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We use your data to deliver and improve our services, process
          transactions, personalize your experience, and communicate important
          updates or marketing messages (where permitted).
        </p>

        {/* Section 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          3. Data Security
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We use secure servers and encryption to protect your data from
          unauthorized access, alteration, or disclosure. However, please note
          that no method of transmission over the internet is 100% secure.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          4. Sharing Your Information
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We never sell your personal information. We may share limited data
          with trusted service providers or partners who help us operate our
          services, under strict confidentiality agreements.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          5. Your Rights
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          You can request to access, correct, or delete your personal data at
          any time. You may also opt out of marketing communications through the
          unsubscribe link in our emails.
        </p>

        {/* Contact */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          6. Contact Us
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          If you have questions about this Privacy Policy or your data, please
          contact us at:
        </p>
        <p className="text-gray-800 font-medium mb-4">
          📧 support@intentcept.com <br />
          📍 123 Business Blvd, New York, NY 10001
        </p>

        <div className="mt-10">
          <a href="/" className="text-[#a53000] hover:underline font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}



