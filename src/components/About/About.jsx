import React, { useState } from "react";
import Spinner from "../../Spinner";
import useSWR from "swr";
import axios from "axios";
import aboutPages from '../../assets/images/aboutpage.avif'
import bannerImg from "../../assets/images/bannerImgg.jpeg";


const About = () => {
  // const [aboutData, setAboutData] = useState([]);
  const url = 'https://img.freepik.com/premium-photo/digital-design-businessman-show-growth-graph-earning-with-digital-marketing-strategy_35761-549.jpg'
  window.scrollTo(0, 0)
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
      <div className="bg-white relative rounded">

        <div
          className="h-[350px] sm:h-screen mx-auto bg-local bg-no-repeat bg-cover relative"
          style={{
            // backgroundImage: `url(https://www.ethxsoftcon.com/wp-content/uploads/2021/09/6.jpg?id=2204)`,
            backgroundImage: `url(${bannerImg})`,
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            height: '90vh'

          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex flex-col justify-center items-center h-full z-50">
            <div className="w-[90%] sm:w-[70%] mx-auto box relative overflow-hidden text-center">
              <div className="px-2 sm:px-9 py-12 space-y-4">
                <h1 className='text-2xl xs:text-4xl md:text-8xl text-white uppercase font-bold tracking-[2px] drop-shadow-2xl'>About <span className="text-[#00c7d4]">Avgna</span> </h1>
                <p className="text-white sm:w-[90%] mx-auto text-sm md:text-xl">
                  We provide IT consulting, development, and management to businesses across the globe. We take pride in our customer-centric approach to solving business problems                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default About;
