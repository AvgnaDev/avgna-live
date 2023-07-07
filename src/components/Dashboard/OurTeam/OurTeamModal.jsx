import React, { useState } from "react";
import axios from "axios";

const OurTeamModal = ({ teamModalOpen }) => {
  // ONCHANGE HANDLER
  const [teamBody, setTeamBody] = useState({
    username: "",
    role: "",
    image: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    description: "",
  });
  const teamModalHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setTeamBody({ ...teamBody, [name]: value });
  };

  // GET FULL INFORMATION OF TEAM BODY
  const addTeamMember = () => {
    const TeamMember = {
      name: teamBody.username,
      role: teamBody.role,
      image: teamBody.image,
      facebookUrl: teamBody.facebook,
      instagramUrl: teamBody.instagram,
      twitterUrl: teamBody.twitter,
      linkedinUrl: teamBody.linkedin,
      description: teamBody.description,
    };

    axios
      .post(`https://avgna.onrender.com/api/v1/team`, TeamMember)
      .then((resp) => {
        console.log(resp.data);
        closeTeamModal();
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(teamBody);
  };

  // CLOSE --> OPEN TEAM MODAL
  const closeTeamModal = () => {
    teamModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className=" w-3/5 bg-white rounded relative p-1">
        <div className="flex font-semibold px-2 justify-between items-center bg-green-500 rounded-t">
          <p className="text-white">Add New Team</p>
          <span
            onClick={() => {
              closeTeamModal();
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
            value={teamBody.username}
            onChange={(e) => {
              teamModalHandler(e);
            }}
          />
          <input
            className="border w-full"
            type="text"
            name="role"
            placeholder="Role*"
            value={teamBody.role}
            onChange={(e) => {
              teamModalHandler(e);
            }}
          />
          <input
            className="border w-full"
            type="text"
            name="image"
            placeholder="Image*"
            value={teamBody.image}
            onChange={(e) => {
              teamModalHandler(e);
            }}
          />
          <div className="flex justify-between items-center">
            <input
              className="border w-[45%]"
              type="text"
              name="facebook"
              placeholder="Facebook link"
              value={teamBody.facebook}
              onChange={(e) => {
                teamModalHandler(e);
              }}
            />
            <input
              className="border w-[50%]"
              type="text"
              name="twitter"
              placeholder="Twitter link"
              value={teamBody.twitter}
              onChange={(e) => {
                teamModalHandler(e);
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <input
              className="border w-[45%]"
              type="text"
              name="instagram"
              placeholder="Instagram link"
              value={teamBody.instagram}
              onChange={(e) => {
                teamModalHandler(e);
              }}
            />
            <input
              className="border w-[50%]"
              type="text"
              name="linkedin"
              placeholder="LinkdeIn link"
              value={teamBody.linkedin}
              onChange={(e) => {
                teamModalHandler(e);
              }}
            />
          </div>
          <textarea
            className="border w-full"
            type="textarea"
            name="description"
            placeholder="Description*"
            value={teamBody.description}
            rows={3}
            cols={3}
            onChange={(e) => {
              teamModalHandler(e);
            }}
          />
          <button
            onClick={() => {
              addTeamMember();
            }}
            type="button"
            className="button button--action"
          >
            Add Team
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default OurTeamModal;
