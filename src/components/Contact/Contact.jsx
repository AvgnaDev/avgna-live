import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
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
    const { username, email, phone } = contactDetails;
    var filter =
      /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()/[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const errors = {};
    if (!username) {
      errors.username = "Please provide username*";
    }
    if (!email) {
      errors.email = "Please provide email address*";
    } else if (!filter.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phone) {
      errors.phone = "Please provide mobile*";
    } else if (phone.length === 10) {
      errors.phone = "Invalid phone number";
    }
    return errors;
  };

  const mailSend = async () => {
    const formErrors = Validation();
    if (Object.keys(formErrors).length > 0) {
      setErrormsg(formErrors);
      setErrorStatus(true);
    } else {
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
      <div className="bg-gradient-to-r from-cyan-500/40 to-blue-500/90 py-8 w-full">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex md:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end  justify-between md:justify-start relative">
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
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-6">
              <h2 className="text-gray-900 mb-1 font-semibold">Get In Touch</h2>
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
