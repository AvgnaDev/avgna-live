import React from "react";
import Card from "../home/card/Card";
import ServiceCard from "./ServiceCard";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div className="">
        <div className="text-center relative my-6">
          <h2 className=" text-[#00c7d6]">Featured services</h2>
          <p className="w-full sm:text-xl px-4 sm:w-4/5 mx-auto relative">
            Building a good customer experience does not happen by accident, it
            happens by design.
          </p>
        </div>
        {/* <Card /> */}
        <ServiceCard/>
      </div>
    </React.Fragment>
  );
};

export default Services;
