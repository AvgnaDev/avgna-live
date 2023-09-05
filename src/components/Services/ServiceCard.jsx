import React, { useState } from 'react'
import remedi360 from "../../assets/images/remedi360.png";
import bison from "../../assets/images/bison.png";
import VideoPlay from "../../components/home/card/videoPlayModal/VideoPlay";
import softwareDev1 from "../../assets/images/softwareDev1.png"
import itconsult from "../../assets/images/itconsult.jpg"
import support from "../../assets/images/support.jpg"

const ServiceCard = () => {
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
              <p className="text-center py-2 text-xl font-bold">
                Software Development
              </p>
              <p>
                End to End development and delivery of software in fully agile
                fashion. We transform ideas into products.
              </p>
            </div>
          </div>
          <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="rounded-t"
              src={support}
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZOZ9gaAYTz7eKzQFpC_-bbPYcivgBr6JXA&usqp=CAU"
            />
            <div className="text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
              <p className="text-center py-2 text-xl font-bold">
                IT Support
              </p>
              <p>
                Get hold of the expert IT professionals with broad experience,
                versatile technology and domain knowledge based on your needs with
                complete flexibillity
              </p>
            </div>
          </div>
          <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
            <img
              className="rounded-t"
              src={itconsult}
            />
            <div className="text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
              <p className="text-center py-2 text-xl font-bold">
                IT Consulting, Advisory, and Training
              </p>
              <p>
                Get expert advice and consulting from our large pool of consultants
                skilled in technical assessment, strategy development and digital
                transformation projects.
              </p>
            </div>
          </div>

        </div>
        {/* PRODUCTS */}
        <div className="relative my-6">
          <h2 className="text-[#00c7d6]">Featured products</h2>
          <p className="w-full sm:text-xl px-4 mx-auto relative">
            Building a good customer experience does not happen by accident, it
            happens by design.
          </p>
          <div className='flex items-center max-w-maxWidth mx-auto gap-6 p-4 justify-center flex-wrap my-6'>
            <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
              <img className="rounded-t" src={remedi360} />
              <div className="flex space-y-2 flex-col justify-center text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                <p className="text-center px-4 py-2 text-xl font-bold">
                  ReMedi360
                </p>
                <div>
                  <button onClick={productVideo} className="button button--action">
                    Watch video
                  </button>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden relative rounded w-[300px] transition-all duration-300 shadow hover:drop-shadow-xl bg-white">
              <img className="mx-auto rounded-t" src={bison} />
              <div className="flex space-y-2 flex-col justify-center text-center p-6 transition-all duration-1000 absolute top-0 group-hover:left-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                <p className="text-center px-4 py-2 text-xl font-bold">BISON</p>
                <div>

                  <button className="button button--action">Watch video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-sky-100 to-sky-200 -z-10 sm:skew-x-[-230deg]"></div>
        {videoDecide && <VideoPlay productVideo={productVideo} />}
      </div>
    </React.Fragment>
  )
}

export default ServiceCard