function CustomerAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#6C63FF] text-white flex items-center justify-center font-semibold">
        {initials}
      </div>

      <div>
        <p className="font-medium text-gray-900">{name}</p>
      </div>
    </div>
  );
}

export default CustomerAvatar;