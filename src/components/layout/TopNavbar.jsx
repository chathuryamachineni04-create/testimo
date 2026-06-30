import { FiSearch, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/auth";

function TopNavbar() {
  const navigate = useNavigate();
  function handleLogout() {
  logout();
  navigate("/login");
}
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

  <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
  >
    <FiLogOut />
    Logout
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