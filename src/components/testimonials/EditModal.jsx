import { useEffect, useState } from "react";

function EditModal({
  open,
  testimonial,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState({
    customer: "",
    rating: 5,
    status: "Published",
    date: "",
  });

  useEffect(() => {
    if (testimonial) {
      setForm(testimonial);
    }
  }, [testimonial]);

  if (!open) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Edit Testimonial
        </h2>

        {/* Customer */}

        <label className="block mb-2 font-medium">
          Customer
        </label>

        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
        />

        {/* Rating */}

        <label className="block mb-2 font-medium">
          Rating
        </label>

        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
        />

        {/* Status */}

        <label className="block mb-2 font-medium">
          Status
        </label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
        >
          <option>Published</option>
          <option>Pending</option>
        </select>

        {/* Date */}

        <label className="block mb-2 font-medium">
          Date
        </label>

        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="px-5 py-2 rounded-lg bg-[#6C63FF] text-white"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditModal;