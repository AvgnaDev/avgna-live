import React from "react";
import Card from "../home/card/Card";

const Services = () => {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div className="">
        <div className="text-center relative my-6">
          <p className="text-xl text-[#00c7d6]">Featured services</p>
          <h2 className="text-2xl w-full sm:text-4xl px-4 sm:w-4/5 mx-auto font-bold relative before:absolute before:bg-[#00c7d4] before:w-28 before:top-8 sm:before:top-10  before:h-1">
            Building a good customer experience does not happen by accident,It
            happens by design.
          </h2>
        </div>
        <Card />
      </div>
    </React.Fragment>
  );
};

export default Services;
