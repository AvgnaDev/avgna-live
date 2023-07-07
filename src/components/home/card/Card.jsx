import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import remedi360 from "../../../assets/images/remedi360.png";
import medicsverse from "../../../assets/images/medicsverse.png";
import bison from "../../../assets/images/bison.png";
import SoftwareDevelopment from "./cardInfoModal/SoftwareDevelopment";
import ITSupport from "./cardInfoModal/ITSupport";
import ITConsultant from "./cardInfoModal/ITConsultant";
import VideoPlay from "./videoPlayModal/VideoPlay";

const Card = () => {
  const [softwareDeveloper, setSoftwareDeveloper] = useState(false);
  const softwareDeveloperModal = () => {
    setSoftwareDeveloper(!softwareDeveloper);
  };
  const [ITSupports, setITSupports] = useState(false);
  const ITSupportModal = () => {
    setITSupports(!ITSupports);
  };
  const [ITConsultants, setITConsultants] = useState(false);
  const ITConsultantModal = () => {
    setITConsultants(!ITConsultants);
  };

  // PRODUCT VIDEO
  const [videoDecide, setVideoDecide] = useState(false);
  const productVideo = () => {
    setVideoDecide(!videoDecide);
  };
  return (
    <React.Fragment>
      <div className="max-w-maxWidth mx-auto py-4 text-center relative overflow-hidden">
        <div className="flex p-4 justify-center xl:justify-normal  gap-6 flex-wrap mb-4">
          <div className="rounded w-[350px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="h-[150px] rounded-t"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDIj4ZSHqeJmuNv1Lez_x5QTq2f6M6tw65A&usqp=CAU"
            />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">
                Software Development
              </p>
              <button
                onClick={softwareDeveloperModal}
                className="button button--action"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="rounded w-[350px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="h-[150px] rounded-t"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZOZ9gaAYTz7eKzQFpC_-bbPYcivgBr6JXA&usqp=CAU"
            />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">
                IT Support
              </p>
              <button
                onClick={ITSupportModal}
                className="button button--action"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="rounded w-[350px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="h-[150px] rounded-t"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOXPiJjoln0izM-x90n_YAUfDXKVnfEtVtg&usqp=CAU"
            />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">
                IT Consulting, Advisory and Training
              </p>
              <button
                onClick={ITConsultantModal}
                className="button button--action"
              >
                Learn more
              </button>
            </div>
          </div>
          {/* PRODUCTS */}
          <div className="rounded w-[350px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img className="h-[180px] rounded-t" src={remedi360} />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">
                ReMedi360
              </p>
              <button onClick={productVideo} className="button button--action">
                Learn more
              </button>
            </div>
          </div>
          <div className="rounded w-[350px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img className="h-[180px] w-[80%] mx-auto rounded-t" src={bison} />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">BISON</p>
              <button className="button button--action">Learn more</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="button button--action my-4 flex items-center">
            More Services
            <MdIcons.MdOutlineKeyboardArrowRight className="text-xl pt-1" />
          </button>
        </div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-300 to-blue-200 -z-10 sm:skew-x-[-230deg]"></div>
        {softwareDeveloper && (
          <SoftwareDevelopment
            softwareDeveloperModal={softwareDeveloperModal}
          />
        )}
        {ITSupports && <ITSupport ITSupportModal={ITSupportModal} />}
        {ITConsultants && (
          <ITConsultant ITConsultantModal={ITConsultantModal} />
        )}
        {videoDecide && <VideoPlay productVideo={productVideo} />}
      </div>
    </React.Fragment>
  );
};

export default Card;
