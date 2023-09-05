import React, { useEffect, useState } from "react";
import SubHeader from "../components/Header/subHeader/SubHeader";
import logo from "../assets/images/avgnaLogo.png";
import whatapps from '../assets/images/whatapps-logo.png'
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import Spinner from "../Spinner";
import CircleAnimation from "../components/animation/CircleAnimation";
import TriangleAnimation from "../components/animation/TriangleAnimation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as MdIcons from 'react-icons/md'
import "react-tabs/style/react-tabs.css";
const Header = () => {
  let location = useLocation();
  let crumb = location.pathname.split("/")[2];

  // Sticky navbar
  // let stickyHeader = document.querySelector(".sticky_manish");
  // const overser = new IntersectionObserver(
  //   () => {
  //     alert("Hi.. Manish");
  //   },
  //   {
  //     root: null,
  //     rootMargin: "",
  //     threshold: 0,
  //   }
  // );
  // overser.observe(stickyHeader);
  // useEffect(() => {
  // }, []);

  // MOBILE DRAWER STATUS
  const [drawerStatus, setDrawerStatus] = useState(false);
  const mobileDrawerDecide = () => {
    setDrawerStatus(!drawerStatus);
  };

  // window.scrollTo(0, 0);



  // ACCEPT COOKIES
  const [cookiesStatus, setCookiesStatus] = useState(true)
  const acceptCookies = () => {
    document.cookie = `user=true,expires=${new Date(Date.now() + 25892000000)},HttpOnly=true`
    setCookiesStatus(false)

    // console.log(document.cookie.split(',')[0])
  }
  useEffect(() => {
    if (!document.cookie) {
      setCookiesStatus(true)
    }
    else {
      setCookiesStatus(false)
    }
  }, [document.cookie.split(',')[0]])

  // BACK TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [show, setShow] = useState(false)
  useEffect(() => {
    let scrollHandler = () => {
      if (window.scrollY > 400) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [show])

  return (
    <React.Fragment>
      <div className="z-[90] sticky top-0">
        {/* <SubHeader /> */}
        {/* END TABS */}

        <div className="w-full bg-gradient-to-r from-sky-100/[0.75] to-sky-200 drop-shadow-md backdrop-blur-sm">
          <div className="max-w-maxWidth mx-auto px-6 py-2 lg:py-3 lg:px-6 xl:px-0 flex justify-between items-center">
            {/* Left Menu Div */}
            {/* <div className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                <li className="text-xl">
                  <Link to="/avgna-live/">Home</Link>
                </li>
                <li className="text-xl">
                  <Link to="/avgna-live/about">About Us</Link>
                </li>
              </ul>
            </div> */}
            {/* Logo */}
            <div className="w-[80px] h-[80px]">
              <Link to="/avgna-live/">
                <img src={logo} className="w-full drop-shadow-sm" />
              </Link>
            </div>
            {/* Right Menu Div */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-6 customFont">
                <li className="text-xl">
                  <NavLink to="/avgna-live/" className='hover:text-[--activeColor]'>Home</NavLink>
                </li>
                <li className="text-xl">
                  <NavLink to="/avgna-live/about" className='hover:text-[--activeColor]'>About Us</NavLink>
                </li>
                {/* <li className="text-xl">
                  <NavLink to="#">Products</NavLink>
                </li> */}
                <li className="text-xl">
                  <NavLink to="/avgna-live/services" className='hover:text-[--activeColor]'>Services & Products</NavLink>
                </li>
                <li className="text-xl">
                  <NavLink to="/avgna-live/contact" className='hover:text-[--activeColor]'>Contact Us</NavLink>
                </li>
                {/* <BiIcons.BiSearchAlt2 className="text-xl" /> */}
              </ul>
            </div>
            <div className="lg:hidden p-2 cursor-pointer">
              <FaIcons.FaBars
                onClick={() => mobileDrawerDecide()}
                className="text-2xl"
              />
            </div>
          </div>
        </div>

        {/* BREDCRUM */}

        {/* <div className="bg-gray-100 text-[#9d3415ff] py-4 px-6">
          <div className="max-w-maxWidth mx-auto ">
            <p className="uppercase">
              Home &gt; <span className="font-bold">{crumb} </span>
            </p>
          </div>
        </div> */}

        {/* MOBILE MENU DRAWER */}
        {drawerStatus && (
          <div
            className={`lg:hidden fixed inset-0 z-[60] bg-black/60 h-screen`}
          >
            <div className="w-72 h-full bg-white p-4 relative z-30">
              <span
                onClick={() => mobileDrawerDecide()}
                className="font-bold text-right block text-2xl cursor-pointer"
              >
                X
              </span>
              <ul className="">
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/avgna-live/"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/avgna-live/about"
                    onClick={() => setDrawerStatus(false)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/avgna-live/services"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Services & Products
                  </NavLink>
                </li>
                <li className="px-1 py-2 hover:bg-slate-200">
                  <NavLink
                    className="block"
                    to="/avgna-live/contact"
                    onClick={() => setDrawerStatus(false)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <CircleAnimation position={"top-24 bottom-4 -z-10"} />
              {/* <TriangleAnimation /> */}
            </div>
          </div>
        )}
      </div>
      {
        cookiesStatus &&
        <div className="fixed bottom-0 left-0 z-[60] bg-gray-200 p-6 rounded-md mx-4 my-2 xs:w-3/5 sm:w-1/2 lg:w-[30%]">
          <h4 className="text-xl my-3 font-semibold">This website uses cookies.</h4>
          <p className="text-[16px] my-4">We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.</p>
          <button onClick={acceptCookies} className="button button--action uppercase">Accept</button>
        </div>
      }
      <Link to='https://wa.me/917878181130' target="_blank">
        <div className="fixed bottom-0 right-0 z-[60] bg-slate-200 rounded-full mx-4 my-2 w-14 h-14 flex items-center justify-center">
          <img src={whatapps} alt="whatsapps-logo" />
        </div>
      </Link>

      {
        show &&
        <div onClick={scrollToTop} className="fixed bottom-1/4 border-2 border-sky-500 right-0 z-[60] bg-slate-100 rounded-full mx-4 my-2 w-14 h-14 flex items-center justify-center cursor-pointer">
          {/* <img src={whatapps} alt="whatsapps-logo" /> */}
          <MdIcons.MdKeyboardDoubleArrowUp fontSize={30} className="animate-bounce text-[#00c7d4]"/>
        </div>
      }

    </React.Fragment>
  );
};

export default Header;
