import React from "react";
import Pattern from "../../assets/images/pattern.jfif";

const BusinessGrowing = () => {
  return (
    <div className="flex items-center bg-white">
      <img src={Pattern} className="w-[250px] h-[190px]" />
      <h2 className="absolute sm:relative text-center text-gray-400 xs:text-black text-[25px] sm:text-4xl font-bold  py-2 px-5 sm:px-8">
        Our multi-varied
        <span className="text-[#00c7d4] uppercase"> Services and Products</span>
      </h2>
    </div>
  );
};

export default BusinessGrowing;
