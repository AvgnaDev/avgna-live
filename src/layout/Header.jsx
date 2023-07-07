import React, { useEffect, useState } from "react";
import SubHeader from "../components/Header/subHeader/SubHeader";
import logo from "../assets/images/avgnaLogo.png";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import CircleAnimation from "../components/animation/CircleAnimation";
import TriangleAnimation from "../components/animation/TriangleAnimation";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Header = () => {
  let location = useLocation();
  let crumb = location.pathname.split("/");

  // Sticky navbar
  // let stickyHeader = document.querySelector(".sticky_manish");
  // const overser = new IntersectionObserver(
  //   () => {
  //     alert("Hi.. Manish");
  //   },
  //   {
  //     root: null,
  //     rootMargin: "",
  //     threshold: 0,
  //   }
  // );
  // overser.observe(stickyHeader);
  // useEffect(() => {
  // }, []);

  // MOBILE DRAWER STATUS
  const [drawerStatus, setDrawerStatus] = useState(false);
  const mobileDrawerDecide = () => {
    setDrawerStatus(!drawerStatus);
  };

  window.scrollTo(0, 0);

  return (
    <React.Fragment>
      <div className="relative">
        <SubHeader />
        {/* END TABS */}
        <div className="w-full bg-white drop-shadow-md">
          <div className="max-w-maxWidth mx-auto px-6 py-2 lg:py-3 lg:px-6 xl:px-0 flex justify-between items-center">
            {/* Left Menu Div */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
            {/* Logo */}
            <div className="w-[80px] h-[80px]">
              <Link to="/">
                <img src={logo} className="w-full drop-shadow-sm" />
              </Link>
            </div>
            {/* Right Menu Div */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <BiIcons.BiSearchAlt2 className="text-xl" />
              </ul>
            </div>
            <div className="lg:hidden p-2 cursor-pointer">
              <FaIcons.FaBars
                onClick={() => mobileDrawerDecide()}
                className="text-2xl"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-[#9d3415ff] py-4 px-6">
          <div className="max-w-maxWidth mx-auto ">
            <p className="uppercase">
              Home &gt; <span className="font-bold">{crumb} </span>
            </p>
          </div>
        </div>
        {/* MOBILE MENU DRAWER */}
        {drawerStatus && (
          <div
            className={`lg:hidden fixed inset-0 z-[60] bg-black/60 h-screen`}
          >
            <div className="w-72 h-full bg-white p-4 relative z-30">
              <span
                onClick={() => mobileDrawerDecide()}
                className="font-bold text-right block text-2xl cursor-pointer"
              >
                X
              </span>
              <ul className="">
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/about"
                    onClick={() => setDrawerStatus(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/services"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/contact"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <CircleAnimation position={"top-24 bottom-4 -z-10"} />
              {/* <TriangleAnimation /> */}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
