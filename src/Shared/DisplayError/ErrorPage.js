import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const ErrorPage = () => {
    const { logOutUser } = useContext(AuthContext);
    const error = useRouteError();
    return (
        <div className='flex items-center justify-center'>
            <div className='text-center '>
                <p className='text-4xl font-bold text-red-600'>Something went wrong!!</p>
                <p className='text-2xl font-semibold text-red-400'>{error.message || error.statusText}</p>

                <Link to='/login'>
                    <button onClick={logOutUser} className='btn btn-xl btn-primary'>
                        please Log Out
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
