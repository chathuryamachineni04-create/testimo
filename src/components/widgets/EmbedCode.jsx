import { FiCopy } from "react-icons/fi";

function EmbedCode({ type, theme, color }) {
  const code = `<div id="testimo-widget"></div>

<script>
Testimo.init({
  widget: "${type}",
  theme: "${theme}",
  color: "${color}"
});
</script>`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Embed code copied!");
    } catch {
      alert("Failed to copy code.");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-8">

      <h2 className="text-xl font-semibold">
        Embed Code
      </h2>

      <textarea
        readOnly
        value={code}
        className="w-full mt-5 h-44 rounded-xl border border-gray-200 p-4 font-mono text-sm bg-gray-50 resize-none"
      />

      <button
        onClick={copyCode}
        className="mt-5 flex items-center gap-2 bg-[#6C63FF] text-white px-5 py-3 rounded-xl hover:bg-[#5A52E0] transition"
      >
        <FiCopy />
        Copy Code
      </button>

    </div>
  );
}

export default EmbedCode;