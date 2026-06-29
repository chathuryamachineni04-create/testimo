function RecentTestimonials({ testimonials }) {
  return (
    <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900">
          Recent Testimonials
        </h3>
      </div>

      {/* Table */}
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

      </table>

    </div>
  );
}

export default RecentTestimonials;