import {
  FiEye,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

function ActionButtons({
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex items-center gap-4">
      <button
  onClick={onView}
  className="text-blue-600 hover:text-blue-800"
>
  <FiEye size={20} />
</button>

      <button
  onClick={onEdit}
  className="text-green-600 hover:text-green-800"
>
  <FiEdit size={20} />
</button>

      <button
  onClick={onDelete}
  className="text-red-600 hover:text-red-800"
>
  <FiTrash2 size={20} />
</button>
    </div>
  );
}

export default ActionButtons;