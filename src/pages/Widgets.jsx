import { useNavigate } from "react-router-dom";
import WidgetCard from "../components/widgets/WidgetCard";

function Widgets() {
  const navigate = useNavigate();

  const widgets = [
    {
      title: "Grid Widget",
      description:
        "Display testimonials in a beautiful responsive grid.",
      type: "grid",
    },
    {
      title: "Carousel Widget",
      description:
        "Show testimonials in an auto-sliding carousel.",
      type: "carousel",
    },
    {
      title: "Wall Widget",
      description:
        "Create a Wall of Love using customer testimonials.",
      type: "wall",
    },
    {
      title: "Popup Widget",
      description:
        "Display testimonials as floating popup notifications.",
      type: "popup",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-8">

      <h1 className="text-3xl font-bold text-gray-900">
        Widgets
      </h1>

      <p className="mt-2 text-gray-500">
        Choose a widget to showcase your testimonials.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

        {widgets.map((widget) => (
          <WidgetCard
            key={widget.title}
            {...widget}
            onCustomize={() =>
              navigate(`/widgets/${widget.type}`)
            }
          />
        ))}

      </div>

    </div>
  );
}

export default Widgets;