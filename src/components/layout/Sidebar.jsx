import {
  FiGrid,
  FiMessageSquare,
  FiBarChart2,
  FiLayout,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/dashboard",
    },
    {
      name: "Testimonials",
      icon: <FiMessageSquare />,
      path: "/testimonials",
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
      path: "/analytics",
    },
    {
      name: "Widgets",
      icon: <FiLayout />,
      path: "/widgets",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      path: "/settings",
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#6C63FF]">
          Testimo
        </h1>
      </div>

      {/* Menu */}
      <nav className="p-6 space-y-2">

        {menuItems.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition
              ${
                location.pathname === item.path
                  ? "bg-[#6C63FF] text-white"
                  : "text-gray-600 hover:bg-[#6C63FF]/10 hover:text-[#6C63FF]"
              }`}
          >
            {item.icon}
            {item.name}
          </Link>

        ))}

      </nav>

      {/* Logout */}
      <div className="mt-auto p-6">

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition">

          <FiLogOut />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;