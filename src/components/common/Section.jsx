import React from "react";

/**
 * Section
 * ---------------------------------------------------------------------
 * Reusable wrapper for every landing page section (Hero, Features,
 * Pricing, FAQ, CTA, Footer, etc.).
 *
 * Responsibilities:
 *  - Renders a semantic <section> element.
 *  - Applies consistent horizontal padding so content never touches
 *    the viewport edges on small screens.
 *  - Applies responsive vertical spacing (py) so sections don't need
 *    to redeclare top/bottom padding individually.
 *  - Centers an inner container and caps it at a max width so content
 *    stays readable on large screens.
 *
 * Props:
 *  - children:           Section content.
 *  - id:                 Optional anchor id (e.g. "features", "pricing").
 *  - className:          Extra classes applied to the outer <section>
 *                         (e.g. background color, borders).
 *  - containerClassName: Extra classes applied to the inner centered
 *                         container (e.g. custom grid/flex layout).
 */
const Section = ({ children, id, className = "", containerClassName = "" }) => (
  <section
    id={id}
    className={`px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-28 ${className}`}
  >
    <div className={`mx-auto max-w-7xl ${containerClassName}`}>{children}</div>
  </section>
);

export default Section;