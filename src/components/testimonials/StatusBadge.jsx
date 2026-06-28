function StatusBadge({ status }) {
  const isPublished = status === "Published";

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        isPublished
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700"
      }`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;