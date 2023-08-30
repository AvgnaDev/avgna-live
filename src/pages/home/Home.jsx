import React from "react";
// import bannerImg from "../../assets/images/bannerImg.jpeg";
// import { Typewriter } from "react-simple-typewriter";
// import * as MdIcons from "react-icons/md";
import Banner from "../../components/home/banner/Banner";
import AboutUs from "../../components/home/aboutUs/AboutUs";
import BusinessGrowing from "../../components/home/BusinessGrowing";
import Card from "../../components/home/card/Card";
import Philosphy from "../../components/home/choose philosophy/Philosphy";
import WhoServed from "../../components/home/who served/WhoServed";
import OurTeam from "../../components/home/our team/OurTeam";
import Testimonial from "../../components/home/testimonial/Testimonial";
import { Outlet } from "react-router-dom";
import TeamList from "../../components/home/our team/teamList/TeamList";
import OurUSP from "../../components/home/choose philosophy/OurUSP";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <AboutUs />
      {/* <Philosphy /> */}
      <OurUSP/>
      <BusinessGrowing />
      <Card />
      {/* <Testimonial /> */}
      {/* <OurTeam /> */}
      <WhoServed />
       {/* TEAM MEMBERS */}
      {/* <TeamList/> */}
    </React.Fragment>
  );
};

export default Home;
