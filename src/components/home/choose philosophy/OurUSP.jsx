import React, { useState } from 'react'
import Meeting from "../../../assets/images/meetinggg.avif";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';



const OurUSP = () => {
    const [countEnable, setCountEnable] = useState(false)
    return (
        <React.Fragment>
            <div className="max-w-maxWidth mx-auto relative">
                <div className="w-full relative">
                    <div className="relative sm:h-[600px]">
                        <img src={Meeting} alt="avgna-meeting" className="w-full h-full" />
                        {/* <div className="absolute bg-black/30 w-full h-full inset-0"></div>                       */}
                        <div className="text-white absolute top-1 font-bold p-2 sm:p-4 w-full flex justify-between flex-col h-full">
                            <div>
                            <p className="text-[#00c7d4ff] px-4 pt-0 sm:pt-2 py-2 md:text-4xl text-center">Our USP</p>
                            <div className="relative sm:w-[80%] mx-auto">
                                <h2 className="leading-[1.2] sm:leading-[1.3] font-medium md:font-semibold text-[13px] xs:text-[20px] sm:text-[30px] lg:text-[22px] backdrop-blur-sm bg-white/10  p-3 xs:p-4 rounded sm:tracking-wider">
                                    Avgna caters to clients of all sizes and needs with similar
                                    professionalism and transparency leveraging resourcefulness,
                                    forward-looking enigma and addressing client's needs by getting
                                    into their shoes.
                                </h2>
                                {/* <div className="hidden lg:flex p-4 items-center justify-center my-20 space-x-4 backdrop-blur">
                                    <div className="flex items-start space-x-4 ">
                                        <FaIcons.FaUserFriends className="text-5xl text-[#00c7d4]" />
                                        <div>
                                            <h2>3+</h2>
                                            <p className="uppercase text-white/40 font-normal">Products</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <FaIcons.FaFlag className="text-5xl text-[#00c7d4]" />
                                        <div>
                                            <h2>20+</h2>
                                            <p className="uppercase text-white/40 font-normal">
                                                Technology expertise
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 ">
                                        <FaIcons.FaBookOpen className="text-5xl text-[#00c7d4]" />
                                        <div>
                                            <h2>3+</h2>
                                            <p className="uppercase text-white/40 font-normal">
                                                Geographical Presence
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <FaIcons.FaHandshake className="text-5xl text-[#00c7d4]" />
                                        <div>
                                            <h2>5+</h2>
                                            <p className="uppercase text-white/40 font-normal">
                                                Digital PARTNERSHIPS
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            </div>
                    <ScrollTrigger onEnter={() => setCountEnable(true)} onExit={() => setCountEnable(false)}>
                        <div className="hidden lg:flex p-6 justify-between space-x-4 backdrop-blur-sm">
                            <div className="flex items-start space-x-4 text-center">
                                {/* <FaIcons.FaUserFriends className="text-5xl text-[#00c7d4]" /> */}
                                <div>
                                    {
                                        countEnable &&
                                        <h2 className='font-semibold'><CountUp start={0} end={3} delay={0} duration={2} className='text-6xl'/>+</h2>
                                    }
                                    <p className="uppercase text-[#00c7d4]/80 font-normal">Products</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 text-center">
                                {/* <FaIcons.FaFlag className="text-5xl text-[#00c7d4]" /> */}
                                <div>
                                    {
                                        countEnable &&
                                        <h2 className='font-semibold'><CountUp start={0} end={20} delay={0} duration={2} className='text-6xl'  />+</h2>
                                    }
                                    <p className="uppercase text-[#00c7d4]/80 font-normal">
                                        Technology expertise
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 text-center ">
                                {/* <FaIcons.FaBookOpen className="text-5xl text-[#00c7d4]" /> */}
                                <div>
                                    {
                                        countEnable &&
                                        <h2 className='font-semibold'><CountUp start={0} end={3} delay={0} duration={2} className='text-6xl'/>+</h2>
                                    }
                                    <p className="uppercase text-[#00c7d4]/80 font-normal">
                                        Geographical Presence
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 text-center">
                                {/* <FaIcons.FaHandshake className="text-5xl text-[#00c7d4]" /> */}
                                <div>
                                    {
                                        countEnable &&
                                        <h2 className='font-semibold'><CountUp start={0} end={5} delay={0} duration={2} className='text-6xl' />+</h2>
                                    }
                                    <p className="uppercase text-[#00c7d4]/80 font-normal">
                                        Digital PARTNERSHIPS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollTrigger>
                        </div>
                    </div>
                    <div className='flex justify-center items-center py-6'>
                        <button className='button button--action my-4'>Know more</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurUSP