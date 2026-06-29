function PreviewCard({
  theme,
  color,
}) {
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-2xl border p-6 transition-all duration-300 ${
        isDark
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      <div
  className="text-xl"
  style={{ color }}
>
        ★★★★★
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        John Smith
      </h3>

      <p
        className={`mt-3 ${
          isDark ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Testimo helped us collect testimonials effortlessly.
        Highly recommended!
      </p>
    </div>
  );
}

export default PreviewCard;