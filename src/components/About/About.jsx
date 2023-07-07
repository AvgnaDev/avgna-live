import React, { useState } from "react";
import Spinner from "../../Spinner";
import useSWR from "swr";
import axios from "axios";

const About = () => {
  // const [aboutData, setAboutData] = useState([]);

  //  SWR APPLY HERE
  // const URL = `https://avgna.onrender.com/api/v1/about`;
  // const fetcher = (url) => axios.get(url).then((res) => setAboutData(res.data));
  // const { data, error, isLoading } = useSWR(URL, fetcher);
  // if (error) return <div>failed to load</div>;
  // if (isLoading || data)
  //   return (
  //     <div className="flex justify-center items-center h-[400px]">
  //       <Spinner /> Loading...
  //     </div>
  //   );
  return (
    <React.Fragment>
      <div className="bg-white relative rounded py-12 px-2 sm:px-16 md:px-24">
        <div className="p-4 relative">
          {/* <h2 className="relative horizontalLine font-bold max-w-[250px]">
            About Us
          </h2> */}
          <h2 className="font-bold relative before:absolute before:bg-[#00c7d4] before:w-24 before:top-10  before:h-1">
            About Us
          </h2>
          <div className="flex relative flex-col md:flex-row justify-bewteen items-center">
            {/* {aboutData.map((items) => {
              return ( */}
                <React.Fragment>
                  <div className="md:w-1/2 mt-4 relative z-20 overflow-hidden">
                    <p className="text-sm xs:text-xl">
                    Avgna holds professional experience in Digital transformation projects such as Cloud Adoption, Data strategization. Additionally, we specialize in developing PoCs for your initial ideas and ensure end to end delivery to Production such as mobile app development, e-commerce website, etc. However, our pool of consultants with vanilla technology experience such as java, dotnet, mainframes must not be underestimated.
                      {/* {items.about} */}
                    </p>
                    {/* Animation Triangle */}
                    <div className="absolute -z-10 -left-8 -top-12 animate-rotatingTriangle border-b-[50px] border-b-green-400/50 border-r-[25px] border-r-transparent  border-l-[25px] border-l-transparent"></div>
                    <div className="absolute -z-10 -left-12  animate-rotatingCricle w-14 h-14 p-4 rounded-full bg-red-100"></div>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-end relative">
                    <div className="overflow-hidden">
                      <h1 className="font-extrabold text-[460px] xs:text-[500px] sm:text-[550px] bgClip">
                        {/* {items.experiance} */}
                        3
                      </h1>
                    </div>
                    <span className="absolute -right-2 -sm:right-4 md:right-20 bottom-6 sm:bottom-20 block text-4xl font-italic">
                      Worlds
                    </span>
                    <span className="absolute left-4 sm:left-16 md:left-32 right-24 top-12 block text-4xl font-italic">
                      Best of
                    </span>
                    <span className="absolute left-4 sm:left-16 md:left-16 bottom-1 w-full right-20 tracking-wider block text-[18px] md:text-4xl font-italic font-semibold">
                      Consulting, Development, Maintenance
                    </span>
                  </div>
                </React.Fragment>
              {/* );
            })} */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
