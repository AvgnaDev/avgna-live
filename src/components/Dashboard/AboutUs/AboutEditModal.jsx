import axios from "axios";
import React, { useState } from "react";

const AboutEditModal = ({ editModalClose, editData, idForEdit }) => {
  // ONCHANGE HANDLER
  const [editBody, setEditBody] = useState({
    about: editData.about,
    experiance: editData.experiance,
  });

  const editModalOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setEditBody({ ...editBody, [name]: value });
  };

  // CLOSE --> OPEN ABOUT MODAL
  const closeEditModal = () => {
    editModalClose(false);
  };

  // UPDATE ABOUT CONTENT DATA
  const updateAboutData = async () => {
    await axios
      .put(`https://avgna.onrender.com/api/v1/about/${idForEdit}`, editBody)
      .then((res) => {
        console.log(res.data);
        closeEditModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
        <div className=" w-3/5 bg-white rounded p-8 relative">
          <div className="flex justify-between items-center py-3 px-4">
            <p className="text-2xl font-semibold uppercase">
              Update About Company
            </p>
            <span
              onClick={() => {
                closeEditModal();
              }}
              className="text-right block text-xl hover:bg-red-400 transition-all hover:text-white cursor-pointer font-bold px-3 rounded"
            >
              X
            </span>
          </div>
          <form className="py-2 relative">
            <textarea
              className="border w-full"
              type="textarea"
              name="about"
              placeholder="Say something about..."
              value={editBody.about}
              rows={4}
              cols={4}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <input
              className="border w-full"
              type="text"
              name="experiance"
              placeholder="Company experiance"
              value={editBody.experiance}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <button
              onClick={() => {
                updateAboutData();
              }}
              type="button"
              className="button button--action my-3"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutEditModal;
