import React, { useState } from "react";
import axios from "axios";
import { notificationStatus } from "../../../atom";
import { useRecoilState } from "recoil";

const ServicesModal = ({ serviceModalOpen }) => {
  // ONCHANGE HANDLER
  const [services, setServices] = useState({
    title: "",
    image: "",
    description: "",
  });
  const serviceModalHandler = (e) => {
    const { name, value } = e.target;
    setServices({ ...services, [name]: value });
  };
  // GET FULL INFORMATION OF ABOUT BODY
  const addServiceMember = () => {
    const serviceData = {
      title: services.title,
      image: services.image,
      description: services.description,
    };
    axios
      .post(`https://localhost:9090/api/v1/service`, serviceData)
      .then((resp) => {
        console.log(resp.data);
        notificationStatus(true);
        closeServiceModal();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // CLOSE --> OPEN TEAM MODAL
  const closeServiceModal = () => {
    serviceModalOpen(false);
  };
  return (
    <React.Fragment>
      <div className=" w-3/5 bg-white rounded relative p-1">
        <div className="flex font-semibold px-2 justify-between items-center bg-green-500 rounded-t">
          <p className="text-white">Add Services</p>
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
            value={services.title}
            onChange={(e) => {
              serviceModalHandler(e);
            }}
          />
          <input
            className="border w-full"
            type="text"
            name="image"
            placeholder="Image*"
            value={services.image}
            onChange={(e) => {
              serviceModalHandler(e);
            }}
          />
          <textarea
            className="border w-full"
            type="textarea"
            name="description"
            placeholder="Description*"
            rows={5}
            cols={5}
            value={services.description}
            onChange={(e) => {
              serviceModalHandler(e);
            }}
          />
          <button
            onClick={() => {
              addServiceMember();
            }}
            type="button"
            className="button button--action"
          >
            Publish
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ServicesModal;
