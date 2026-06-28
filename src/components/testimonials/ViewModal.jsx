function ViewModal({ open, onClose, testimonial }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8">

        <h2 className="text-2xl font-bold mb-6">
          Testimonial Details
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-sm text-gray-500">
              Customer
            </p>

            <p className="font-semibold">
              {testimonial.customer}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Rating
            </p>

            <p>
              {"★".repeat(testimonial.rating)}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Status
            </p>

            <p>{testimonial.status}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Date
            </p>

            <p>{testimonial.date}</p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full bg-[#6C63FF] text-white py-3 rounded-xl hover:bg-[#584EF8]"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default ViewModal;