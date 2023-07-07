import React from "react";
import adminDashboardLogo from "../../assets/images/avgnaLogo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="w-64 bg-slate-200/50 h-screen p-4">
        <div className="px-5 flex justify-start items-center border-b">
          <img src={adminDashboardLogo} className="w-[80px] h-[80px]" />
        </div>
        <ul className="flex flex-col items-start justify-center text-left space-y-3 p-4">
          <li className="liHover w-full px-2 py-1 rounded">
            <Link to="/admin-dashboard/home" className="block">
              Dashboard
            </Link>
          </li>
          <li className="liHover w-full px-2 py-1 rounded">
            <Link to="/admin-dashboard/our-team" className="block">
              Our Team
            </Link>
          </li>
          <li className="liHover w-full px-2 py-1 rounded">
            <Link to="/admin-dashboard/about" className="block">
              About
            </Link>
          </li>
          <li className="liHover w-full px-2 py-1 rounded">
            <Link to="/admin-dashboard/services" className="block">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
