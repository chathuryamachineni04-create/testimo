function ThemeSelector({ theme, setTheme }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">

      <h2 className="text-xl font-semibold">
        Theme
      </h2>

      <div className="mt-5 space-y-4">

        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === "light"}
            onChange={() => setTheme("light")}
          />

          <span>Light</span>

        </label>

        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === "dark"}
            onChange={() => setTheme("dark")}
          />

          <span>Dark</span>

        </label>

      </div>

    </div>
  );
}

export default ThemeSelector;