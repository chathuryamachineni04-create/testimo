function DeleteModal({
  open,
  testimonial,
  onClose,
  onDelete,
}) {
  if (!open || !testimonial) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-red-600">
          Delete Testimonial
        </h2>

        <p className="mt-5 text-gray-600">
          Are you sure you want to delete
          <span className="font-semibold">
            {" "}
            {testimonial.customer}
          </span>
          ?
        </p>

        <p className="text-sm text-gray-400 mt-2">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={() => onDelete(testimonial.id)}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;