import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProfileSettings from "../components/settings/ProfileSettings";
import WorkspaceSettings from "../components/settings/WorkspaceSettings";

function Settings() {
  const [profile, setProfile] = useState({
    name: "Chathurya",
    email: "chathurya@example.com",
  });

  const [workspace, setWorkspace] = useState({
    company: "Testimo",
    color: "#6C63FF",
    theme: "light",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    const savedWorkspace = localStorage.getItem("workspace");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }

    if (savedWorkspace) {
      setWorkspace(JSON.parse(savedWorkspace));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    localStorage.setItem(
      "workspace",
      JSON.stringify(workspace)
    );

    toast.success("Settings saved successfully!");
  };

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-gray-900">
        Settings
      </h1>

      <p className="mt-2 text-gray-500">
        Manage your profile and workspace settings.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

        <ProfileSettings
          profile={profile}
          setProfile={setProfile}
        />

        <WorkspaceSettings
          workspace={workspace}
          setWorkspace={setWorkspace}
        />

      </div>

      <div className="mt-8">

        <button
          onClick={handleSave}
          className="bg-[#6C63FF] text-white px-6 py-3 rounded-xl hover:bg-[#5A52E0] transition"
        >
          Save Changes
        </button>

      </div>

    </DashboardLayout>
  );
}

export default Settings;