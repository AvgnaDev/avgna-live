import React from "react";
import augtrans from "../../../assets/images/augtrans.png";
import exthxsoft from "../../../assets/images/ethxsoft.png";
import razrcorp from "../../../assets/images/razrcorp.png";
import anyology from "../../../assets/images/anyology.png";
import medicsverse from "../../../assets/images/medicsverse.png";
import bison from "../../../assets/images/bison.png";
import remedi360 from "../../../assets/images/remedi360.png";

const WhoServed = () => {
  return (
    <React.Fragment>
      <div className="pt-20 pb-4">
        <div className="text-center relative mb-12">
          <p className="text-xl text-[#00c7d6]">Our collaborations</p>
          <h2 className="font-bold relative before:absolute before:bg-[#00c7d4] before:w-28 before:top-10  before:h-1">
            Partnerships for Innovation & Mutual Success
          </h2>
        </div>
        <div className="max-w-maxWidth mx-auto my-6 py-8">
          <div className="flex flex-wrap justify-center gap-5 sm:pl-5 w-full">
            <div
              className="bg-white w-[204px] text-center p-4 shadow-sm"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1900"
            >
              <div className="flex justify-center w-full text-center py-2 mt-4">
                <img className="w-full" src={augtrans} />
              </div>
              <p className="text-xl my-4">Augtrans</p>
            </div>
            <div
              className="bg-white w-[204px] text-center p-4 shadow-sm"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex justify-center w-full text-center py-2 mt-4 ">
                <img className="w-full" src={exthxsoft} />
              </div>
              <p className="text-xl my-4">Exthxsoft</p>
            </div>
            <div
              className="bg-white w-[204px] text-center p-4 shadow-sm"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <div className="flex justify-center w-full text-center py-2 mt-4 ">
                <img className="w-full" src={razrcorp} />
              </div>
              <p className="text-xl my-4">Razrcorp</p>
            </div>
            <div
              className="bg-white w-[204px] text-center p-4 shadow-sm"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <div className="flex justify-center w-full text-center py-2 mt-4">
                <img className="w-full" src={anyology} />
              </div>
              <p className="text-xl my-4">anyology</p>
            </div>
            <div
              className="bg-white w-[204px] text-center p-4 shadow-sm"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1800"
            >
              <div className="flex justify-center w-full text-center">
                <img className="w-[90%]" src={bison} />
              </div>
              <p className="text-xl my-4">Bison</p>
            </div>
            {/* <div className="bg-white sm:w-[204px] text-center p-4 shadow-sm">
              <div className="flex justify-center w-full text-center py-2 mt-4 ">
                <img className="w-full" src={remedi360} />
              </div>
              <p className="text-xl my-4">ReMedi360</p>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoServed;
