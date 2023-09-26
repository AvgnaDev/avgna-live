import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import map from '../../assets/images/map.png'

const Contact = () => {
  window.scrollTo(0,0)
  const [contactDetails, setContactDetails] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactOnchangeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails({ ...contactDetails, [name]: value });
    Validation();
  };
  const [messageSend, setMessageSend] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [errormsg, setErrormsg] = useState({});
  const [errorStatus, setErrorStatus] = useState(false);
  // VALIDATION
  const Validation = () => {
    const { username, email, phone ,message } = contactDetails;
    var filter =
      /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};
    if (!username) {
      errors.username = "Required username*";
    }
    if (!email) {
      errors.email = "Required email*";
    } else if (!filter.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phone) {
      errors.phone = "Required phone*";
    } else if (phone.length > 10 || phone.length < 10) {
      errors.phone = "Invalid phone number";
    }
    if(!message){
      errors.message = "Required message*";

    }
    return errors;
  };

  const mailSend = async () => {
    const formErrors = Validation();
    if (Object.keys(formErrors).length > 0) {
      setErrorStatus(true);
      setErrormsg(formErrors);
    } else {
      setErrorStatus(false);
      await axios
        .post("http://localhost:9090/send-contact-message", contactDetails)
        .then((res) => {
          setContactDetails({
            username: "",
            email: "",
            phone: "",
            message: "",
          });
          setMessageSend(true);
          setTimeout(() => {
            setMessageSend(false);
          }, 3000);
        })
        .catch((err) => {
          setMessageFailed(true);
          setTimeout(() => {
            setMessageFailed(false);
          }, 3000);
        });
    }
  };
  // window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div style={{
        backgroundImage:`url(${map})`,
        backgroundRepeat:'no-repeat'
      }} className="py-8 w-full">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 pt-24 pb-14 mx-auto flex md:flex-nowrap flex-wrap">
            {/* <div className="lg:w-2/3 md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 sm:p-10 flex items-end  justify-between md:justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.941864116276!2d73.66958872393351!3d18.59228838997851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb6e0fe9a2ef%3A0xb48b5628d8043924!2sPhase%203%20Maan%20Rajiv%20Gandhi%20Infotech%20Park!5e0!3m2!1sen!2sin!4v1683111245317!5m2!1sen!2sin"
                style={{
                  filter: "grayscale(1), contrast(1.2) ,opacity(0.4)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    A-1304, SANGRIA, MEGAPOLIS, RAJIV GANDHI INTERNATIONAL IT
                    PARK, PHASE 3 HINJAWADI PUNE MH 411057 IN
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <Link
                    to="mailto:Hr@avgna.com"
                    className="text-indigo-500 leading-relaxed"
                  >
                    Hr@avgna.com
                  </Link>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <Link to="tel:78781 81130">
                    <p className="leading-relaxed">+(91)-78781 81130</p>
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="flex-1 py-6 px-0 sm:px-8">
              <div className="py-4">
              <h2 className="text-xl sm:text-4xl text-gray-900 mb-1 font-semibold">Reach out to us at:</h2>
              </div>
              <p className="text-xl">Our offices are open from Monday to Friday, 9:00am to 18:00pm IST (GMT+5:30). Do write to us via email or call us at following number to start the conversation.
              </p>
              <div className="my-4">
              <Link to="mailto:HR@avgna.com">
                <div className="inline-flex justify-start items-center pointer-events-none text-[#236b72]">
                  <MdIcons.MdEmail className="mr-2 text-sky-500" />
                  <p className="sm:text-xl">HR@avgna.com</p>
                </div>
              </Link>
              <div>
              <Link to="tel:7878181130">
                <div className="inline-flex justify-start pointer-events-none items-center my-4 text-[#236b72]">
                  <FaIcons.FaPhoneAlt className="mr-2 text-sky-500" />
                  <p className="sm:text-xl">+(91)-78781 81130</p>
                </div>
              </Link>
              </div>
              <div className="flex justify-start pointer-events-none items-start text-[#236b72]">
                <FaIcons.FaMapSigns className="text-2xl sm:text-xl mr-2 text-sky-500" />
                <p className="sm:text-xl">
                  A-1304, SANGRIA, MEGAPOLIS, RAJIV GANDHI INTERNATIONAL IT
                  PARK, PHASE 3 HINJAWADI PUNE MH 411057 IN
                </p>
              </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-gray-100 backdrop-blur-[1px] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4 sm:px-6 py-6">
              <h2 className="text-xl sm:text-4xl text-gray-900 mb-1 font-semibold">Get In Touch</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Any question or remarks? Just write a message
              </p>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                  value={contactDetails.username}
                  onChange={(e) => contactOnchangeHandler(e)}
                  className="w-full rounded border focus:ring-[#00c7d4] focus:ring-2"
                />
                {errorStatus && (
                  <span className="font-medium text-sm text-red-500">
                    {errormsg.username}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactDetails.email}
                  onChange={(e) => contactOnchangeHandler(e)}
                  placeholder="Enter your email address"
                  className="w-full rounded border focus:ring-[#00c7d4] focus:ring-2"
                />
                {errorStatus && (
                  <span className="font-medium text-sm text-red-500">
                    {errormsg.email}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={contactDetails.phone}
                  onChange={(e) => contactOnchangeHandler(e)}
                  className="w-full rounded border focus:ring-[#00c7d4] focus:ring-2"
                />
                {errorStatus && (
                  <span className="font-medium text-sm text-red-500">
                    {errormsg.phone}
                  </span>
                )}
              </div>
              <div className="relative mb-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write a message..."
                  value={contactDetails.message}
                  onChange={(e) => contactOnchangeHandler(e)}
                  className="w-full focus:border-none rounded border focus:ring-[#00c7d4] focus:ring-2 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                 {errorStatus && (
                  <span className="font-medium text-sm text-red-500">
                    {errormsg.message}
                  </span>
                )}
              </div>
              <button
                onClick={mailSend}
                type="button"
                className="text-white bg-[#00c7d4]/80 border-0 py-2 px-6 focus:outline-none hover:bg-[#00c7d4] rounded text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </section>




        <div className="text-center bg-white">
          <main className="p-4 max-w-width mx-auto">
          <h2 className="text-2xl md:text-4xl py-4 text-[#00c7d6]">Frequently Asked Questions</h2>
          <p className="my-6 text-[16px] sm:text-2xl">Please contact us if you cannot find an answer to your question, at  <Link to="mailto:customersupport@avgna.com" className="text-sky-600">customersupport@avgna.com</Link></p>
            <div className="w-full sm:w-3/5 sm:mx-auto divide-y divide-gray-200 flex justify-center items-center flex-col mt-8">
              <details className="w-full mb-2">
                <summary className="py-3 cursor-pointer select-none w-full outline-none text-left font-semibold">What is the minimum duration of engagement with Avgna ?</summary>
                <p className="pt-1 pb-3 px-4 text-left">There is no minimum or maximum duration. We believe in offering fair and just services. Based on our analysis of the request, we provide estimates of the efforts and can collaborate over different models such as T&M, Fixed Price, etc. that best meets your needs and budget.</p>
              </details>
              <details className="w-full border-b border-t mb-2">
                <summary className="py-3 cursor-pointer select-none w-full outline-none text-left font-semibold">Does Avgna provide onsite and offshore services ?</summary>
                <p className="pt-1 pb-3 px-4 text-left">Certainly, Avgna's USP is its wide network across different geographies. For close in-person collaboration, we ensure availability of our Consultants at Client Locations with our free governance across Europe, US and India. We have a widespread presence in India with possibility of services discharged from multiple locations in India in cost effective way.</p>
              </details>
              <details className="w-full border-b border-t mb-2">
                <summary className="py-3 cursor-pointer select-none w-full outline-none text-left font-semibold">Is Avgna also involved in Training of resources ?</summary>
                <p className="pt-1 pb-3 px-4 text-left">At Avgna, we truly understand the changing times and technology and are firm advocate of constant investment in upskilling and training. As such, we make constant endeavors to ensure our consultants are up to date with latest technologies and also offer training for Client resources to be abreast with technologies of future.</p>
              </details>
              <details className="w-full border-b border-t mb-2">
                <summary className="py-3 cursor-pointer select-none w-full outline-none text-left font-semibold">What does Avgna specialize at ?</summary>
                <p className="pt-1 pb-3 px-4 text-left">Avgna holds professional experience in Digital transformation projects such as Cloud Adoption, Data strategization. Additionally, we specialize in developing PoCs for your initial ideas and ensure end to end delivery to Production such as mobile app development, e-commerce website, etc. However, our pool of consultants with vanilla technology experience such as java, dotnet, mainframes must not be underestimated.</p>
              </details>
            </div>
          </main>



        </div>
        {messageSend && (
          <div className="fixed z-10 w-full top-0">
            <div className="bg-white font-semibold w-[20%] mx-auto p-4 text-center">
              message send successfully
            </div>
          </div>
        )}
        {messageFailed && (
          <div className="fixed z-10 w-full top-0">
            <div className="bg-white text-red-600 font-semibold w-[20%] mx-auto p-4 text-center">
              something went wrong
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Contact;
