import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ErrorPage = () => {
    const { logOutUser } = useContext(AuthContext);
    const error = useRouteError();
    return (
        <div className='flex items-center justify-center border border-green-600 w-full h-screen'>
            <div className='text-center'>
                <p className='text-4xl font-bold text-red-600'>Something went wrong!!</p>
                <p className='text-2xl font-semibold text-red-400 my-6'>{error.message || error.statusText}</p>

                <Link to='/login'>
                    <button onClick={logOutUser} className='btn btn-xl btn-primary text-white'>
                        Log Out
                    </button>
                </Link>
                <span className='text-xl font-bold mx-5'>OR</span>
                <Link to='/'>
                    <button className='btn btn-xl btn-primary text-white'>Go to homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
