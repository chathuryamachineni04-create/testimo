const colors = [
  {
    name: "Purple",
    value: "#6C63FF",
  },
  {
    name: "Blue",
    value: "#3B82F6",
  },
  {
    name: "Green",
    value: "#10B981",
  },
  {
    name: "Orange",
    value: "#F97316",
  },
];

function ColorPicker({
  color,
  setColor,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">

      <h2 className="text-xl font-semibold">
        Accent Color
      </h2>

      <div className="flex gap-4 mt-6">

        {colors.map((item) => (

          <button
            key={item.name}
            onClick={() => setColor(item.value)}
            className={`w-10 h-10 rounded-full border-4 transition ${
              color === item.value
                ? "border-gray-900"
                : "border-transparent"
            }`}
            style={{
              backgroundColor: item.value,
            }}
          />

        ))}

      </div>

    </div>
  );
}

export default ColorPicker;