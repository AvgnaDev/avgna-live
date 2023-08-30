import React from "react";
import augtrans from "../../../assets/images/augtrans.png";
import ethxsoft from "../../../assets/images/ethxsoft.png";
import razrcorp from "../../../assets/images/razrcorp.png";
import anyology from "../../../assets/images/anyology.png";
import medicsverse from "../../../assets/images/medicsverse.png";
import bison from "../../../assets/images/bison.png";
import remedi360 from "../../../assets/images/remedi360.png";

const WhoServed = () => {
  return (
    <React.Fragment>
      <div className="pt-20 pb-4">
        <div className="text-center relative pb-8">
          <h2 className="text-[#00c7d6]">Our collaborations</h2>
          <p className="text-2xl font-bold relative before:absolute before:bg-[#00c7d4] before:w-36 before:top-7  before:h-1">
            Partnerships for Innovation & Mutual Success
          </p>
        </div>
        <div className=" mb-6">
          <div className="flex flex-wrap justify-between gap-5 sm:px-5 w-full">
            <div
              className="bg-transparent w-[204px] text-center hover:shadow-xl hover:shadow-sky-200 p-2 flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="200"
            >
              <div className="w-full h-full text-center flex flex-col justify-center">
                <img className="w-full" src={augtrans} />
              </div>
              <p className="text-xl">Augtrans</p>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-2 hover:shadow-xl hover:shadow-sky-200  flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <div className="w-full h-full text-center flex flex-col justify-center">
                <img className="w-full" src={ethxsoft} />
              </div>
              <p className="text-xl">Ethx Softcon</p>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-2 hover:shadow-xl hover:shadow-sky-200  flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="w-full h-full text-center flex flex-col justify-center">
                <img className="w-full" src={razrcorp} />
              </div>
              <p className="text-xl">Razrcorp</p>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-2 hover:shadow-xl hover:shadow-sky-200 flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <div className="w-full text-center h-full flex flex-col justify-center">
                <img className="w-full" src={anyology} />
              </div>
              <p className="text-xl">Anyology</p>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-2 hover:shadow-xl hover:shadow-sky-200  flex flex-col justify-center items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <div className="w-full h-full text-center">
                <img className="w-full h-full" src={bison} />
              </div>
              <p className="text-xl">Bison</p>
            </div>



            {/* <div
              className="bg-transparent w-[204px] text-center p-4 hover:shadow flex flex-col items-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <div className="flex flex-col items-center h-full justify-center w-full text-center py-2 mt-4 ">
                <img className="w-full py-4" src={exthxsoft} />
              <p className="text-xl my-4">Exthxsoft</p>
              </div>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-4 hover:shadow flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="flex flex-col items-center h-full justify-center w-full text-center py-2 mt-4 ">
                <img className="w-full py-4" src={razrcorp} />
              <p className="text-xl my-4">Razrcorp</p>
              </div>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-4 hover:shadow flex flex-col items-center"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              <div className="flex flex-col items-center h-full justify-center w-full text-center">
                <img className="w-full py-4" src={anyology} />
              <p className="text-xl my-4">Anyology</p>
              </div>
            </div>
            <div
              className="bg-transparent w-[204px] text-center p-4 hover:shadow flex flex-col items-center"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="flex justify-center w-full text-center">
                <img className="w-[90%]" src={bison} />
              </div>
              <p className="text-xl my-4">Bison</p>
            </div> */}


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
