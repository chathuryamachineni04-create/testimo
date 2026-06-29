import { FiSearch, FiBell, FiUser } from "react-icons/fi";

function TopNavbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">

      {/* Search */}
      <div className="relative w-96">

        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#6C63FF]"
        />

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="relative">
          <FiBell className="text-2xl text-gray-600" />
        </button>

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white">
            <FiUser />
          </div>

          <div>
            <p className="font-semibold text-gray-800">
              Chathurya
            </p>

            <p className="text-sm text-gray-500">
              Owner
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default TopNavbar;