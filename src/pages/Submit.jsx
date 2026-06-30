import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Submit() {
  const { username } = useParams();

  const [form, setForm] = useState({
    customer: "",
    company: "",
    message: "",
    rating: 5,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await api.post(
        `public/testimonials/${username}/`,
        form
      );

      setSuccess(true);

      setForm({
        customer: "",
        company: "",
        message: "",
        rating: 5,
      });

    } catch (error) {
      console.error(error);
      alert("Failed to submit testimonial.");
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Thank You!
          </h1>

          <p className="mt-4 text-gray-600">
            Your testimonial has been submitted successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex items-center justify-center p-8">

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl"
      >

        <h1 className="text-3xl font-bold text-gray-900">
          Leave a Testimonial
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          We'd love to hear your feedback.
        </p>

        <label className="block mb-2 font-medium">
          Name
        </label>

        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-5"
          required
        />

        <label className="block mb-2 font-medium">
          Company
        </label>

        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-5"
        />

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
          className="w-full border rounded-xl p-3 mb-5"
        />

        <label className="block mb-2 font-medium">
          Testimonial
        </label>

        <textarea
          rows="5"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mb-8"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6C63FF] text-white py-3 rounded-xl hover:bg-[#5A52E0] transition"
        >
          {loading ? "Submitting..." : "Submit Testimonial"}
        </button>

      </form>

    </div>
  );
}

export default Submit;