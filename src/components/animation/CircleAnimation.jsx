import React from "react";

const CircleAnimation = ({ position }) => {
  return (
    <div>
      <div
        className={`absolute ${position} animate-rotatingCricle w-14 h-14 p-4 rounded-full bg-red-100`}
      ></div>
    </div>
  );
};

export default CircleAnimation;
