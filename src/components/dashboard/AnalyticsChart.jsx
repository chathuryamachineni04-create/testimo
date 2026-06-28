import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", views: 2400 },
  { month: "Feb", views: 3200 },
  { month: "Mar", views: 4100 },
  { month: "Apr", views: 3900 },
  { month: "May", views: 5200 },
  { month: "Jun", views: 6100 },
];

function AnalyticsChart() {
  return (
    <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">
        Monthly Views
      </h2>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="views"
              stroke="#6C63FF"
              strokeWidth={3}
              dot={{ r: 5 }}
  activeDot={{ r: 7 }}

            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;