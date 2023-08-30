import React from 'react'
import * as MdIcons from "react-icons/md";
import vision from '../../assets/images/vision.png'
import mission from '../../assets/images/mission.png'
import competency from '../../assets/images/competence.png'
import delivery from '../../assets/images/delivery.png'

const AvgnaCard = () => {
    return (
        <div className='max-w-maxWidth mx-auto'>
            <div className="py-12 flex flex-wrap justify-around gap-8 space-y-6">
                <div className='flex justify-between px-4'>
                    <div className='w-[30%]'>
                    <img src={mission} alt='mission' className=''/>
                    </div>
                    <div
                        className="w-full md:w-[60%] px-4 py-6 hover:shadow-xl hover:shadow-sky-100 flex justify-center items-start flex-col"
                        // data-aos="fade-right"
                        // data-aos-delay="20"
                        // data-aos-duration="2000"
                    >
                        <div className="flex items-center text-xl">
                            <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-3xl text-[#00c7d4]" />
                            <h3 className="font-semibold text-4xl">Our Mission</h3>
                        </div>
                        <p className="tracking-wide font-[300] text-2xl">
                            AVGNA ‘Avighna’ (अविघ्न) literally meaning 'obstacle remover' is
                            our purpose and philosophy to go extra mile in supporting our
                            customers to remove their technology obstacles and enabling
                            their business growth.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between px-4'>
                    <div
                        className="w-full md:w-[50%] px-4 py-6 hover:shadow-xl hover:shadow-sky-100 flex justify-center items-start flex-col"
                        // data-aos="fade-down"
                        // data-aos-duration="2000"
                    >
                        <div className="flex items-center text-xl">
                            <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-3xl text-[#00c7d4]" />
                            <h3 className="font-semibold text-4xl">Our vision</h3>
                        </div>
                        <p className="tracking-wide font-[300] text-2xl">
                            Avgna aims to become a trustful Digital Partner for end to end
                            realisation of client's business goals with full integrity and
                            fairness.
                        </p>
                    </div>
                    <div className='w-[30%]'>
                       <img src={vision} alt='vision' className=''/>
                    </div>
                </div>
                <div className='flex justify-between px-4'>
                    <div className='w-[30%]'>
                    <img src={delivery} alt='delivery' className=''/>
                    </div>
                    <div
                        className="w-full md:w-[60%] px-4 py-6 hover:shadow-xl hover:shadow-sky-100 flex justify-center items-start flex-col"
                        // data-aos="flip-down"
                        // data-aos-delay="200"
                        // data-aos-duration="2000"
                    >
                        <div className="flex items-center text-xl">
                            <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-3xl text-[#00c7d4]" />
                            <h3 className="font-semibold text-4xl">Custom Delivery</h3>
                        </div>
                        <p className="tracking-wide font-[300] text-2xl">
                            The world of technology can be fast-paced and scary. That's why
                            our goal is to provide an experience that is tailored to your
                            company's needs. No matter the budget, we pride ourselves on
                            providing professional customer service.
                        </p>
                    </div>
                </div>
                <div className='flex justify-between px-4'>
                    <div
                        className="w-full md:w-[60%] px-4 py-6 hover:shadow-xl hover:shadow-sky-100 flex justify-center items-start flex-col"
                        // data-aos="fade-up"
                        // data-aos-delay="300"
                        // data-aos-duration="2000"
                    >
                        <div className="flex items-center text-xl">
                            <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-3xl text-[#00c7d4]" />
                            <h3 className="font-semibold text-4xl">Competency</h3>
                        </div>
                        <p className="tracking-wide font-[300] text-2xl">
                            With resources skilled in future proof technologies, consultants
                            with expertise across multiple domains, presence across multiple
                            geographies and experienced pool of tech stalwarts, Avgna has
                            the best to offer.
                        </p>
                    </div>
                    <div className='w-[30%]'>
                    <img src={competency} alt='competency' className=''/>
                    </div>
                </div>




                {/* 
                <div
                    className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                >
                    <div className="flex items-center text-xl">
                        <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                        <h3 className="font-semibold">Our vision</h3>
                    </div>
                    <p className="tracking-wide font-[300]">
                        Avgna aims to become a trustful Digital Partner for end to end
                        realisation of client's business goals with full integrity and
                        fairness.
                    </p>
                </div>
                <div
                    className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
                    data-aos="flip-down"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                >
                    <div className="flex items-center text-xl">
                        <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                        <h3 className="font-semibold">Custom Delivery</h3>
                    </div>
                    <p className="tracking-wide font-[300]">
                        The world of technology can be fast-paced and scary. That's why
                        our goal is to provide an experience that is tailored to your
                        company's needs. No matter the budget, we pride ourselves on
                        providing professional customer service.
                    </p>
                </div>
                <div
                    className="w-full md:w-[45%] px-4 py-2 hover:shadow-lg bg-gray-100"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="2000"
                >
                    <div className="flex items-center text-xl">
                        <MdIcons.MdOutlineKeyboardDoubleArrowRight className="text-2xl text-[#00c7d4]" />
                        <h3 className="font-semibold">Competency</h3>
                    </div>
                    <p className="tracking-wide font-[300]">
                        With resources skilled in future proof technologies, consultants
                        with expertise across multiple domains, presence across multiple
                        geographies and experienced pool of tech stalwarts, Avgna has
                        the best to offer.
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default AvgnaCard