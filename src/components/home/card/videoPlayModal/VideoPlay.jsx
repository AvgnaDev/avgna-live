import React from "react";
import productVideoPlay from "../../../../assets/videos/product.mp4";

const VideoPlay = ({ productVideo }) => {
  return (
    <React.Fragment>
      <div className="fixed z-[90] inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center">
        <div className="w-3/5 h-3/4 flex items-start">
          <video
            src={productVideoPlay}
            autoPlay
            loop
            controls
            muted
            className="w-full h-full"
            width="100%"
            height="100%"
          />
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LSRNmhLS76o"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <span
            onClick={() => productVideo(false)}
            className="py-2 mt-2 px-3 cursor-pointer hover:bg-red-400 hover:text-white bg-red-400/90 font-bold text-2xl ml-1 rounded"
          >
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default VideoPlay;
