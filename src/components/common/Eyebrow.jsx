import React from "react";

/**
 * Eyebrow
 * ---------------------------------------------------------------------
 * Small pill-shaped label rendered above section headings to provide
 * context (e.g. "Features", "Pricing", "FAQ").
 *
 * Props:
 *  - children:  Label text.
 *  - icon:      Optional icon element (e.g. from react-icons) rendered
 *               before the text.
 *  - className: Extra classes for one-off overrides.
 */
const Eyebrow = ({ children, icon, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full bg-[#6C63FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#6C63FF] sm:text-xs ${className}`}
  >
    {icon}
    {children}
  </span>
);

export default Eyebrow;