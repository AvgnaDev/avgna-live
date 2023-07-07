import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import axios from "axios";
import Spinner from "../../../Spinner";
import useSWR from "swr";

const DashboardHome = () => {
  // GET ALL ADMIN
  const [admin, setAdmin] = useState([]);
  //  SWR APPLY HERE
  const URL = `https://avgna.onrender.com/api/v1/admin`;
  const fetcher = (url) =>
    axios.get(url).then((res) => setAdmin(res.data.length));
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading || data)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner /> Loading...
      </div>
    );
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-2 justify-between w-full px-4">
        <div className="border-l-4 border-yellow-500 shadow-lg w-[32.5%] rounded py-4 px-6 bg-gradient-to-r from-indigo-500/90  to-red-500/80 hover:from-red-500 hover:to-indigo-500">
          <div className="flex w-full justify-between text-white">
            <div className="flex flex-col w-4/5">
              <p className="text-[30px] uppercase">TOTAL ADMIN</p>
              <p className="text-[25px]">{admin}</p>
            </div>
            <div>
              <MdIcons.MdAdminPanelSettings className="text-5xl" />
            </div>
          </div>
        </div>
        <div className="border-l-4 border-green-500 shadow-lg w-[32.5%] rounded py-4 px-6 bg-gradient-to-r from-cyan-500/90  to-yellow-500/80 hover:from-cyan-500 hover:to-yellow-500">
          <div className="flex w-full justify-between text-white">
            <div className="flex flex-col w-4/5">
              <p className="text-[30px] uppercase">OUR TEAM</p>
              <p className="text-[25px]">1</p>
            </div>
            <div>
              <HiIcons.HiUserGroup className="text-5xl" />
            </div>
          </div>
        </div>
        <div className="border-l-4 border-l-orange-700 shadow-lg w-[32.5%] rounded py-4 px-6 bg-gradient-to-r from-sky-700/90  to-red-500/80 hover:from-red-500 hover:to-sky-500">
          <div className="flex w-full justify-between text-white">
            <div className="flex flex-col w-4/5">
              <p className="text-[30px] uppercase">TOTAL SERVICES</p>
              <p className="text-[25px]">1</p>
            </div>
            <div>
              <MdIcons.MdOutlineMiscellaneousServices className="text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardHome;
