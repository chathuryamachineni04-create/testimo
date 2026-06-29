function DashboardStats({
  totalTestimonials,
  published,
  averageRating,
  pending,
}) {
  return (
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
  );
}

export default DashboardStats;