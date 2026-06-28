import {
  FiMessageSquare,
  FiCheckCircle,
  FiClock,
  FiStar,
} from "react-icons/fi";

function SummaryCards({ testimonials = [] }) {
  const totalTestimonials = testimonials.length;

const publishedTestimonials = testimonials.filter(
  (item) => item.status === "Published"
).length;

const pendingTestimonials = testimonials.filter(
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

const cards = [
  {
    title: "Total Testimonials",
    value: totalTestimonials,
    icon: <FiMessageSquare />,
    color: "text-[#6C63FF]",
  },
  {
    title: "Published",
    value: publishedTestimonials,
    icon: <FiCheckCircle />,
    color: "text-green-600",
  },
  {
    title: "Pending",
    value: pendingTestimonials,
    icon: <FiClock />,
    color: "text-yellow-500",
  },
  {
    title: "Average Rating",
    value: averageRating,
    icon: <FiStar />,
    color: "text-orange-500",
  },
];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >
          <div className={`text-3xl ${card.color}`}>
            {card.icon}
          </div>

          <p className="mt-4 text-gray-500">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;