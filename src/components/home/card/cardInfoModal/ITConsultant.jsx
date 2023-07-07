import React from "react";

const ITConsultant = ({ ITConsultantModal }) => {
  const modalClose = () => {
    ITConsultantModal(false);
  };
  return (
    <React.Fragment>
      <div
        onClick={modalClose}
        className="fixed z-50 inset-0 bg-black/70 flex justify-center h-full items-center w-full "
      >
        <div className="w-[90%] xs:w-[80%] mx-auto md:w-3/4 lg:w-1/2 bg-white p-8 rounded relative">
          <span
            onClick={modalClose}
            className="absolute right-6 top-4 text-2xl block text-right cursor-pointer font-semibold"
          >
            X
          </span>
          <h2 className="font-bold my-4">
            IT Consulting, Advisory and Training
          </h2>
          <p>
            Get expert advice and consulting from our large pool of consultants
            skilled in technical assessment, strategy development and digital
            transformation projects.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ITConsultant;
