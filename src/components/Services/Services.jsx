import React from "react";
import Card from "../home/card/Card";
import ServiceCard from "./ServiceCard";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div className="max-w-maxWidth mx-auto">
        <div className="text-center relative my-6">
          <h2 className=" text-[#00c7d6]">Featured services</h2>
          <p className="w-full text-xl xs:text-2xl px-4 relative">
          We work as a partner to your enterprise, understanding and fulfilling your IT needs
          </p>
        </div>
        {/* <Card /> */}
        <ServiceCard/>
      </div>
    </React.Fragment>
  );
};

export default Services;
