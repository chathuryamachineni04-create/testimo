import {
  FiGrid,
  FiColumns,
  FiLayout,
  FiMessageSquare,
  FiCopy,
} from "react-icons/fi";

import { useState } from "react";

const icons = {
  grid: <FiGrid size={34} />,
  carousel: <FiColumns size={34} />,
  wall: <FiLayout size={34} />,
  popup: <FiMessageSquare size={34} />,
};

function WidgetCard({
  title,
  description,
  type,
  onCustomize,
}) {
  const [copied, setCopied] = useState(false);
  function copyEmbedCode() {
    const code = `<script src="https://testimo.vercel.app/widget.js?user=chathurya&type=${type}"></script>`;

    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition">

      <div className="text-[#6C63FF]">
        {icons[type]}
      </div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-gray-500 text-sm leading-6">
        {description}
      </p>
      <button
  onClick={onCustomize}
  className="mt-6 w-full bg-[#6C63FF] text-white py-3 rounded-xl hover:bg-[#5A52E0] transition"
>
  Customize
</button>



      <button
  onClick={copyEmbedCode}
  className="mt-3 w-full border border-[#6C63FF] text-[#6C63FF] py-3 rounded-xl hover:bg-[#F3F2FF] transition flex items-center justify-center gap-2"
>
  <FiCopy />

  {copied ? "Copied!" : "Copy Embed Code"}
</button>

    </div>
  );
}

export default WidgetCard;