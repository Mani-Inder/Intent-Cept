// "use client";
import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

// app/terms-of-service/page.jsx
export const metadata = {
  title: "Terms of Service  | IntentCept",
  description:
    "Read IntentCept’s terms and conditions for using our services and platform.",
  keywords: [
    "IntentCept Terms of Service",
    "User Agreement",
    "Service Policy",
    "Software Usage Terms",
    "Agency Platform Agreement",
  ],
};

export default function TermsOfService() {
  return (
    <>
    <Header/>
    <main className="bg-white text-gray-900 font-sans px-4 sm:px-6 md:px-12 py-20">
      
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10">
          Last updated: <strong>November 12, 2025</strong>
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to <strong>IntentCept</strong>. These Terms of Service govern
          your use of our website, platform, and related services. By accessing
          or using our services, you agree to these terms.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          By using our platform, you confirm that you are at least 18 years old
          and have the authority to enter into this agreement. If you do not
          agree, you must not use our services.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          2. Use of the Platform
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          You agree to use our platform only for lawful purposes. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activity under your account.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          3. Payments and Subscriptions
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Some services require payment. You agree to provide accurate billing
          information and authorize us to charge your preferred payment method
          for recurring subscription fees unless canceled.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          4. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          All content, trademarks, and software within our platform are owned by
          IntentCept or its licensors. You may not copy, modify, or redistribute
          any materials without written permission.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          5. Termination
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We reserve the right to suspend or terminate accounts that violate
          these Terms or misuse the platform. Termination will not affect any
          outstanding payment obligations.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          IntentCept is not liable for indirect, incidental, or consequential
          damages resulting from your use or inability to use the platform.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          7. Changes to These Terms
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We may update these Terms periodically. The latest version will always
          be available on this page, and continued use implies acceptance of
          updates.
        </p>

        {/* Contact */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          8. Contact Us
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          For any questions regarding these Terms, please contact:
        </p>
        <p className="text-gray-800 font-medium mb-4">
          📧 legal@intentcept.com <br />
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
