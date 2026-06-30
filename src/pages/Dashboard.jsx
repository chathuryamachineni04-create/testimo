import React, { useState, useEffect } from "react";
import api from "../services/api";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardStats from "../components/dashboard/DashboardStats";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import RecentTestimonials from "../components/dashboard/RecentTestimonials";


function Dashboard() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
  fetchDashboardData();
}, []);

const fetchDashboardData = async () => {
  try {
    const response = await api.get("testimonials/");
    setTestimonials(response.data);
  } catch (error) {
    console.error(error);
  }
};

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
    <DashboardLayout>
      <h2 className="text-3xl font-bold text-gray-900">
        Dashboard
      </h2>

      <p className="text-gray-500 mt-2">
        Welcome back! Here's what's happening today.
      </p>

      <DashboardStats
        totalTestimonials={totalTestimonials}
        published={published}
        averageRating={averageRating}
        pending={pending}
      />

      <div className="mt-10">
        <AnalyticsChart />
      </div>

      <RecentTestimonials testimonials={testimonials} />
    </DashboardLayout>
  );
}

export default Dashboard;