import React, { useState } from "react";
import AboutUsTable from "../../components/Dashboard/AboutUs/AboutUsTable";
import AboutModal from "../../components/Dashboard/AboutUs/AboutModal";
import useSWR from "swr";
import axios from "axios";
import Spinner from "../../Spinner";

const About = () => {
  const [aboutModalStatus, setAboutModalStatus] = useState(false);
  const aboutModalOpen = () => {
    setAboutModalStatus(!aboutModalStatus);
  };

  // GET ALL CONTENT OF ABOUT
  const [aboutContent, setAboutContent] = useState([]);

  //  SWR APPLY HERE
  const URL = `https://avgna.onrender.com/api/v1/about`;
  const fetcher = (url) =>
    axios.get(url).then((res) => setAboutContent(res.data));
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading || data)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Spinner /> Loading...
      </div>
    );

  return (
    <React.Fragment>
      <div className="px-4">
        <div className="text-right w-full my-4">
          <button
            onClick={() => {
              aboutModalOpen();
            }}
            className={`button button--action ${
              aboutContent.length >= 1
                ? "cursor-not-allowed opacity-20"
                : "cursor-pointer"
            }`}
            disabled={aboutContent.length >= 1 ? true : false}
          >
            Add About
          </button>
        </div>
        <div className="shadow bg-gray-100 w-full h-[440px] overflow-y-auto mb-2 p-2">
          <AboutUsTable aboutContent={aboutContent} />
        </div>
      </div>
      {aboutModalStatus && (
        <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
          <AboutModal aboutModalOpen={aboutModalOpen} fetcher={fetcher} />
        </div>
      )}
    </React.Fragment>
  );
};

export default About;
