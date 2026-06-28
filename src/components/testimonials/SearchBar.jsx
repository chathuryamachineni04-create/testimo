import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <div className="mt-8 relative max-w-md">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search testimonials..."
        value={value}
        onChange={onChange}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#6C63FF]"
      />
    </div>
  );
}

export default SearchBar;