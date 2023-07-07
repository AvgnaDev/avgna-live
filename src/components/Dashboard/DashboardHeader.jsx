import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../atom";
import { useRecoilState } from "recoil";
import * as BsIcons from "react-icons/bs";

const DashboardHeader = () => {
  const [loginDetail, setLoginDetail] = useRecoilState(loginAuth);

  let navigate = useNavigate();
  const loginHandler = () => {
    sessionStorage.clear();
    // setLoginDetail({});
    navigate("/admin-login");
  };
  return (
    <React.Fragment>
      <div className="bg-white shadow-md z-50 p-4 w-full top-0">
        <div className="flex justify-end items-center w-full">
          <span className="rounded-full p-2 border-red-200 bg-red-100/30 text-xl border relative">
            <BsIcons.BsBellFill fill="red" />
            <span className="w-[1px] h-[1px] rounded-full bg-red-500 p-1 absolute top-0 right-0"></span>
          </span>
          <p className="px-3 py-2 font-medium">
            Hello, <span className="font-bold">Admin</span>
          </p>
          <button
            onClick={() => loginHandler()}
            className="button button--action block"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardHeader;
