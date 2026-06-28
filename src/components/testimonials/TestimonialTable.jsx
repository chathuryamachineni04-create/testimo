
import RatingStars from "./RatingStars";
import StatusBadge from "./StatusBadge";
import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import CustomerAvatar from "./CustomerAvatar";
import ActionButtons from "./ActionButtons";
function TestimonialTable({
  testimonials,
  search,
  onView,
  onEdit,
  onDelete,
}) {

    const filteredTestimonials = testimonials.filter((item) =>
  item.customer.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-6 py-4">Customer</th>
            <th className="text-left px-6 py-4">Rating</th>
            <th className="text-left px-6 py-4">Status</th>
            <th className="text-left px-6 py-4">Date</th>
            <th className="text-left px-6 py-4">
  Actions
</th>
          </tr>
        </thead>

        <tbody>

  {filteredTestimonials.length > 0 ? (

    filteredTestimonials.map((item) => (

      <tr
        key={item.id}
        className="border-t hover:bg-gray-50 transition"
      >
        <td className="px-6 py-4">
          <CustomerAvatar name={item.customer} />
        </td>

        <td className="px-6 py-4">
          <RatingStars rating={item.rating} />
        </td>

        <td className="px-6 py-4">
          <StatusBadge status={item.status} />
        </td>

        <td className="px-6 py-4">
          {item.date}
        </td>

        <td className="px-6 py-4">
          <ActionButtons
  onView={() => onView(item)}
  onEdit={() => onEdit(item)}
  onDelete={() => onDelete(item)}
/>
        </td>

      </tr>

    ))

  ) : (

    <tr>
      <td
        colSpan="5"
        className="py-12 text-center text-gray-500"
      >
        <div className="flex flex-col items-center gap-3">

          <div className="text-5xl">
            🔍
          </div>

          <h3 className="text-xl font-semibold text-gray-700">
            No testimonials found
          </h3>

          <p className="text-gray-400">
            Try another search keyword.
          </p>

        </div>
      </td>
    </tr>

  )}

</tbody>
      </table>

    </div>
  );
}

export default TestimonialTable;