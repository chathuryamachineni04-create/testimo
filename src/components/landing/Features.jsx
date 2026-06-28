import React from "react";
import {
  FiMessageSquare,
  FiCpu,
  FiGrid,
  FiBarChart2,
  FiShare2,
  FiShield,
} from "react-icons/fi";

import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";

/**
 * Feature data
 * ----------------------------------------------------------
 * Stored outside the component so it isn't recreated
 * on every render.
 */
const FEATURES = [
  {
    title: "Collect Testimonials",
    description:
      "Collect text, video, and image testimonials through beautiful branded forms.",
    icon: FiMessageSquare,
  },
  {
    title: "AI Rewrite",
    description:
      "Improve grammar and readability using AI while preserving authenticity.",
    icon: FiCpu,
  },
  {
    title: "Widget Builder",
    description:
      "Create beautiful testimonial widgets with live customization.",
    icon: FiGrid,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Monitor testimonial engagement and conversion performance.",
    icon: FiBarChart2,
  },
  {
    title: "One Click Sharing",
    description:
      "Share testimonials instantly across websites and social media.",
    icon: FiShare2,
  },
  {
    title: "Secure Storage",
    description:
      "Enterprise-grade encryption keeps customer testimonials safe.",
    icon: FiShield,
  },
];

/**
 * Feature Card
 * ----------------------------------------------------------
 * Premium SaaS glassmorphism card.
 */
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-gray-100
        bg-white/70
        p-8
        shadow-[0_4px_20px_-8px_rgba(17,17,26,0.08)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#6C63FF]/20
        hover:shadow-[0_24px_40px_-16px_rgba(108,99,255,0.35)]
      "
    >
      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-gradient-to-br
          from-[#6C63FF]/20
          to-transparent
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-[#6C63FF]
          to-[#8B83FF]
          text-white
          shadow-[0_10px_24px_-8px_rgba(108,99,255,0.55)]
          transition-transform
          duration-300
          group-hover:scale-105
        "
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="relative mt-6 text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-relaxed text-gray-500">
        {description}
      </p>

      {/* Animated Accent Line */}
      <div className="relative mt-6 h-px w-full overflow-hidden bg-gray-100">
        <div
          className="
            h-full
            w-0
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#8B83FF]
            transition-all
            duration-500
            group-hover:w-full
          "
        />
      </div>
    </div>
  );
}

/**
 * Features Section
 * ----------------------------------------------------------
 * Displays the product's core capabilities.
 */
function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Features</Eyebrow>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything You Need to{" "}
          <span className="text-[#6C63FF]">
            Turn Happy Customers into Social Proof
          </span>
        </h2>

        <p className="mt-4 text-lg leading-relaxed text-gray-500">
          Collect authentic testimonials, enhance them with AI, organize
          them in one place, and showcase them beautifully to increase
          trust, credibility, and conversions.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.title}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
}

export default Features;