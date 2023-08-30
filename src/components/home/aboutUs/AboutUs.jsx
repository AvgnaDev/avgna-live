import React, { useState } from "react";
import Spinner from "../../../Spinner";
import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import aboutImg from '../../../assets/images/softwareDev1.png'

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
      <div className="max-w-maxWidth xl:mx-auto mx-4 bg-white -mt-10 relative rounded md:p-0 sm:p-8 mb-2">
        <div className="overflow-hidden relative">
          <h2 className="p-4 text-center z-50 text-[#00c7d6] relative"> {/*before:absolute before:inset-0 before:bg-[#00c7d4ff] before:w-14 before:left-[490px] before:top-14  before:h-1*/}
            About Us
          </h2>
          <div className="flex flex-col md:flex-row justify-bewteen items-center h-full">
            {/* {aboutData.map((items) => {
              return ( */}
            <React.Fragment>
              <div style={{
                  backgroundImage: `url(${aboutImg})`,
                  backgroundPosition: 'center center',
                  height:"350px",
                 

                }} className="w-4/5 mt-4 overflow-hidden z-20 bg-no-repeat mx-auto">
                <div className="absolute inset-0 h-full w-full  bg-gradient-to-r from-sky-100/[0.75] to-sky-100 -z-10 skew-x-[-150deg] sm:skew-x-[149deg] rounded"></div>
                <p className="px-4 text-sm sm:text-xl md:text-xl md:px-8 first-letter:text-6xl first-letter:text-[#00c7d4ff] first-letter:italic">
                  Avgna holds professional experience in Digital transformation projects such as Cloud Adoption, Data strategization. Additionally, we specialize in developing PoCs for your initial ideas and ensure end to end delivery to Production such as mobile app development, e-commerce website, etc. However, our pool of consultants with vanilla technology experience such as java, dotnet, mainframes must not be underestimated.
                  {/* {items.about} */}
                </p>
                <Link to="/avgna-live/about" className="flex justify-center items-center">
                  <button className="button--action button my-6 ml-8">Know more</button>
                </Link>
              </div>
              {/* <div className="z-30 md:w-2/5 flex justify-center items-center relative  h-full" > */}

                {/* <img src={aboutImg} className="drop-shadow" /> */}


                {/* <div className="relative lg:px-16">
                  <h1 className="font-extrabold text-[460px] xs:text-[500px] sm:text-[520px] bgClip">
                  {items.experiance} 
                   3
                  </h1>
                  <span className="absolute left-4 sm:left-16 md:left-5 right-0 top-12 text-5xl font-italic">
                  Best of
                </span>
                <span className="absolute right-2 -sm:right-4 md:right-4 bottom-6 sm:bottom-20 block text-5xl font-italic">
                  worlds
                </span>
                </div>
                <span className="absolute left-4 sm:left-16 md:left-32 right-24 top-12 block text-5xl font-italic">
                  Best of
                </span> 
                <span className="absolute whitespace-nowrap md:text-right md:pr-4 -left-[15px] sm:left-0 md:left-0 mt-4 md:bottom-1 w-full right-20 tracking-[1.2px] block text-[19px] xs:text-[22px] md:text-4xl font-italic font-semibold">
                  Consulting, Development, Maintenance
                </span> */}
              {/* </div> */}
            </React.Fragment>
            {/* )}) */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
