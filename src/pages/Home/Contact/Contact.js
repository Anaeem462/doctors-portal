import React from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import "../home.css";
const Contact = () => {
    const location = useLocation();

    return (
        <div className='appointment-bg flex justify-center py-[65px]'>
            {/* {location.key === "default" && toast.success("successfully send your message . Thank you !", { duration: 3000 })} */}
            <div className='card flex-shrink-0  '>
                <div className='card-body'>
                    <div className='text-center mb-[41px]'>
                        <h1 className='text-appointment'>Contact Us</h1>
                        <p className='text-[36px] text-white'>Stay connected with us</p>
                    </div>
                    <form action='https://formsubmit.co/abdullahnaeem462@gmail.com' method='POST'>
                        <div className='form-control'>
                            <input type='text' placeholder='Email Address' className='input input-bordered mb-4' required />
                            <input type='hidden' name='_next' value={process.env.REACT_APP_mysiteUrl} />
                        </div>
                        <div className='form-control'>
                            <input type='text' placeholder='Subject' name='_subject' className='input input-bordered mb-4' required />
                        </div>
                        <div className='form-control'>
                            <input type='textarea' placeholder='Your Message' name='message' className='input h-[120px] mb-[9]' required />
                            {/* <input type='hidden' name='_subject' value='New message!'></input> */}
                        </div>
                        <div className='form-control mt-6'>
                            <button className='btn btn-bg-color'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
