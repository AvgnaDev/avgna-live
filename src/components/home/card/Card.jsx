import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import remedi360 from "../../../assets/images/remedi360.png";
import medicsverse from "../../../assets/images/medicsverse.png";
import bison from "../../../assets/images/bison.png";
import SoftwareDevelopment from "./cardInfoModal/SoftwareDevelopment";
import ITSupport from "./cardInfoModal/ITSupport";
import ITConsultant from "./cardInfoModal/ITConsultant";
import VideoPlay from "./videoPlayModal/VideoPlay";
import softwareDev from "../../../assets/images/softwareDev.jpg"
import softwareDev1 from "../../../assets/images/softwareDev1.png"
import softwareDevv from "../../../assets/images/softwareDevv.jpg"
import support from "../../../assets/images/support.jpg"

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
        <div className="flex p-4 justify-center xl:justify-center gap-6 flex-wrap mb-4">
          <div className="group overflow-hidden relative rounded w-[300px] shadow hover:drop-shadow-xl bg-white">
            <img
              className="rounded-t"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDIj4ZSHqeJmuNv1Lez_x5QTq2f6M6tw65A&usqp=CAU"
              src={softwareDev1}
            />
            <div className="text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
              <p className="text-center py-2 text-2xl font-bold flex justify-center items-center h-full tracking-wider">
                Software Development
              </p>
              {/* <p>
                End to End development and delivery of software in fully agile
                fashion. We transform ideas into products.
              </p> */}
            </div>
          </div>
          <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="rounded-t h-full"
              src={support}
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZOZ9gaAYTz7eKzQFpC_-bbPYcivgBr6JXA&usqp=CAU"
            />
            <div className="text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
              <p className="text-center py-2 text-2xl font-bold flex justify-center items-center h-full tracking-wider">
                IT Support
              </p>
              {/* <p>
                Get hold of the expert IT professionals with broad experience,
                versatile technology and domain knowledge based on your needs with
                complete flexibillity
              </p> */}
            </div>
          </div>
          {/* <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="rounded-t"
              src={softwareDevv}
            />
            <div className="text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
              <p className="text-center py-2 text-xl font-bold flex items-center justify-center h-full">
                IT Consulting, Advisory, and Training
              </p>
            </div>
          </div> */}
          {/* PRODUCTS */}
          <div className="rounded w-[300px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
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
          {/* <div className="rounded w-[300px] hover:-translate-y-2 transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img className="h-[180px] w-[80%] mx-auto rounded-t" src={bison} />
            <div className="text-center p-6">
              <p className="text-center px-4 py-2 text-xl font-bold">BISON</p>
              <button className="button button--action">Learn more</button>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center">
          <button className="button button--action my-4 flex items-center">
            More Services
            <MdIcons.MdOutlineKeyboardArrowRight className="text-xl pt-1" />
          </button>
        </div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-100/[0.75] to-sky-100 -z-10 sm:skew-x-[-230deg]"></div>
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
