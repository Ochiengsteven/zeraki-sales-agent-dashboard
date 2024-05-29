import Sidebar from "../components/Sidebar/Sidebar";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Schools from "../pages/Schools/Schools";
// Desc: Main Layout for the application
const MainLayout = () => {
  return (
    <>
      <div className="flex w-screen min-h-screen bg-[#F7F7FA]">
        <div>
          <Sidebar />
        </div>
        <div className="w-full rounded-t-2xl bg-dashboard-bg mt-14">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schools" element={<Schools />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
