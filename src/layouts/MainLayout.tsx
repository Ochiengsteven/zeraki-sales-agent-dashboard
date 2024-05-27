import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";

// Desc: Main Layout for the application
const MainLayout = () => {
  return (
    <>
      <div className="bg-green-300 flex w-screen h-screen">
        <div>
          <Sidebar />
        </div>
        <div>
          <div>MainLayout</div>
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
