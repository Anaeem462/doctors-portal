import React from "react";

import marker from "../../assets/icons/marker.svg";
import clock from "../../assets/icons/clock.svg";
import call from "../../assets/icons/phone.svg";
import "./home.css";

const Information = () => {
  return (
    <div className="grid md:grid-cols-3  px-5">
      <div className="btn-bg-color lg:flex items-center   rounded-2xl py-12 px-5 mr-6 mb-7">
        <div>
          <img src={clock} className="text-[86px] xl:mr-6  mx-auto " alt="" />
        </div>
        <div className=" mt-4 lg:my-0  lg:mx-4">
          <h1 className="text-xl mb-2">Opening Hours</h1>
          <p>open 9:00 am to 5:00 pm Everyday</p>
        </div>
      </div>
      <div className="bg-neutral  lg:flex items-center   rounded-2xl py-12 px-5 mr-6 mb-7  text-white ">
        <div>
          <img src={marker} alt="" className="text-[86px] xl:mr-6  mx-auto " />
        </div>
        <div className=" mt-4 lg:my-0  lg:mx-4">
          <h1 className="text-xl mb-2">Opening Hours</h1>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>
      <div className="btn-bg-color lg:flex items-center   rounded-2xl py-12 px-5 mr-6 lg:mr-0  mb-7 ">
        <div>
          <img src={call} className="text-[70px]  xl:mr-6  mx-auto" alt="" />
        </div>
        <div className=" mt-4 lg:my-0  lg:mx-4">
          <h1 className="text-xl mb-2">Opening Hours</h1>
          <p>+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
