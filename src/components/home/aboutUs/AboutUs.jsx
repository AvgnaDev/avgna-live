import React, { useState } from "react";
import Spinner from "../../../Spinner";
import useSWR from "swr";
import axios from "axios";
import * as MdIcons from 'react-icons/md'
import { Link } from "react-router-dom";
// import aboutImg from '../../../assets/images/homeAbout1.png'
import aboutImg from '../../../assets/images/homeAboutt.jpg'

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
      <div className="bg-white">
        <div className="max-w-maxWidth xl:mx-auto mx-4 relative rounded md:p-0 sm:p-8">
          <div className="overflow-hidden relative pt-8">
            <h2 className="p-4 text-xl sm:text-4xl text-center z-50 text-[#00c7d6] relative"> {/*before:absolute before:inset-0 before:bg-[#00c7d4ff] before:w-14 before:left-[490px] before:top-14  before:h-1*/}
              We help you become IT efficient
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-center h-full">
              {/* {aboutData.map((items) => {
              return ( */}
              {/* <React.Fragment> */}
              <div className="flex flex-col md:flex-row mb-4 justify-between items-center">

                <div style={{
                  backgroundImage: `url(${aboutImg})`,
                  backgroundPosition: 'center center',
                  height: "350px",
                  backgroundSize: "contain"


                }} className="w-full md:w-[40%] overflow-hidden z-20 bg-no-repeat mx-auto">
                  {/* <div className="absolute inset-0 h-full w-full  bg-gradient-to-r from-sky-100/[0.75] to-sky-100 -z-10 skew-x-[-150deg] sm:skew-x-[149deg] rounded"></div> */}
                </div>
                <p className="md:w-[60%] pl-8 text-sm sm:text-xl md:text-xl first-letter:text-4xl">
                  {/* Avgna holds professional experience in Digital transformation projects such as Cloud Adoption, Data strategization.<br/><br/>We specialize in developing PoCs for your initial ideas and ensure end to end delivery to Production such as mobile app development, e-commerce website, etc.<br/><br/>Our pool of consultants with vanilla technology experience such as java, dotnet, mainframes must not be underestimated. */}
                  {/* {items.about} */}
                  Avgna is an IT product and managed services company. Avgna holds professional experience in digital transformation projects such as cloud adoption and data strategization. 
                  <br/>
                  <br/>
                  We specialise in developing proof of concepts for your initial ideas and ensuring end-to-end delivery ranging from mobile app development to e-commerce website. Our pool of consultants with vanilla technology experience in Java, Dot net, Mainframe, to name a few, help not only develop your IT systems but also support them efficiently. 
                </p>
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
              {/* </React.Fragment> */}
              {/* )}) */}
            </div>
            <div className="flex justify-center items-center my-6">
              <Link to="/avgna-live/about">
                <button className="button--action button">Know more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
