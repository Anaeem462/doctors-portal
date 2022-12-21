import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { AuthContext } from "../../Context/AuthProvider";
import { isDashboard } from "./../../pages/Dashboard/DashboardLayout/DashboardLayout";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname.split("/");

    const handleLogOut = () => {
        logOutUser()
            .then(() => {})
            .catch((err) => console.log(err));
    };

    const navitems = (
        <React.Fragment>
            <li>
                <Link className='btn btn-ghost rounded-lg' to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link className='btn btn-ghost' to='/appointment'>
                    Appointment
                </Link>
            </li>
            <li>
                <Link className='btn btn-ghost' to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link className='btn btn-ghost' to='/reviews'>
                    Reviews
                </Link>
            </li>
            {user?.uid ? (
                <>
                    {" "}
                    <li>
                        <Link className='btn btn-ghost' onClick={handleLogOut}>
                            Log Out
                        </Link>
                    </li>
                    <li>
                        <Link className='btn btn-ghost rounded-lg' to='/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                </>
            ) : (
                <>
                    {" "}
                    <li>
                        <Link className='btn btn-ghost' to='/login'>
                            Log in
                        </Link>
                    </li>
                    <li>
                        <Link className='btn btn-ghost rounded-lg' to='/signup'>
                            Sign up
                        </Link>
                    </li>
                </>
            )}
        </React.Fragment>
    );

    return (
        <div>
            <div className='navbar bg-base-100  flex justify-between'>
                <div className='navbar-start flex justify-between  w-full'>
                    <div>
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                                <FaBars></FaBars>
                            </label>
                            <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                                {navitems}
                            </ul>
                        </div>
                        <Link to='/' className='btn btn-ghost normal-case text-xl'>
                            Doctors Portal
                        </Link>
                    </div>
                    {path[1] === "dashboard" && (
                        <label htmlFor='dashbord-drawer' className='btn btn-primary drawer-button lg:hidden'>
                            <FaBars></FaBars>
                        </label>
                    )}
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal p-0'>{navitems}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
