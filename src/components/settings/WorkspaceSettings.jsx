function WorkspaceSettings({
  workspace,
  setWorkspace,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-900">
        Workspace
      </h2>

      <div className="mt-6 space-y-5">

        {/* Company Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>

          <input
            type="text"
            value={workspace.company}
            onChange={(e) =>
              setWorkspace({
                ...workspace,
                company: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#6C63FF]"
          />
        </div>

        {/* Brand Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand Color
          </label>

          <input
            type="color"
            value={workspace.color}
            onChange={(e) =>
              setWorkspace({
                ...workspace,
                color: e.target.value,
              })
            }
            className="h-12 w-20 rounded-lg border border-gray-200 cursor-pointer"
          />
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>

          <select
            value={workspace.theme}
            onChange={(e) =>
              setWorkspace({
                ...workspace,
                theme: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#6C63FF]"
          >
            <option value="light">
              Light
            </option>

            <option value="dark">
              Dark
            </option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default WorkspaceSettings;