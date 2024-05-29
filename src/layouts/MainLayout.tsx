import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";

// Desc: Main Layout for the application
const MainLayout = () => {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-[#F7F7FA]">
        <div>
          <Sidebar />
        </div>
        <div className="w-full rounded-t-2xl bg-dashboard-bg mt-14">
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
