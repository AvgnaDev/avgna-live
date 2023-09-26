import React from "react";
import logo from "../assets/images/avgnaLogo.png";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        className="bg-fixed w-full relative bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 "></div>

        <div className="px-4 sm:px-0 max-w-maxWidth mx-auto py-20 text-white relative flex flex-wrap gap-2.5 justify-between h-full">
          <div className="w-[360px] p-4">
            <img
              src={logo}
              className="w-[150px] h-[150px] p-4"
            />
            <div>
              <div className="flex justify-center pointer-events-none items-start">
                <FaIcons.FaLocationArrow className="text-4xl mr-2" />
                <p>
                  A-1304, SANGRIA, MEGAPOLIS, RAJIV GANDHI INTERNATIONAL IT
                  PARK, PHASE 3 HINJAWADI PUNE MH 411057 IN
                </p>
              </div>
              <Link to="tel:7878181130">
                <div className="flex justify-start pointer-events-none items-center my-4">
                  <FaIcons.FaPhoneAlt className="mr-2" />
                  <p>+(91)-78781 81130</p>
                </div>
              </Link>
              <Link to="mailto:HR@avgna.com">
                <div className="flex justify-start items-center pointer-events-none my-4">
                  <MdIcons.MdEmail className="mr-2" />
                  <p>HR@avgna.com</p>
                </div>
              </Link>
              <div className="flex items-start justify-start ">
                <FiIcons.FiClock className="mr-2 text-white" />
                <p>
                  Mon-Fri 9am - 6pm <br /> (Saturday & Sunday
                  <span className="font-bold uppercase"> Closed</span>)
                </p>
              </div>
            </div>
          </div>
          <div className="w-[360px] p-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-medium">Links</h2>
              <hr className="w-1/2 border-gray-100/40 ml-3" />
            </div>
            <div className="my-4">
              <ul className="space-y-4 flex flex-col">
                {/* <li> */}
                  <NavLink to="/avgna-live/">Home</NavLink>
                {/* </li> */}
                {/* <li> */}
                  <NavLink to="/avgna-live/about">About</NavLink>
                {/* </li> */}
                {/* <li> */}
                  <NavLink to="/avgna-live/services">Services & Products</NavLink>
                {/* </li> */}
                {/* <li> */}
                  <NavLink to="/avgna-live/contact">Contact Us</NavLink>
                {/* </li> */}
              </ul>
            </div>
          </div>
          <div className="w-[360px] p-4">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-medium">Newsletter</h2>
              <hr className="w-1/2 border-gray-100/40 ml-3" />
            </div>
            <div>
              <p>Send us a newsletter request to get updates</p>
              <div className="mt-10 mb-4 flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-[85%] bg-white/20 focus:ring-[#3dc0ff] focus:ring-1 placeholder:italic placeholder:text-gray-200 text-white"
                  disabled
                />
                <span className="bg-[#00c7d4] p-1 w-[15%] text-center cursor-not-allowed">
                  <GiIcons.GiClick className="text-3xl" />
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span onClick={() => { alert("Comming soon...") }} className="rounded-full border p-2 bg-white">
                  <Link to="#">
                    <FaIcons.FaFacebookF fill="#3b5998" />
                  </Link>
                </span>
                <span onClick={() => { alert("Comming soon...") }} className="rounded-full border p-2 bg-white">
                  <Link to="#">
                    <FaIcons.FaTwitter fill="#00acee" />
                  </Link>
                </span>
                <span onClick={() => { alert("Comming soon...") }} className="rounded-full border p-2 bg-white">
                  <Link to="#">
                    <FaIcons.FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  </Link>
                </span>
                <span className="rounded-full border p-2 bg-white">
                  <Link
                    to="https://www.linkedin.com/company/avgna/"
                    target="_blank"
                  >
                    <FaIcons.FaLinkedin fill="#0072b1" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white/80 p-5 text-center">
          COPYRIGHT © 2023 AVGNA - ALL RIGHTS RESERVED.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
