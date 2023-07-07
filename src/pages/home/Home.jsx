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

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <AboutUs />
      <Philosphy />
      <BusinessGrowing />
      <Card />
      <Testimonial />
      <OurTeam />
      <WhoServed />
    </React.Fragment>
  );
};

export default Home;
