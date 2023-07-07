import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../../../assets/images/avgnaLogo.png";

const OurTeam = () => {
  return (
    <React.Fragment>
      <div className="max-w-maxWidth mx-auto mb-20 block  md:flex relative items-center">
        <div className="sm:w-full lg:mx-0 md:w-[55%] bg-[#eee] lg:pt-16 p-5 md:p-16 pb-0 lg:px-20 overflow-hidden">
          <div className="relative mb-6">
            <p className="text-2xl text-[#00c7d6]">
              Our Team &nbsp;
              <span className="text-gray-400  text-[18px]">
                Highlights of just a few !
              </span>
            </p>
            <h2 className="font-bold text-3xl lg:text-4xl relative before:absolute before:bg-[#00c7d4] before:w-20 before:top-9 before:left-[145px] lg:before:top-10  before:h-1">
              We take pride in our skilled team of experts
            </h2>
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
              <p className="text-[15px] lg:font-normal sm:pr-6 lg:pr-0">
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
                <h2>Geetanjali Sharma</h2>
                <span>IT Department</span>
              </div>
            </div>
            <div className="text-left font-normal pr-3">
              <p className="text-[15px] lg:font-normal sm:pr-6 lg:pr-0">
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
                <h2>Geetanjali Sharma</h2>
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
