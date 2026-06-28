import React, { useState } from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import Button from "../common/Button";

// ==========================
// PRICING DATA
// ==========================
const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals getting started.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    isCustomPricing: false,
    isPopular: false,
    features: [
      "Collect testimonials",
      "Basic widget",
      "Email support",
      "Unlimited responses",
    ],
    buttonLabel: "Get Started",
    buttonVariant: "secondary",
  },
  {
    id: "pro",
    name: "Pro",
    description: "Built for growing teams that need more power.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    isCustomPricing: false,
    isPopular: true,
    features: [
      "Everything in Starter",
      "AI Rewrite",
      "Analytics",
      "Custom Branding",
      "Priority Support",
    ],
    buttonLabel: "Start Free Trial",
    buttonVariant: "primary",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organizations with custom requirements.",
    monthlyPrice: null,
    yearlyPrice: null,
    isCustomPricing: true,
    isPopular: false,
    features: [
      "Unlimited everything",
      "Team members",
      "Dedicated manager",
      "API access",
      "White label",
    ],
    buttonLabel: "Contact Sales",
    buttonVariant: "secondary",
  },
];

// ==========================
// PRICING TOGGLE COMPONENT
// ==========================
const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-14">
      <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md shadow-inner">
        {/* Monthly Option */}
        <button
          type="button"
          onClick={() => setIsYearly(false)}
          className={`relative z-10 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            !isYearly
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Monthly
        </button>

        {/* Yearly Option */}
        <button
          type="button"
          onClick={() => setIsYearly(true)}
          className={`relative z-10 flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
            isYearly
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }`}
        >
          Yearly
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full transition-colors duration-300 ${
              isYearly
                ? "bg-white/20 text-white"
                : "bg-[#6C63FF]/20 text-[#6C63FF]"
            }`}
          >
            Save 20%
          </span>
        </button>

        {/* Sliding Active Background */}
        <div
          className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8B7FFF] shadow-lg shadow-[#6C63FF]/30 transition-transform duration-300 ease-out ${
            isYearly ? "translate-x-full" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

// ==========================
// PRICING CARD COMPONENT
// ==========================
const PricingCard = ({ plan, isYearly }) => {
  const { name, description, monthlyPrice, yearlyPrice, isCustomPricing, isPopular, features, buttonLabel, buttonVariant } = plan;

  const displayPrice = isCustomPricing
    ? "Custom"
    : isYearly
    ? yearlyPrice
    : monthlyPrice;

  return (
    <div
      className={`relative flex flex-col w-full rounded-[24px] border backdrop-blur-xl transition-all duration-500 ease-out group ${
        isPopular
          ? "bg-white/[0.07] border-[#6C63FF]/50 shadow-[0_0_60px_-10px_rgba(108,99,255,0.45)] lg:scale-105 lg:hover:scale-[1.08] z-10"
          : "bg-white/[0.04] border-white/10 hover:border-[#6C63FF]/40 hover:shadow-[0_0_40px_-10px_rgba(108,99,255,0.3)]"
      } hover:-translate-y-2 p-8 lg:p-9`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <span className="absolute -top-3 right-6 px-4 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-[#6C63FF] to-[#9B8AFB] shadow-lg shadow-[#6C63FF]/40">
          Most Popular
        </span>
      )}

      {/* Plan Name & Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Price */}
      <div className="flex items-end gap-1 mb-8">
        {isCustomPricing ? (
          <span className="text-4xl font-bold text-white">Custom Pricing</span>
        ) : (
          <>
            <span className="text-4xl font-bold text-white">${displayPrice}</span>
            <span className="text-gray-400 text-sm mb-1">/month</span>
          </>
        )}
      </div>

      {/* CTA Button */}
      <Button
        variant={buttonVariant}
        className="w-full mb-8 transition-transform duration-300 group-hover:scale-[1.03]"
      >
        {buttonLabel}
        <FiArrowRight className="inline-block ml-2" />
      </Button>

      {/* Divider */}
      <div className="h-px w-full bg-white/10 mb-8" />

      {/* Features List */}
      <ul className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#6C63FF]/15 mt-0.5 shrink-0">
              <FiCheck className="text-[#6C63FF] text-xs" />
            </span>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ==========================
// MAIN PRICING SECTION
// ==========================
const Pricing = () => {
  // Controls whether yearly pricing is active
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="pricing">
      {/* Section Header */}
      <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
          Simple pricing for every team
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Choose the perfect plan for your business. Start free and upgrade
          anytime as your testimonial collection grows.
        </p>
      </div>

      {/* Monthly / Yearly Toggle */}
      <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />

      {/* Pricing Cards Wrapper with Background Glow */}
      <div className="relative">
        {/* Soft Purple Glow Background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[80%] bg-[#6C63FF]/20 blur-[120px] rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;