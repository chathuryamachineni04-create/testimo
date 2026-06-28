import React, { useState, useEffect } from "react";
import {
  FiGrid,
  FiMessageSquare,
  FiBarChart2,
  FiLayout,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiBell,
  FiUser,
} from "react-icons/fi";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import testimonialsData from "../data/testimonials";
import { Link } from "react-router-dom";

function Dashboard() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
  const saved = localStorage.getItem("testimonials");

  if (saved) {
    setTestimonials(JSON.parse(saved));
  } else {
    setTestimonials(testimonialsData);
  }
}, []);
const totalTestimonials = testimonials.length;

const published = testimonials.filter(
  (item) => item.status === "Published"
).length;

const pending = testimonials.filter(
  (item) => item.status === "Pending"
).length;

const averageRating =
  testimonials.length > 0
    ? (
        testimonials.reduce(
          (sum, item) => sum + Number(item.rating),
          0
        ) / testimonials.length
      ).toFixed(1)
    : "0.0";
  return (
    <div className="min-h-screen bg-[#F8F9FC] flex">

      {/* ================= Sidebar ================= */}
      <aside className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col">

        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#6C63FF]">
            Testimo
          </h1>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#6C63FF] text-white font-medium">
            <FiGrid />
            Dashboard
          </button>

          <Link
  to="/testimonials"
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[#6C63FF]/10 hover:text-[#6C63FF] transition"
>
  <FiMessageSquare />
  Testimonials
</Link>


          <Link
  to="/analytics"
  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[#6C63FF]/10 hover:text-[#6C63FF] transition"
>
  <FiBarChart2 />
  Analytics
</Link>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[#6C63FF]/10 hover:text-[#6C63FF] transition">
            <FiLayout />
            Widgets
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-[#6C63FF]/10 hover:text-[#6C63FF] transition">
            <FiSettings />
            Settings
          </button>

        </nav>
        

        {/* Logout */}
        <div className="mt-auto p-6">
  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition">
    <FiLogOut />
    Logout
  </button>
</div>

      </aside>

      {/* ================= Main Content ================= */}
      <main className="flex-1">

        {/* Top Navbar */}
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

        {/* Content */}
        <section className="p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="text-gray-500 mt-2">
            Welcome back! Here's what's happening today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
    <p className="text-gray-500 text-sm">
      Total Testimonials
    </p>

    <h3 className="text-3xl font-bold mt-3">
  {totalTestimonials}
</h3>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
    <p className="text-gray-500 text-sm">
      Published
    </p>

    <h3 className="text-3xl font-bold mt-3">
  {published}
</h3>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
    <p className="text-gray-500 text-sm">
      Average Rating
    </p>

    <h3 className="text-3xl font-bold mt-3">
  ⭐ {averageRating}
</h3>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
    <p className="text-gray-500 text-sm">
      Pending Reviews
    </p>

    <h3 className="text-3xl font-bold mt-3">
  {pending}
</h3>
  </div>

</div>
{/* Recent Testimonials */}

<div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

  <div className="p-6 border-b border-gray-200">
    <h3 className="text-xl font-semibold text-gray-900">
      Recent Testimonials
    </h3>
  </div>
  <div className="mt-10">
  <AnalyticsChart />
</div>


  <table className="w-full">

    <thead className="bg-gray-50">

      <tr>

        <th className="text-left p-4 font-medium text-gray-500">
          Customer
        </th>

        <th className="text-left p-4 font-medium text-gray-500">
          Rating
        </th>

        <th className="text-left p-4 font-medium text-gray-500">
          Status
        </th>

        <th className="text-left p-4 font-medium text-gray-500">
          Date
        </th>

      </tr>

    </thead>

    <tbody>
<tbody>
  {testimonials.slice(0, 5).map((item) => (
    <tr
      key={item.id}
      className="border-t hover:bg-gray-50"
    >
      <td className="p-4 font-medium">
        {item.customer}
      </td>

      <td className="p-4">
        {"★".repeat(Number(item.rating))}
        {"☆".repeat(5 - Number(item.rating))}
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            item.status === "Published"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {item.status}
        </span>
      </td>

      <td className="p-4 text-gray-500">
        {item.date}
      </td>
    </tr>
  ))}
</tbody>

    </tbody>

  </table>

</div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;