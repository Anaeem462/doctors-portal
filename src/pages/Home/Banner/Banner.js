import React from "react";
import chair from "../../../assets/images/chair.png";
import "../home.css";

const Banner = () => {
    return (
        <div className='bg-chair-image mb-[20px]'>
            <div className='hero  py-12 lg:py-[210px] lg:px-[30px] mt-[10px]'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img src={chair} alt='chair' className=' rounded-lg lg:w-4/5 w-full md:mb-4 shadow-2xl ' />
                    <div className='mr-[24px]'>
                        <h1 className='text-5xl font-bold '>
                            Your New Smile Starts <br /> Here
                        </h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut
                            repudiandae et a id nisi.
                        </p>
                        <button className='btn btn-bg-color'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
