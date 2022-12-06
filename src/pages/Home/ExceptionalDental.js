import React from "react";
import treatment from "../../assets/images/treatment.png";
import "./home.css";
const ExceptionalDental = () => {
  return (
    <div>
      <div className="hero mx-auto ">
        <div className="hero-content grid lg:grid-cols-2">
          <div className="">
            <img
              src={treatment}
              alt="treatment"
              className="w-1/2 mx-auto rounded-lg shadow-2xl lg:mr-[100px]"
            />
          </div>
          <div className="lg:mr-[115px]">
            <h1 className="text-5xl font-bold text-neutral">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-bg-color">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
