import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../../../assets/images/avgnaLogo.png";
const OurTeam = () => {
  return (
    <React.Fragment>
      <div className="max-w-maxWidth mx-auto mb-8 block  md:flex relative items-center">
        <div className="sm:w-full lg:mx-0 md:w-[55%] bg-gradient-to-r from-sky-100/[0.75] to-sky-100 lg:pt-16 p-5 md:p-16 pb-0 lg:px-20 overflow-hidden">
          <div className="relative mb-6">
            <h2 className=" text-[#00c7d6]">
              Our Team &nbsp;
              <span className="text-gray-400  text-[18px]">
                Highlights of just a few !
              </span>
            </h2>
            <p className="text-2xl font-bold lg:text-xl relative before:absolute before:bg-[#00c7d4] before:w-14 before:top-9 before:left-[85px] lg:before:top-7  before:h-1">
              We take pride in our skilled team of experts
            </p>
          </div>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            stopOnHover={false}
            autoPlay={true}
            showThumbs={false}
            showArrows={false}
          >
            <div className="text-left font-normal pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
              <p className="text-[15px] lg:font-normal sm:pr-6 lg:pr-0 italic text-sm">
              {/* <sub className="text-5xl text-blue-300">“</sub> */}
                First of all i would like to sincerely thank the Avgna team for
                creating impact through their actions. Pranay and his team were
                not only available to complete the task they had undertaken but
                also shown their enthusiastic partipation on other activities of
                our interest. It was really difficult to work during covid days
                and that too for a start up like EduMeasy, but their commitments
                had never let down in anyway. There is no doubt that the young
                Avgna team has inspired us through their commitments,
                enthusiastic participation and innovative approach of work. I
                recommend Avgna to anyone who is looking for an efficient
                customised business solution.
              </p>
              <div className="font-bold my-4">
                <p className="text-xl">Geetanjali Sharma</p>
                <span>IT Department</span>
              </div>
            </div>
            <div className="text-left font-normal pr-3 relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
              <p className="text-[15px] lg:font-normal sm:pr-6 lg:pr-0 italic inline-block text-sm">
              {/* <sub className="text-5xl text-blue-300">“</sub> */}
               First of all i would like to sincerely thank the Avgna team for
                creating impact through their actions. Pranay and his team were
                not only available to complete the task they had undertaken but
                also shown their enthusiastic partipation on other activities of
                our interest. It was really difficult to work during covid days
                and that too for a start up like EduMeasy, but their commitments
                had never let down in anyway. There is no doubt that the young
                Avgna team has inspired us through their commitments,
                enthusiastic participation and innovative approach of work. I
                recommend Avgna to anyone who is looking for an efficient
                customised business solution.
              </p>
              <div className="font-bold my-4">
                <p className="text-xl">Geetanjali Sharma</p>
                <span>IT Department</span>
              </div>
            </div>
          </Carousel>
        </div>
        {/* Right image */}
        <div className="hidden md:block sm:w-[45%] absolute right-6">
          <img
            className="h-[500px]"
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="testimonial"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute w-[140px] h-[140px] bg-[#eee] rounded-full bottom-[35%] -left-16 p-3">
            <img src={logo} />
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default OurTeam;
