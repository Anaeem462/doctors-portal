import React from "react";
import "../../Home/home.css";

const AvailableData = ({ option, setTreatMent }) => {
    const { _id, name, slots, price } = option;
    return (
        <div>
            <div className='card  bg-base-100 shadow-2xl'>
                <div className='card-body text-center '>
                    <h2 className=' text-appointment'>{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : "Try Another Day "}</p>
                    <p>
                        {slots.length || "No"} {slots.length > 1 ? "Spaces" : "Space"} AVAILABLE
                    </p>
                    <p className='text-sm'>Price : ${price}</p>
                    <div className='card-actions justify-center'>
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatMent(option)}
                            htmlFor='booking-modal'
                            className='text-white font-bold btn btn-primary'>
                            Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableData;

{
    /* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>

    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
        type="text"
        placeholder="password"
        className="input input-bordered"
      />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">
          Forgot password?
        </a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>; */
}
