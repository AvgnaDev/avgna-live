import React from "react";
import WhoServed from "../../components/home/who served/WhoServed";
import Testimonial from "../../components/home/testimonial/Testimonial";
import About from "../../components/About/About";
import Expertis from "../../components/expertis/Expertis";
import TeamList from "../../components/home/our team/teamList/TeamList";
import AvgnaCard from "../../components/About/AvgnaCard";

const AboutPage = () => {
  return (
    <React.Fragment>
      <About />
      <AvgnaCard/>
      {/* <WhoServed /> */}
      <Expertis/>
      <Testimonial />
      <TeamList/>
    </React.Fragment>
  );
};

export default AboutPage;
