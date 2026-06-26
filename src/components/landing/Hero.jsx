import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiPlay,
  FiStar,
  FiMessageSquare,
} from "react-icons/fi";

import Section from "../common/Section";
import Eyebrow from "../common/Eyebrow";
import Button from "../common/Button";

/**
 * Dashboard Illustration
 * --------------------------------------------------------
 * Tailwind-only dashboard mockup for the Hero section.
 */

function DashboardIllustration() {
  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-[#6C63FF]/15 blur-3xl" />

      <div className="rounded-[12px] border border-white/40 bg-white/60 p-4 shadow-[0_20px_50px_-12px_rgba(17,17,26,0.2)] backdrop-blur-xl">
        {/* Browser Bar */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

          <span className="ml-3 text-xs font-medium text-gray-400">
            app.testimo.com/dashboard
          </span>
        </div>

        {/* Stats */}
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          {[
            {
              label: "Total Testimonials",
              value: "1,248",
            },
            {
              label: "Featured",
              value: "86",
            },
            {
              label: "Average Rating",
              value: "4.9",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-xl border border-white/50 bg-white/70 p-3 backdrop-blur-md"
            >
              <p className="text-xs text-gray-500">
                {card.label}
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-900">
                {card.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="mt-4 flex items-end gap-2 rounded-xl border border-white/50 bg-white/60 p-4 backdrop-blur-md">
          {[40, 60, 50, 80, 65, 95, 75].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t-md bg-[#6C63FF]/70"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>

        {/* Recent Testimonial */}
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/50 bg-white/70 p-3 backdrop-blur-md">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6C63FF]/10 font-semibold text-[#6C63FF]">
            AK
          </span>

          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">
              Aisha K.
            </h4>

            <div className="flex text-[#6C63FF]">
              {[...Array(5)].map((_, index) => (
                <FiStar
                  key={index}
                  className="h-3 w-3 fill-current"
                />
              ))}
            </div>
          </div>

          <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            Published
          </span>
        </div>
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-6 -left-6 hidden items-center gap-2 rounded-xl border border-white/50 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
        <FiMessageSquare className="text-[#6C63FF]" />

        <span className="text-xs font-semibold text-gray-700">
          New testimonial received
        </span>
      </div>
    </div>
  );
}

/**
 * Hero Section
 */

function Hero() {
  return (
    <Section containerClassName="grid items-center gap-12 lg:grid-cols-2">
      {/* Left */}
      <div>
        <Eyebrow>
          Trusted by Growing Teams
        </Eyebrow>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.4rem]">
          Collect Customer Testimonials That{" "}
          <span className="text-[#6C63FF]">
            Build Trust
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
          Collect, organize, and showcase authentic customer
          testimonials with AI-powered insights. Build
          credibility and convert more visitors into customers.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/submit">
            <Button>
              Get Started
              <FiArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Button
            variant="secondary"
            onClick={() =>
              alert("Demo video coming soon!")
            }
          >
            <FiPlay className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          No credit card required • Free 14-day trial
        </p>
      </div>

      {/* Right */}
      <DashboardIllustration />
    </Section>
  );
}

export default Hero;