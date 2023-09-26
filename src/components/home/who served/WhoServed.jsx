import React from "react";
import augtrans from "../../../assets/images/augtrans.png";
import ethxsoft from "../../../assets/images/ethxsoft.png";
import razrcorp from "../../../assets/images/razrcorp.png";
import anyology from "../../../assets/images/anyology.png";
import bison from "../../../assets/images/bison.png";

const WhoServed = () => {
  return (
    <React.Fragment>
      <div className="pt-20 pb-4">
        <div className="text-center relative pb-8">
          <h2 className="text-2xl sm:text-4xl text-[#00c7d6] px-3 sm:px-0">Our collaborations</h2>
          <p className="text-xl xs:text-2xl mt-4 sm:mt-0 relative"> {/*before:absolute before:bg-[#00c7d4] before:w-36 before:top-7 before:h-1*/}
            Partnerships for Innovation & Mutual Success
          </p>
        </div>
        <div className=" mb-6">
          <div className="flex flex-wrap justify-center sm:justify-between gap-5 sm:px-5 w-full">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhoServed;
