import React from "react";
import WhoServed from "../../components/home/who served/WhoServed";
import Testimonial from "../../components/home/testimonial/Testimonial";
import About from "../../components/About/About";

const AboutPage = () => {
  return (
    <React.Fragment>
      <About />
      <WhoServed />
      <Testimonial />
    </React.Fragment>
  );
};

export default AboutPage;
