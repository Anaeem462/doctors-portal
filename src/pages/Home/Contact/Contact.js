import React from "react";
import "../home.css";
const Contact = () => {
  return (
    <div className="appointment-bg flex justify-center py-[65px]">
      <div className="card flex-shrink-0  ">
        <div className="card-body">
          <div className="text-center mb-[41px]">
            <h1 className="text-appointment">Contact Us</h1>
            <p className="text-[36px] text-white">Stay connected with us</p>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered mb-4"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered mb-4"
            />
          </div>
          <div className="form-control">
            <input
              type="textarea"
              placeholder="Your Message"
              className="input h-[120px] mb-[9]"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-bg-color">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
