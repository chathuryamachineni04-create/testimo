import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";

// ==========================
// FAQ DATA
// ==========================
const FAQ_DATA = [
  {
    id: 1,
    question: "What is Testimo?",
    answer:
      "Testimo is a testimonial management platform that helps you collect, organize, and showcase customer testimonials in text and video format. It makes it easy to build social proof and display it beautifully on your website.",
  },
  {
    id: 2,
    question: "Can I collect video testimonials?",
    answer:
      "Yes! Testimo supports both text and video testimonials. Customers can record short video reviews directly from their browser or mobile device, and you can embed them anywhere on your site.",
  },
  {
    id: 3,
    question: "Is there a free plan?",
    answer:
      "Absolutely. Our Starter plan is completely free and includes unlimited responses, a basic widget, and email support — perfect for getting started with testimonial collection.",
  },
  {
    id: 4,
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no hidden fees or cancellation charges. You'll continue to have access until the end of your current billing cycle.",
  },
  {
    id: 5,
    question: "Do you offer custom branding?",
    answer:
      "Yes, our Pro and Enterprise plans include custom branding options, allowing you to match the testimonial widgets to your brand's colors, fonts, and overall style.",
  },
  {
    id: 6,
    question: "Is my customer data secure?",
    answer:
      "Security is a top priority at Testimo. All data is encrypted in transit and at rest, and we follow industry-standard best practices to keep your customer information safe.",
  },
];

// ==========================
// FAQ ITEM COMPONENT
// ==========================
const FAQItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`group rounded-[24px] border backdrop-blur-xl transition-all duration-300 ease-out shadow-sm hover:-translate-y-1 hover:shadow-xl  ${
        isOpen
          ? "bg-[#6C63FF]/[0.05] border-[#6C63FF]/50 shadow-[0_8px_30px_-10px_rgba(108,99,255,0.25)]"
          : "bg-white/70 border-gray-200 hover:border-[#6C63FF]/40"
      }`}
    >
      {/* Question Row */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex items-center justify-between w-full text-left px-6 md:px-8 py-5 md:py-6 gap-4"
      >
        <span
          className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
            isOpen ? "text-[#6C63FF]" : "text-gray-800"
          }`}
        >
          {item.question}
        </span>

        {/* Icon Wrapper */}
        <span
          className={`flex items-center justify-center w-9 h-9 rounded-full shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-[#6C63FF] text-white rotate-180"
              : "bg-gray-100 text-gray-600 group-hover:bg-[#6C63FF]/10 group-hover:text-[#6C63FF]"
          }`}
        >
          {isOpen ? (
            <FiMinus className="text-base transition-transform duration-300" />
          ) : (
            <FiPlus className="text-base transition-transform duration-300" />
          )}
        </span>
      </button>

      {/* Answer Panel - animated height & opacity */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 md:px-8 pb-5 md:pb-6 text-sm md:text-base text-gray-500 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

// ==========================
// MAIN FAQ SECTION
// ==========================
const FAQ = () => {
  // Tracks which FAQ item is currently open (only one at a time)
  const [openId, setOpenId] = useState(null);

  // Toggles the clicked item; closes it if already open
  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Section id="faq">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-5 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          Everything you need to know about Testimo.
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-4 max-w-[900px] w-full mx-auto px-4 md:px-0">
        {FAQ_DATA.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </Section>
  );
};
export default FAQ;