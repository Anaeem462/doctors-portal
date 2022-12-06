import React from "react";
import "./home.css";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import teeth from "../../assets/images/whitening.png";
import ExceptionalDental from "./ExceptionalDental";
const Service = () => {
  return (
    <div className="mt-[20px]">
      <div className="text-center">
        <h1 className="service-color text-[20px] mb-2">Our service</h1>
        <p className="text-[36px]">Services We Provide</p>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 mb-[70px] mx-6  mt-[70px] gap-14">
        <div className="card  bg-base-100 shadow-2xl mx-auto  ">
          <div className="flex justify-center my-[34px]">
            <img
              src={fluoride}
              alt="fluoride"
              className="w-[115px] h-[115px]"
            />
          </div>
          <div className="  px-14 mb-9 text-center">
            <h2 className=" text-[20px] mb-2 text-neutral font-semibold">
              Fluoride Treatment
            </h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-2xl mx-auto ">
          <div className="flex justify-center my-[34px]">
            <img src={cavity} alt="cavity" className="w-[115px] h-[115px]" />
          </div>
          <div className="  px-14 mb-9 text-center">
            <h2 className=" text-[20px] mb-2 text-neutral font-semibold">
              Cavity Filling
            </h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-2xl mx-auto ">
          <div className="flex justify-center my-[34px]">
            <img src={teeth} alt="fluoride" className="w-[115px] h-[115px]" />
          </div>
          <div className="  px-14 mb-9 text-center">
            <h2 className=" text-[20px] mb-2 text-neutral font-semibold">
              Teeth Whitening
            </h2>
            <p>
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the
            </p>
          </div>
        </div>
      </div>
      <ExceptionalDental></ExceptionalDental>
    </div>
  );
};

export default Service;
