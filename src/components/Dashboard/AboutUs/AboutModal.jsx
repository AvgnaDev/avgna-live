import React, { useState } from "react";
import axios from "axios";
const AboutModal = ({ aboutModalOpen, fetcher }) => {
  // ONCHANGE HANDLER
  const [aboutBody, setAboutBody] = useState({
    about: "",
    experiance: "",
  });
  const aboutModalHandler = (e) => {
    const { name, value } = e.target;
    setAboutBody({ ...aboutBody, [name]: value });
  };

  // GET FULL INFORMATION OF ABOUT BODY
  const addTeamMember = () => {
    const aboutData = {
      about: aboutBody.about,
      experiance: aboutBody.experiance,
    };

    axios
      .post(`https://avgna.onrender.com/api/v1/about`, aboutData)
      .then((resp) => {
        console.log(resp.data);
        closeAboutModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // CLOSE --> OPEN ABOUT MODAL
  const closeAboutModal = () => {
    aboutModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className=" w-3/5 bg-white rounded p-8 relative">
        <div className="flex justify-between items-center py-3 px-4">
          <p className="text-2xl font-semibold uppercase">About Company</p>
          <span
            onClick={() => {
              closeAboutModal();
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
            value={aboutBody.about}
            rows={4}
            cols={4}
            onChange={(e) => {
              aboutModalHandler(e);
            }}
          />
          <input
            className="border w-full"
            type="text"
            name="experiance"
            placeholder="Company experiance"
            value={aboutBody.experiance}
            onChange={(e) => {
              aboutModalHandler(e);
            }}
          />
          <button
            onClick={() => {
              addTeamMember();
            }}
            type="button"
            className="button button--action my-3"
          >
            Publish
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AboutModal;
