function ProfileSettings({ profile, setProfile }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <h2 className="text-xl font-semibold text-gray-900">
        Profile
      </h2>

      <div className="mt-6 space-y-5">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({
                ...profile,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#6C63FF]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({
                ...profile,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:border-[#6C63FF]"
          />
        </div>

      </div>

    </div>
  );
}

export default ProfileSettings;