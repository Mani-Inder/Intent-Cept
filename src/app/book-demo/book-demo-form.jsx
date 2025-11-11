"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function BookDemoMultiStep() {
  const steps = [
    { label: "Full Name", name: "name", type: "text", placeholder: "John Doe" },
    { label: "Email Address", name: "email", type: "email", placeholder: "you@company.com" },
    { label: "Company Name", name: "business", type: "text", placeholder: "Your Company" },
    { label: "Phone Number", name: "phone", type: "tel", placeholder: "123-456-7890" },
    {
      label: "Monthly Agency Income",
      name: "income",
      type: "select",
      options: ["Below $10,000", "$10,000 - $50,000", "$50,000 - $100,000", "$100,000+"],
    },
    { label: "Referral Source", name: "referral", type: "text", placeholder: "How did you hear about us?" },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = steps.length;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const nextStep = () => currentStep < totalSteps - 1 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-[#fff8f5] to-[#fde8dd] overflow-hidden font-sans px-6 py-20 font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(165,48,0,0.1),_transparent_70%)] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#a53000]/10 blur-3xl rounded-full -z-10"></div>

      <div className="w-full max-w-lg bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl p-10 text-center relative z-10">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Book Your <span className="text-[#a53000]">Free Demo</span>
              </h1>
              <p className="text-gray-600 text-[16px] mb-8">
                Let’s learn more about you before we get started.
              </p>

              {/* Progress Dots */}
              <div className="flex justify-center mb-8">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? "bg-[#a53000] w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Form Animation */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-5"
                  >
                    <label className="block text-left text-sm font-medium text-gray-800 mb-1">
                      {steps[currentStep].label}
                    </label>

                    {steps[currentStep].type === "select" ? (
                      <select
                        name={steps[currentStep].name}
                        value={formData[steps[currentStep].name] || ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#a53000]/60 focus:border-[#a53000] outline-none transition-all duration-200"
                      >
                        <option value="">Select an option</option>
                        {steps[currentStep].options.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={steps[currentStep].type}
                        name={steps[currentStep].name}
                        value={formData[steps[currentStep].name] || ""}
                        onChange={handleChange}
                        placeholder={steps[currentStep].placeholder}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#a53000]/60 focus:border-[#a53000] outline-none transition-all duration-200 autofill:bg-white autofill:text-gray-900"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-10">
                  {currentStep > 0 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-gray-600 font-medium hover:text-[#a53000] transition"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < totalSteps - 1 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#a53000] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-[#a53000] text-white px-8 py-2.5 rounded-full font-semibold hover:bg-[#8f2800] shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 py-10"
            >
              <CheckCircle className="w-16 h-16 text-[#a53000]" />
              <h2 className="text-2xl font-semibold text-gray-900">
                Demo Request Received 🎉
              </h2>
              <p className="text-gray-600 max-w-sm">
                Thank you for booking a demo! Our team will reach out shortly to schedule your personalized walkthrough.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-[#a53000] text-white px-6 py-2 rounded-full font-medium hover:bg-[#8f2800] transition"
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
