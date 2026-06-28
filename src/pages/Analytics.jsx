import {
  FiEye,
  FiMousePointer,
  FiTrendingUp,
  FiStar,
} from "react-icons/fi";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

function Analytics() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-900">
        Analytics
      </h1>

      <p className="mt-2 text-gray-500">
        Track your testimonial performance.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        


        {/* Views */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <FiEye className="text-3xl text-[#6C63FF]" />

          <p className="text-gray-500 mt-4">
            Total Views
          </p>

          <h2 className="text-3xl font-bold mt-2">
            12,540
          </h2>
        </div>

        {/* Clicks */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <FiMousePointer className="text-3xl text-[#6C63FF]" />

          <p className="text-gray-500 mt-4">
            Total Clicks
          </p>

          <h2 className="text-3xl font-bold mt-2">
            2,134
          </h2>
        </div>

        {/* Conversion */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <FiTrendingUp className="text-3xl text-[#6C63FF]" />

          <p className="text-gray-500 mt-4">
            Conversion Rate
          </p>

          <h2 className="text-3xl font-bold mt-2">
            17%
          </h2>
        </div>

        {/* Rating */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <FiStar className="text-3xl text-[#6C63FF]" />

          <p className="text-gray-500 mt-4">
            Average Rating
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4.9
          </h2>
        </div>

            </div>

      {/* Analytics Chart */}
      <AnalyticsChart />

    </div>
  );
}

export default Analytics;