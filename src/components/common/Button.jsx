import React from "react";

const VARIANT_CLASSES = {
  primary:
    "bg-[#6C63FF] text-white shadow-[0_8px_20px_-6px_rgba(108,99,255,0.55)] hover:bg-[#5b53e6] hover:shadow-[0_10px_24px_-6px_rgba(108,99,255,0.65)]",
  secondary:
    "border border-gray-200 bg-white text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50",
};

function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;