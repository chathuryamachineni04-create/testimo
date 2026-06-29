import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F9FC] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <TopNavbar />

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;