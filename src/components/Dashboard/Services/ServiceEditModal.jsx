import React, { useState } from "react";
import axios from "axios";

const ServicesEditModal = ({ editServiceModalOpen, editData, editID }) => {
  // ONCHANGE HANDLER
  const [editBody, setEditBody] = useState({
    title: editData.title,
    image: editData.image,
    description: editData.description,
  });
  const serviceEditModalHandler = (e) => {
    const { name, value } = e.target;
    setEditBody({ ...editBody, [name]: value });
  };
  // GET FULL INFORMATION OF ABOUT BODY
  const updateService = () => {
    axios
      .put(`https://avgna.onrender.com/api/v1/service/${editID}`, editBody)
      .then((resp) => {
        console.log(resp.data);
        editServiceModalOpen();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // CLOSE --> OPEN TEAM MODAL
  const closeServiceModal = () => {
    editServiceModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
        <div className=" w-3/5 bg-white rounded relative p-1">
          <div className="flex font-semibold px-2 justify-between items-center bg-green-500 rounded-t">
            <p className="text-white">Update Services</p>
            <span
              onClick={() => {
                closeServiceModal();
              }}
              className="text-right block text-xl hover:bg-red-400 transition-all hover:text-white py-1.5 cursor-pointer font-bold px-3 rounded"
            >
              X
            </span>
          </div>
          <form className="space-y-3 mt-3 p-8">
            <input
              className="border w-full"
              type="text"
              name="title"
              placeholder="Title*"
              value={editBody.title}
              onChange={(e) => {
                serviceEditModalHandler(e);
              }}
            />
            <input
              className="border w-full"
              type="text"
              name="image"
              placeholder="Image*"
              value={editBody.image}
              onChange={(e) => {
                serviceEditModalHandler(e);
              }}
            />
            <textarea
              className="border w-full"
              type="textarea"
              name="description"
              placeholder="Description*"
              rows={5}
              cols={5}
              value={editBody.description}
              onChange={(e) => {
                serviceEditModalHandler(e);
              }}
            />
            <button
              onClick={() => {
                updateService();
              }}
              type="button"
              className="button button--action"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesEditModal;
