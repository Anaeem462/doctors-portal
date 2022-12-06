import React from "react";

import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Information from "./Information";

import Service from "./Service";
import Testimonial from "./Testimonial/Testimonial";
import HomeAppointment from "./HomeAppointment";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Information></Information>
      <Service></Service>
      <HomeAppointment></HomeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
