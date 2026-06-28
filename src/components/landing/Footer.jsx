import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMessageSquare } from "react-icons/fi";
import Section from "../common/Section";

// ==========================
// FOOTER LINK DATA
// ==========================
// Each column's links are stored as arrays of objects for clean mapping.
const PRODUCT_LINKS = [
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Widgets", to: "/widgets" },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Careers", to: "/careers" },
];

const RESOURCE_LINKS = [
  { label: "Help Center", to: "/help" },
  { label: "Documentation", to: "/docs" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", icon: FiGithub, href: "https://github.com" },
  { label: "LinkedIn", icon: FiLinkedin, href: "https://linkedin.com" },
  { label: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
];

// ==========================
// REUSABLE FOOTER LINK ITEM
// ==========================
// Handles the shared hover animation (purple color + translate-x) for every link.
const FooterLink = ({ to, label }) => {
  return (
    <li>
      <Link
        to={to}
        className="inline-block text-sm text-gray-500 transition-all duration-300 hover:text-[#6C63FF] hover:translate-x-1"
      >
        {label}
      </Link>
    </li>
  );
};

// ==========================
// REUSABLE FOOTER COLUMN
// ==========================
// Renders a heading + list of FooterLink items for a given column of data.
const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm font-semibold text-gray-900 mb-5 tracking-wide uppercase">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <FooterLink key={link.label} to={link.to} label={link.label} />
        ))}
      </ul>
    </div>
  );
};

// ==========================
// MAIN FOOTER COMPONENT
// ==========================
const Footer = () => {
  return (
    <Section id="footer">
      {/* Outer glass card wrapper to match premium SaaS aesthetic */}
      <div className="relative rounded-[24px] border border-gray-200 bg-white/60 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(108,99,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-20px_rgba(108,99,255,0.25)] px-6 sm:px-10 md:px-14 py-12 md:py-16 overflow-hidden">
        {/* Subtle decorative purple glow in the background */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#6C63FF]/10 blur-[100px] rounded-full" />

        {/* ========================== */}
        {/* TOP GRID: Logo + Columns */}
        {/* ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* ----- LEFT COLUMN: Logo, Description, Socials ----- */}
          <div className="flex flex-col lg:col-span-2">
            {/* Logo - matches Navbar logo style */}
            <Link to="/" className="flex items-center gap-2 mb-5 group w-fit">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#9B8AFB] shadow-md shadow-[#6C63FF]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <FiMessageSquare className="text-white text-base" />
              </span>
              <span className="text-xl font-bold text-gray-900">
                Testimo
              </span>
            </Link>

            {/* Short Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              Collect, manage and showcase authentic customer testimonials
              with beautiful widgets powered by AI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white/70 text-gray-500 backdrop-blur-md transition-all duration-300 hover:text-[#6C63FF] hover:border-[#6C63FF]/40 hover:-translate-y-1 hover:shadow-md hover:shadow-[#6C63FF]/20"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* ----- MIDDLE COLUMN: Product ----- */}
          <FooterColumn title="Product" links={PRODUCT_LINKS} />

          {/* ----- THIRD COLUMN: Company ----- */}
          <FooterColumn title="Company" links={COMPANY_LINKS} />

          {/* ----- FOURTH COLUMN: Resources ----- */}
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
        </div>

        {/* ========================== */}
        {/* DIVIDER */}
        {/* ========================== */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

        {/* ========================== */}
        {/* BOTTOM SECTION: Copyright + Tagline */}
        {/* ========================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-gray-500">
           © 2026 Testimo. Crafted with passion.
          </p>
          <p className="text-sm text-gray-500">
            Made with <span className="text-[#6C63FF]">❤️</span> for modern
            businesses
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;