import React, { useState } from "react";
import ServicesModal from "../../components/Dashboard/Services/ServicesModal";
import ServicesTable from "../../components/Dashboard/Services/ServicesTable";
import useSWR from "swr";
import axios from "axios";
import Spinner from "../../Spinner";

const Services = () => {
  const [serviceModalStatus, setServiceModalStatus] = useState(false);
  const serviceModalOpen = () => {
    setServiceModalStatus(!serviceModalStatus);
  };

  // GET ALL CONTENT OF ABOUT
  const [serviceContent, setServiceContent] = useState([]);

  //  SWR APPLY HERE
  const URL = `http://localhost:9090/api/v1/services`;
  const fetcher = (url) =>
    axios.get(url).then((res) => setServiceContent(res.data));
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
              serviceModalOpen();
            }}
            className={`button button--action`}
          >
            Add Services
          </button>
        </div>
        <div className="shadow bg-gray-100 w-full h-[440px] overflow-y-auto mb-2 p-2">
          <ServicesTable serviceContent={serviceContent} />
        </div>
      </div>
      {serviceModalStatus && (
        <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
          <ServicesModal serviceModalOpen={serviceModalOpen} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Services;
