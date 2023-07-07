import React, { useState } from "react";
import Spinner from "../../../Spinner";
import useSWR from "swr";
import axios from "axios";

const AboutUs = () => {
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
      <div className="max-w-maxWidth xl:mx-auto mx-4 bg-white -mt-10 relative rounded p-4 sm:p-8 shadow-lg">
        <div className="overflow-hidden relative">
          <h2 className="z-50 before:inset-0 font-bold relative before:absolute before:bg-[#00c7d4ff] before:w-14 before:left-4 before:top-10  before:h-1">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row justify-bewteen items-center ">
            {/* {aboutData.map((items) => {
              return ( */}
                <React.Fragment>
                  <div className="md:w-1/2 mt-4 overflow-hidden z-20">
                    <div className="absolute inset-0 h-full w-full  bg-gradient-to-r from-green-300 to-blue-200 -z-10 skew-x-[-150deg] sm:skew-x-[245deg]"></div>
                    <p className="text-sm xs:text-xl">
                    Avgna holds professional experience in Digital transformation projects such as Cloud Adoption, Data strategization. Additionally, we specialize in developing PoCs for your initial ideas and ensure end to end delivery to Production such as mobile app development, e-commerce website, etc. However, our pool of consultants with vanilla technology experience such as java, dotnet, mainframes must not be underestimated.
                      {/* {items.about} */}
                      </p>
                  </div>
                  <div className="z-30 md:w-1/2 flex justify-center items-end relative">
                    <div className="overflow-hidden">
                      <h1 className="font-extrabold text-[460px] xs:text-[500px] sm:text-[550px] bgClip">
                        {/* {items.experiance} */}
                        3
                      </h1>
                    </div>
                    <span className="absolute right-2 -sm:right-4 md:right-20 bottom-6 sm:bottom-20 block text-4xl font-italic">
                      worlds
                    </span>
                    <span className="absolute left-4 sm:left-16 md:left-32 right-24 top-12 block text-4xl font-italic">
                      Best of
                    </span>
                    <span className="absolute left-1 sm:left-16 md:left-16 -bottom-2 mt-4 md:bottom-1 w-full right-20 tracking-wider block text-[18px] md:text-4xl font-italic font-semibold">
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

export default AboutUs;
