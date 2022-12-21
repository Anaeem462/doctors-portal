import React from "react";
import "./home.css";
import doctor from "../../assets/images/doctor-small.png";
import { Link } from "react-router-dom";
const HomeAppointment = () => {
    return (
        <div>
            <div className='hero my-[200px]  appointment-bg '>
                <div className='hero-content grid lg:grid-cols-2'>
                    <img src={doctor} alt='' className=' -mt-32 hidden md:block lg:w-full' />

                    <div>
                        <h1 className='text-appointment'>Appointment</h1>
                        <h1 className='text-[36px] text-white font-semibold'>Make an appointment Today</h1>
                        <p className='py-6 text-white'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using
                            'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <Link className='btn btn-bg-color' to='/appointment'>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppointment;
