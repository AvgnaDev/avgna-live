import React from 'react'
import { Carousel } from "react-responsive-carousel";
import  nikhil from '../../../../assets/images/nikhil.jpg'


const TeamList = () => {
  return (
    <div id='teamLists' className="max-w-maxWidth mx-auto pt-4 mt-4 mb-20 text-center">
      <h2 className="text-[#00c7d6] text-3xl sm:text-4xl px-2 xs:px-0">Our Team Members</h2>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        autoPlay={true}
        showThumbs={false}
        showArrows={false}
      >
        <div className="p-4 md:w-[70%] md:mx-auto w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed mb-6 font-medium">At Avgna, we believe digital solutions can catapult business success for our clients. We are a team of digital enthusiasts who are always excited about solving clients' problems. As a Business Development Manager, my jobs is to understand these problems and find best possible solutions to them. </p>
            <div className='flex justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-400 mb-4 block" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            </div>
           
            <a className="flex flex-col sm:flex-row justify-start items-center">
              <img alt="testimonial" src={nikhil} className="rounded-full h-[120px] align-middle max-w-full flex-shrink-0 object-cover object-center border" />
              <span className="flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900 text-left">Nikhil Lohani</span>
                <span className="text-gray-500 text-sm text-left">BUSINESS DEVELOPMENT</span>
              </span>
            </a>
          </div>
        </div>
      </Carousel>

    </div>
  )
}

export default TeamList