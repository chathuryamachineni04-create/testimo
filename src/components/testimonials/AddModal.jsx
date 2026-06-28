import { useState } from "react";

function AddModal({
  open,
  onClose,
  onAdd,
}) {

  const [form, setForm] = useState({
    customer: "",
    rating: 5,
    status: "Published",
    date: "",
  });

  if (!open) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    onAdd({
      id: Date.now(),
      ...form,
    });

    setForm({
      customer: "",
      rating: 5,
      status: "Published",
      date: "",
    });
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Add Testimonial
        </h2>

        <label className="block mb-2">
          Customer
        </label>

        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <label className="block mb-2">
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

        <label className="block mb-2">
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

        <label className="block mb-2">
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
            className="border rounded-lg px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-[#6C63FF] text-white rounded-lg px-5 py-2"
          >
            Add Testimonial
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddModal;