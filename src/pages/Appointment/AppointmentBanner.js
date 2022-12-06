import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <div className="bg-chair-image my-7">
        <div className="hero">
          <div className="hero-content flex lg:flex-row-reverse flex-col justify-between">
            <img
              src={chair}
              alt="chair"
              className=" md:w-1/2 w-2/3  rounded-lg shadow-2xl "
            />
            <div>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
