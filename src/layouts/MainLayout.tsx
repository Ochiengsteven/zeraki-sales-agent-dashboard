import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";

// Desc: Main Layout for the application
const MainLayout = () => {
  return (
    <>
      <div className="bg-dashboard-bg flex w-screen h-screen">
        <div>
          <Sidebar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
