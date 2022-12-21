import React from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import chair from "../../../assets/images/chair.png";
import "../home.css";

const Banner = () => {
    return (
        <div className='bg-chair-image mb-[20px]'>
            <div className='hero  py-20'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img src={chair} alt='chair' className=' rounded-lg lg:w-1/2 w-full md:mb-10 shadow-2xl ' />

                    <div className='mr-[24px]'>
                        <h1 className='text-5xl font-bold '>
                            Your New Smile Starts <br /> Here
                        </h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
                            repudiandae et a id nisi.
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

export default Banner;
