import React from "react";
import { Link } from "react-router-dom";
import Section from "../common/Section";
import Button from "../common/Button";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
// ==========================
// CTA SECTION
// ==========================
const CTA = () => {
  return (
    <Section id="cta">
      {/* Outer wrapper for decorative glow + floating elements */}
      <div className="relative max-w-[1100px] mx-auto">
        {/* Background Glow Behind Card */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[70%] bg-[#6C63FF]/20 blur-[120px] rounded-full" />
        </div>

        {/* Floating Decorative Glass Circles */}
        <div className="pointer-events-none absolute -top-10 -left-8 w-24 h-24 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hidden md:block" />
        <div className="pointer-events-none absolute -bottom-8 -right-6 w-32 h-32 rounded-full bg-[#6C63FF]/10 backdrop-blur-xl border border-white/40 shadow-lg hidden md:block" />
        <div className="pointer-events-none absolute top-1/2 -right-12 w-16 h-16 rounded-full bg-white/30 backdrop-blur-xl border border-white/50 shadow-md hidden lg:block" />

        {/* CTA Card */}
        <div className="relative rounded-[32px] border border-gray-200 bg-white/70 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(108,99,255,0.35)] px-6 sm:px-10 md:px-16 py-14 md:py-20 flex flex-col items-center text-center overflow-hidden">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-[#6C63FF] bg-[#6C63FF]/10 border border-[#6C63FF]/20 mb-6">
            Ready to Get Started?
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mb-5">
            Start Collecting Testimonials That Convert
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Join thousands of businesses using Testimo to build trust,
            increase conversions, and showcase authentic customer stories.
          </p>

          {/* Buttons */}
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
  <Link to="/submit" className="w-full sm:w-auto">
    <Button
      variant="primary"
      className="w-full transition-transform duration-300 hover:scale-[1.03]"
    >
      Start Free Trial
      <FiArrowRight className="ml-2" />
    </Button>
  </Link>

  <Link to="/contact" className="w-full sm:w-auto">
    <Button
      variant="secondary"
      className="w-full transition-transform duration-300 hover:scale-[1.03]"
    >
      <FiMessageCircle className="mr-2" />
      Contact Sales
    </Button>
  </Link>
</div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;