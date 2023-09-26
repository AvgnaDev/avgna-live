import React from "react";
import bannerImg from "../../../assets/images/bannerImgg.jpeg";
// import aboutPages from '../../../assets/images/aboutpage.avif'
import aboutPages from '../../../assets/images/aboutpagee.png'

// import programmerImg from "../../../assets/images/programmer.jfif";
// import bbvid from "../../../assets/videos/backgroundVideo.mp4";
import { Typewriter } from "react-simple-typewriter";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <React.Fragment>
      <div
        className="h-[400px] sm:h-screen mx-auto bg-no-repeat relative"
        style={{
          backgroundImage: `url(${aboutPages})`,
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',

        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full h-full flex">
          <div className="w-full h-full flex justify-center items-center flex-col pb-8 sm:p-8">
            <div className="text-white/90 sm:pl-0 mb-4">
              <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold my-4">
                Accomplish <br />
                <p className="drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 text-center">
                  <Typewriter
                    words={["Ideas", "Growth", "Success", "Fast"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </h1>
              {/* <Link
                to="/avgna-live/contact"
                className="button button--action items-center inline-flex mb-12"
              >
                Contact us
                <span>
                  <MdIcons.MdOutlineKeyboardArrowRight className="text-xl pt-1" />
                </span>
              </Link> */}
            </div>
          </div>
          {/* <div className="hidden w-1/2 h-full relative md:flex justify-center items-start pb-12 z-10">
            <div className="relative h-[90%] w-[45%] bg-gray-100/60 backdrop-blur-sm">
              <div className="w-full h-full bg-[#00c7d4ff] absolute top-8"></div>
              <div className="w-full h-full bg-red-500 absolute left-4 top-4">
                <img
                  className="bg-cover h-full brightness-150 shadow-[0_0px_25px_5px_rgba(255,255,255,0.5)]"
                  src={programmerImg}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
