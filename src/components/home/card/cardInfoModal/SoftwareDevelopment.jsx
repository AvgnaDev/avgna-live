import React from "react";

const SoftwareDevelopment = ({ softwareDeveloperModal }) => {
  const modalClose = () => {
    softwareDeveloperModal(false);
  };
  return (
    <React.Fragment>
      <div
        onClick={modalClose}
        className="fixed z-50 inset-0 bg-black/70 flex justify-center h-full items-center w-full "
      >
        <div className="w-[90%] xs:w-[80%] mx-auto md:w-3/4 lg:w-1/2 relative bg-white p-8 rounded">
          <span
            onClick={modalClose}
            className="absolute right-6 top-4 text-2xl block text-right cursor-pointer font-semibold"
          >
            X
          </span>
          <h2 className="font-bold my-4">Software Development</h2>
          <p>
            End to End development and delivery of software in fully agile
            fashion. We transform ideas into products.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SoftwareDevelopment;
