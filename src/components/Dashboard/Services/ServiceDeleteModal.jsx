import axios from "axios";
import React from "react";

const ServiceDeleteModal = ({ deleteID, closeDeleteModal }) => {
  const deleteConfirm = async () => {
    await axios
      .delete(`https://avgna.onrender.com/api/v1/service/${deleteID}`)
      .then((res) => {
        console.log(res.data);
        closeDeleteModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <div>
        <div
          id="authentication-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0  z-50 w-full inset-0 h-modal h-full"
        >
          <div className="h-screen hover:cursor-pointer bg-black/50"></div>
          <div className="p-3 absolute w-full sm:4/5 mx-auto inset-y-20 flex justify-center items-center">
            {/* Modal content */}
            <div className="p-0.5 relative w-full sm:w-4/5 md:w-1/2 bg-white rounded-lg shadow dark:bg-gray-700 glassEffect">
              <div className="flex justify-between bg-red-500 rounded-t-lg items-center">
                <h2 className="pl-4 text-white text-lg tracking-wide">
                  Avgna Alert
                </h2>
                <button
                  onClick={() => {
                    closeDeleteModal();
                  }}
                  type="button"
                  className="text-black w-14 font-semibold text-lg bg-transparent hover:bg-red-600 hover:text-white rounded p-2 ml-auto items-center dark:hover:text-white"
                >
                  X
                </button>
              </div>
              <div className="px-3 pb-4 space-y-4 lg:px-8 sm:pb-6 xl:pb-8">
                <p className="text-md font-semibold sm:text-lg sm:font-normal mt-4 font-Poppins">
                  Are you sure you want to delete row ?
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      deleteConfirm();
                    }}
                    className="focus:ring-4 mr-4 items-center flex focus:outline-none focus:ring-red-300 hover:bg-red-700 shadow-md shadow-gray-600 font-semibold bg-red-500 px-4 py-2 rounded text-white"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => {
                      closeDeleteModal();
                    }}
                    className="focus:ring-4 items-center flex focus:outline-none focus:ring-white-300 bg-white shadow-md shadow-gray-600 font-semibold px-4 py-2 rounded text-black"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServiceDeleteModal;
