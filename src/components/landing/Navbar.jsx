import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

import Button from "../common/Button";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

/**
 * Navbar
 * ----------------------------------------------------------
 * Sticky site header.
 * - Transparent over the hero until the user scrolls.
 * - Changes to a blurred white background with shadow on scroll.
 * - Uses Link from react-router-dom for page navigation.
 * - Uses anchor links for scrolling to sections.
 * - Responsive mobile menu.
 */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#6C63FF] text-white shadow-[0_4px_10px_-2px_rgba(108,99,255,0.5)]">
            <HiSparkles className="h-4 w-4" />
          </span>

          <span className="text-lg font-bold text-gray-900">
            Testimo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/login">
            <Button
              variant="secondary"
              className="px-4 py-2.5"
            >
              Login
            </Button>
          </Link>

          <Link to="/submit">
            <Button className="px-4 py-2.5">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-gray-200 bg-white text-gray-700 transition-colors md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <FiX className="h-4 w-4" />
          ) : (
            <FiMenu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-sm font-medium text-gray-600"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex flex-col gap-2">
            <Link
              to="/login"
              onClick={closeMobileMenu}
            >
              <Button
                variant="secondary"
                className="w-full"
              >
                Login
              </Button>
            </Link>

            <Link
              to="/submit"
              onClick={closeMobileMenu}
            >
              <Button className="w-full">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;