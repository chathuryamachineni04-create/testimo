import { useState } from "react";
import { useParams } from "react-router-dom";
import ThemeSelector from "../components/widgets/ThemeSelector";
import PreviewCard from "../components/widgets/PreviewCard";
import ColorPicker from "../components/widgets/ColorPicker";
import EmbedCode from "../components/widgets/EmbedCode";

function WidgetCustomizer() {
  const { type } = useParams();
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState("#6C63FF");

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">

      <h1 className="text-3xl font-bold">
        {type.charAt(0).toUpperCase() + type.slice(1)} Widget
      </h1>

      <p className="text-gray-500 mt-2">
        Customize your widget appearance.
      </p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

  <ThemeSelector
    theme={theme}
    setTheme={setTheme}
  />
  <ColorPicker
  color={color}
  setColor={setColor}
/>

  <PreviewCard
  theme={theme}
  color={color}
/>
<div className="mt-10">
  <EmbedCode
    type={type}
    theme={theme}
    color={color}
  />
</div>
</div>

    </div>
  );
}

export default WidgetCustomizer;