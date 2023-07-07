import React from "react";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="bg-slate-100 p-1 mx-auto lg:px-4 px-3 hidden sm:block">
      <div className="max-w-maxWidth mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center space-x-2">
          <FaIcons.FaFacebookF fill="" />
          <AiIcons.AiFillInstagram fill="" />
          <FaIcons.FaTwitter fill="" />
          <Link to="https://www.linkedin.com/company/avgna/" target="_blank">
            <FaIcons.FaLinkedinIn fill="" />
          </Link>
        </div>
        <div className="flex justify-center space-x-3">
          <Link to="tel:7878181130">
            <div className="flex items-center justify-center">
              <FiIcons.FiPhoneCall className="mr-2" fill="blue" />
              <p>+91 78781 81130</p>
            </div>
          </Link>
          <div className="flex items-center justify-center">
            <FiIcons.FiClock className="mr-2 text-white text-xl" fill="blue" />
            <p>
              Mon-Fri 9am - 6pm
              {/* (Saturday & Sunday
              <span className="font-bold uppercase"> Closed</span>) */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
