import React from "react";

const ITSupport = ({ ITSupportModal }) => {
  const modalClose = () => {
    ITSupportModal(false);
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
          <h2 className="font-bold my-4">IT Support</h2>
          <p>
            Get hold of the expert IT professionals with broad experience,
            versatile technology and domain knowledge based on your needs with
            complete flexibillity
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ITSupport;
