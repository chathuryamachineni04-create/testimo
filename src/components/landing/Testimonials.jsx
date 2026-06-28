import React from "react";
import { FiStar, FiCheckCircle } from "react-icons/fi";
import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";

/**
 * Testimonial Data
 */
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "Brightly Co.",
    initials: "SJ",
    avatarColor: "from-[#6C63FF] to-[#8B83FF]",
    quote:
      "Testimo completely changed how we collect feedback. Setup took minutes and the widgets look incredible on our site.",
  },
  {
    name: "David Miller",
    company: "Northgate Studio",
    initials: "DM",
    avatarColor: "from-amber-400 to-orange-400",
    quote:
      "Our landing page conversions improved almost overnight after we started showcasing testimonials with Testimo.",
  },
  {
    name: "Sophia Lee",
    company: "Lumen Labs",
    initials: "SL",
    avatarColor: "from-emerald-400 to-teal-400",
    quote:
      "The branded collection forms feel like a natural part of our product. Customers actually enjoy leaving feedback now.",
  },
  {
    name: "Michael Brown",
    company: "Forge Analytics",
    initials: "MB",
    avatarColor: "from-sky-400 to-blue-400",
    quote:
      "We finally have one place to manage every testimonial instead of digging through emails and screenshots.",
  },
  {
    name: "Emma Wilson",
    company: "Driftwood Goods",
    initials: "EW",
    avatarColor: "from-pink-400 to-rose-400",
    quote:
      "Embedding the widget took less than five minutes and it already matches our brand perfectly.",
  },
  {
    name: "Alex Carter",
    company: "Vantage Build",
    initials: "AC",
    avatarColor: "from-violet-400 to-purple-400",
    quote:
      "Testimo gave our small team the kind of social proof we used to think only larger companies could pull off.",
  },
];

function TestimonialCard({
  name,
  company,
  initials,
  avatarColor,
  quote,
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white/70 p-7 shadow-[0_4px_20px_-8px_rgba(17,17,26,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#6C63FF]/20 hover:shadow-[0_24px_40px_-16px_rgba(108,99,255,0.35)]">

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#6C63FF]/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Rating */}
      <div className="relative flex items-center justify-between">
        <div className="flex gap-0.5 text-[#6C63FF]">
          {Array.from({ length: 5 }).map((_, index) => (
            <FiStar
              key={index}
              className="h-4 w-4 fill-current"
            />
          ))}
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
          <FiCheckCircle className="h-3.5 w-3.5" />
          Verified
        </span>
      </div>

      {/* Quote */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${avatarColor} text-sm font-semibold text-white`}
        >
          {initials}
        </span>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            {name}
          </p>

          <p className="text-xs text-gray-500">
            {company}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="mt-6 h-px overflow-hidden bg-gray-100">
        <div className="h-full w-0 bg-gradient-to-r from-[#6C63FF] to-[#8B83FF] transition-all duration-500 group-hover:w-full" />
      </div>
    </div>
  );
}
function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Testimonials</Eyebrow>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Loved by Founders, Freelancers & Growing Businesses
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-gray-500">
          Discover how founders, freelancers, agencies, and growing
          businesses use Testimo to collect authentic testimonials,
          build trust, and increase conversions.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;