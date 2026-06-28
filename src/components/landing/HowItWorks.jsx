import React from "react";
import { FiSend, FiCpu, FiMonitor } from "react-icons/fi";

import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";

/**
 * Step Data
 * ----------------------------------------------------------
 * Stored outside the component so it isn't recreated
 * on every render.
 */
const STEPS = [
  {
    number: "01",
    icon: FiSend,
    title: "Share Your Testimonial Form",
    description:
      "Create a branded testimonial collection page and send it to your customers.",
  },
  {
    number: "02",
    icon: FiCpu,
    title: "Manage with AI",
    description:
      "Review, edit, organize, tag, and improve testimonials using AI assistance.",
  },
  {
    number: "03",
    icon: FiMonitor,
    title: "Embed Anywhere",
    description:
      "Display beautiful testimonial widgets on your website with a single copy-paste embed code.",
  },
];

/**
 * Step Card
 * ----------------------------------------------------------
 * Displays a single step in the workflow.
 */
function StepCard({ number, icon: Icon, title, description, isLast }) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      {/* Icon */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B83FF] text-white shadow-[0_12px_28px_-8px_rgba(108,99,255,0.5)] transition-all duration-300 hover:-translate-y-1 hover:scale-105">
        <Icon className="h-6 w-6" />

        <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#6C63FF] shadow-sm ring-1 ring-[#6C63FF]/20">
          {number}
        </span>
      </div>

      {/* Card */}
      <div className="group relative z-10 mt-6 w-full rounded-[24px] border border-gray-100 bg-white/70 p-6 shadow-[0_4px_20px_-8px_rgba(17,17,26,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#6C63FF]/20 hover:shadow-[0_24px_40px_-16px_rgba(108,99,255,0.35)]">
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          {description}
        </p>

        {/* Bottom Accent */}
        <div className="mt-6 h-px overflow-hidden bg-gray-100">
          <div className="h-full w-0 bg-gradient-to-r from-[#6C63FF] to-[#8B83FF] transition-all duration-500 group-hover:w-full" />
        </div>
      </div>

      {/* Mobile Connector */}
      {!isLast && (
        <div className="mt-4 h-10 w-px bg-gradient-to-b from-[#6C63FF]/60 to-transparent md:hidden" />
      )}
    </div>
  );
}

/**
 * How It Works Section
 * ----------------------------------------------------------
 */
function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>How It Works</Eyebrow>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          How Testimo Works
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-gray-500">
          Collect testimonials from your customers, organize them with AI,
          and showcase them beautifully on your website in just three
          simple steps.
        </p>
      </div>

      <div className="relative mt-16 flex flex-col gap-10 md:flex-row md:items-start md:gap-8">
        {/* Desktop Connector */}
        <div className="absolute left-[16.5%] right-[16.5%] top-7 hidden h-px bg-gradient-to-r from-[#6C63FF]/10 via-[#6C63FF]/50 to-[#6C63FF]/10 md:block" />

        {STEPS.map((step, index) => (
          <StepCard
            key={step.number}
            {...step}
            isLast={index === STEPS.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}

export default HowItWorks;