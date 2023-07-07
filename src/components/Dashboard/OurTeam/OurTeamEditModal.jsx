import axios from "axios";
import React, { useState } from "react";

const OurTeamEditModal = ({ editOurModalOpen, editData, editID }) => {
  // ONCHANGE HANDLER
  const [editBody, setEditBody] = useState({
    username: editData.name,
    role: editData.role,
    image: editData.image,
    facebook: editData.facebookUrl,
    twitter: editData.twitterUrl,
    instagram: editData.instagramUrl,
    linkedin: editData.linkedinUrl,
    description: editData.description,
  });
  const editModalOnchangeHandler = (e) => {
    const { name, value } = e.target;
    setEditBody({ ...editBody, [name]: value });
  };

  // UPDATE ABOUT CONTENT DATA
  const updateTeamMember = async () => {
    await axios
      .put(`https://avgna.onrender.com/api/v1/team/${editID}`, editBody)
      .then((res) => {
        console.log(res.data);
        editOurModalOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // CLOSE UPDATE MODAL
  const closeUpdateTeamModal = () => {
    editOurModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
        <div className=" w-3/5 bg-white rounded relative p-1">
          <div className="flex font-semibold px-2 justify-between items-center bg-green-500 rounded-t">
            <p className="text-white">Update Team</p>
            <span
              onClick={() => {
                closeUpdateTeamModal();
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
              name="username"
              placeholder="Name*"
              value={editBody.username}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <input
              className="border w-full"
              type="text"
              name="role"
              placeholder="Role*"
              value={editBody.role}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <input
              className="border w-full"
              type="text"
              name="image"
              placeholder="Image*"
              value={editBody.image}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <div className="flex justify-between items-center">
              <input
                className="border w-[45%]"
                type="text"
                name="facebook"
                placeholder="Facebook link"
                value={editBody.facebook}
                onChange={(e) => {
                  editModalOnchangeHandler(e);
                }}
              />
              <input
                className="border w-[50%]"
                type="text"
                name="twitter"
                placeholder="Twitter link"
                value={editBody.twitter}
                onChange={(e) => {
                  editModalOnchangeHandler(e);
                }}
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                className="border w-[45%]"
                type="text"
                name="instagram"
                placeholder="Instagram link"
                value={editBody.instagram}
                onChange={(e) => {
                  editModalOnchangeHandler(e);
                }}
              />
              <input
                className="border w-[50%]"
                type="text"
                name="linkedin"
                placeholder="LinkdeIn link"
                value={editBody.linkedin}
                onChange={(e) => {
                  editModalOnchangeHandler(e);
                }}
              />
            </div>
            <textarea
              className="border w-full"
              type="textarea"
              name="description"
              placeholder="Description*"
              rows={3}
              cols={3}
              value={editBody.description}
              onChange={(e) => {
                editModalOnchangeHandler(e);
              }}
            />
            <button
              onClick={() => {
                updateTeamMember();
              }}
              type="button"
              className="button button--action"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurTeamEditModal;
