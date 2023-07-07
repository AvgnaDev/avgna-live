import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="flex justify-start items-start relative">
        <Sidebar />
        <div className="w-full h-screen overflow-y-auto">
          <DashboardHeader />
          <div className="pt-4">
            {/* <h2>Dashboard</h2> */}
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
