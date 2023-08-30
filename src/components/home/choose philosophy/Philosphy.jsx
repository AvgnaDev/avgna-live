import React, { useState } from "react";
import Meeting from "../../../assets/images/meeting.jpeg";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import VideoPlay from "./videoPlayModal/VideoPlay";

const Philosphy = () => {
  const [videoDecide, setVideoDecide] = useState(false);
  const videoPlay = () => {
    setVideoDecide(!videoDecide);
  };
  return (
    <React.Fragment>
      <div className="max-w-maxWidth mx-auto relative shadow">
        <div className="w-full lg:w-[72%] ">
          <div className="relative">
            <img src={Meeting} alt="avgna-meeting" className="w-full" />
            <div className="absolute bg-black/50 w-full h-full inset-0"></div>

             {/* PLAY BUTTON */}

            {/* <div className="hidden sm:block absolute bottom-0 sm:bottom-16 lg:bottom-24 right-20 p-2 bg-[#00c7d4]/50 rounded-full animate-customPing">
              <div
                onClick={videoPlay}
                className="p-6 bg-[#00c7d4] flex rounded-full cursor-pointer"
              >
                <FaIcons.FaPlay className="text-4xl justify-center items-center text-white" />
              </div>
            </div> */}
          </div>
          <div className="px-6 sm:px-10 py-12 flex flex-wrap gap-4">
            <div
              className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
              data-aos="fade-right"
              data-aos-delay="20"
              data-aos-duration="2000"
            >
              <div className="flex items-center text-xl">
                <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                <h3 className="font-semibold">Our Mission</h3>
              </div>
              <p className="tracking-wide font-[300]">
                AVGNA ‘Avighna’ (अविघ्न) literally meaning 'obstacle remover' is
                our purpose and philosophy to go extra mile in supporting our
                customers to remove their technology obstacles and enabling
                their business growth.
              </p>
            </div>
            <div
              className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <div className="flex items-center text-xl">
                <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                <h3 className="font-semibold">Our vision</h3>
              </div>
              <p className="tracking-wide font-[300]">
                Avgna aims to become a trustful Digital Partner for end to end
                realisation of client's business goals with full integrity and
                fairness.
              </p>
            </div>
            <div
              className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
              data-aos="flip-down"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <div className="flex items-center text-xl">
                <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                <h3 className="font-semibold">Custom Delivery</h3>
              </div>
              <p className="tracking-wide font-[300]">
                The world of technology can be fast-paced and scary. That's why
                our goal is to provide an experience that is tailored to your
                company's needs. No matter the budget, we pride ourselves on
                providing professional customer service.
              </p>
            </div>
            <div
              className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <div className="flex items-center text-xl">
                <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                <h3 className="font-semibold">Competency</h3>
              </div>
              <p className="tracking-wide font-[300]">
                With resources skilled in future proof technologies, consultants
                with expertise across multiple domains, presence across multiple
                geographies and experienced pool of tech stalwarts, Avgna has
                the best to offer.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-[35%] bg-gradient-to-r from-gray-500 to-gray-300 h-full absolute top-0 -z-10 -right-0 lg:-right-0 xl:-right-0"></div>
        <div className="text-white absolute right-1 top-1 sm:top-14 lg:w-1/2 font-bold p-2 sm:p-4">
          <p className="text-[#00c7d4ff] px-4 pt-0 sm:pt-2 py-2 md:text-2xl">Our USP</p>
          <div className="relative mx-auto">
            <h2 className="leading-[1.2] sm:leading-[1.3] font-medium md:font-semibold text-[15.5px] xs:text-[25px] sm:text-[30px] lg:text-[22px] backdrop-blur-lg bg-white/10 max-w-max p-3 xs:p-4 rounded sm:tracking-wider">
              Avgna caters to clients of all sizes and needs with similar
              professionalism and transparency leveraging resourcefulness,
              forward-looking enigma and addressing client's needs by getting
              into their shoes.
            </h2>
            <div className="hidden lg:block absolute animate-scaling bg-blue-500/25 rounded-full w-52 h-52 top-0 left-4 filter blur-xl"></div>
            <div className="hidden lg:block absolute animate-scaling bg-gray-500/25 rounded-full w-52 h-52 top-0 right-16 filter blur-xl"></div>
            <div className="hidden lg:block absolute animate-tranlating bg-yellow-500/25 rounded-full w-52 h-52 top-0 left-32 filter blur-xl"></div>
          </div>
          <div className="hidden lg:block w-1/2 p-4 right-4 my-20 absolute space-y-10">
            <div className="flex items-start space-x-4 ">
              <FaIcons.FaUserFriends className="text-5xl text-[#00c7d4]" />
              <div>
                <h2>3+</h2>
                <p className="uppercase text-white/40 font-normal">Products</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaIcons.FaFlag className="text-5xl text-[#00c7d4]" />
              <div>
                <h2>20+</h2>
                <p className="uppercase text-white/40 font-normal">
                  Technology expertise
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 ">
              <FaIcons.FaBookOpen className="text-5xl text-[#00c7d4]" />
              <div>
                <h2>3+</h2>
                <p className="uppercase text-white/40 font-normal">
                  Geographical Presence
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaIcons.FaHandshake className="text-5xl text-[#00c7d4]" />
              <div>
                <h2>5+</h2>
                <p className="uppercase text-white/40 font-normal">
                  Digital PARTNERSHIPS
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {videoDecide && <VideoPlay videoPlay={videoPlay} />} */}
      </div>
    </React.Fragment>
  );
};
export default Philosphy;
