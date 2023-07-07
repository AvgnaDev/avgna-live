import React, { useState } from "react";
import OurTeamModal from "../../components/Dashboard/OurTeam/OurTeamModal";
import OurTeamTable from "../../components/Dashboard/OurTeam/OurTeamTable";
import Spinner from "../../Spinner";
import useSWR from "swr";
import axios from "axios";

const OurTeam = () => {
  const [teamModalStatus, setTeamModalStatus] = useState(false);
  const teamModalOpen = () => {
    setTeamModalStatus(!teamModalStatus);
  };

  // GET ALL CONTENT OF ABOUT
  const [ourTeamContent, setOurTeamContent] = useState([]);

  //  SWR APPLY HERE
  const URL = `https://avgna.onrender.com/api/v1/team`;
  const fetcher = (url) =>
    axios.get(url).then((res) => setOurTeamContent(res.data));
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
              teamModalOpen();
            }}
            className="button button--action"
          >
            New Add Team
          </button>
        </div>
        <div className="shadow bg-gray-100 w-full h-[440px] overflow-y-auto mb-2 p-2">
          <OurTeamTable ourTeamContent={ourTeamContent} />
        </div>
      </div>
      {teamModalStatus && (
        <div className="bg-black/50 absolute inset-0 w-full h-full z-20 flex justify-center items-center">
          <OurTeamModal teamModalOpen={teamModalOpen} />
        </div>
      )}
    </React.Fragment>
  );
};

export default OurTeam;
