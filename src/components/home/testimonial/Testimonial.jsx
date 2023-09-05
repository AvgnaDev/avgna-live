import React from "react";
import * as FaIcons from "react-icons/fa";
import TWA from "../../../assets/images/TWA.jpg";
import loved from "../../../assets/images/loved.jfif";
import remedi360 from "../../../assets/images/remedi360.png";

const Testimonial = () => {
  return (
    <React.Fragment>
      <div className="bg-white py-10">
        <div className="max-w-maxWidth mx-auto">
          <div className="text-center relative mb-12">
            <h2 className="text-[#00c7d6]">Testimonial</h2>
            <p className="text-xl px-3 relative">
              {/* Meet our team of
              <span className="font-italic"> creators, designers, </span>
              and world-class
              <span className="font-italic"> problem solver</span> */}
              Relish some kind words from few of our esteemed clients
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-center items-center gap-5 px-4 xs:px-0">
            <div className="w-[300px] xs:w-[260px] group rounded relative overflow-hidden bg-gray-100">
              <img className="w-full p-8" src={remedi360} alt="remedi360" />
              <div className="w-full h-full transition-all flex flex-col justify-center p-4 absolute top-0 group-hover:right-0 -right-[100%] bg-white/80 backdrop-blur rounded">
                <p className="text-xl font-extrabold">Thanks Avgna</p>
                <p className="text-gray-500 font-semibold">
                  ReMedi360 -<span className="font-medium"> 3/11/2018</span>
                </p>
                <p className="italic tracking-wide font-[300]">
                  A huge thanks from the ReMedi360 family to Avgna (former
                  Arika technolgies) for shaping our vision to life by
                  developing seamless mobile application for bothe android and
                  iphone users for ReMedi360.
                </p>
                {/* <div className="flex items-center space-x-2 my-2">
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaFacebookF fill="#3b5998" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaTwitter fill="#00acee" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaLinkedin fill="#0072b1" />
                  </span>
                </div> */}
              </div>
            </div>
            <div className="w-[300px] xs:w-[260px] group rounded relative overflow-hidden">
              <img className="w-full" src={TWA} alt="TWA" />
              <div className="w-full h-full transition-all flex flex-col justify-center p-4 absolute top-0 group-hover:right-0 -right-[100%] bg-white/90 backdrop-blur rounded">
                <p className="text-xl font-extrabold">TogetherWithAbhi</p>
                <p className="text-gray-500 font-semibold">
                  TogetherWithAbhi -
                  <span className="font-medium"> 15/03/2021</span>
                </p>
                <p className="italic tracking-wide font-[300]">
                  Thanks to the entire Avgna team which supported in realization
                  of my dream of teaching and training by supporting in social
                  media marketing and campaign development. Thanks for listening
                  to the needs
                </p>
                {/* <div className="flex items-center space-x-2 my-2">
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaFacebookF fill="#3b5998" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaTwitter fill="#00acee" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaLinkedin fill="#0072b1" />
                  </span>
                </div> */}
              </div>
            </div>
            <div className="w-[300px] xs:w-[260px] group rounded relative overflow-hidden">
              <div className="relative">
              <img className="w-full h-[260px] blur-[2px]" src={loved} alt="equiczar" />
              <p className="absolute top-0 z-10 text-4xl text-gray-100 font-semibold italic flex justify-center items-center h-full w-full">Equiczar</p>
              </div>
              <div className="w-full h-full transition-all flex flex-col justify-center z-40 p-4 absolute top-0 group-hover:right-0 -right-[100%] bg-white/90 backdrop-blur rounded">
                <p className="text-xl font-extrabold">Loved It</p>
                <p className="text-gray-500 font-semibold">
                  Equiczar -<span className="font-medium"> 04/04/2022</span>
                </p>
                <p className="font-medium italic tracking-wide">
                  Huge appreciation for Avgna to work with us hand in hand to
                  develop smart learning courses for Equiczar.
                </p>
                {/* <div className="flex items-center space-x-2 my-2">
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaFacebookF fill="#3b5998" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaTwitter fill="#00acee" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaInstagram className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  </span>
                  <span className="rounded-full border p-2 bg-white">
                    <FaIcons.FaLinkedin fill="#0072b1" />
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
