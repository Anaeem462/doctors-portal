import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import Navbar from "../../../Shared/Navbar/Navbar";
import useAdmin from "./../../../hooks/useAdmin";
export const isDashboard = true;
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    // console.log(isAdmin, user?.email);
    return (
        <div>
            <Navbar></Navbar>

            <div className='drawer drawer-mobile '>
                <input id='dashbord-drawer' type='checkbox' className='drawer-toggle' />

                <div className='drawer-side  '>
                    <label htmlFor='dashbord-drawer' className='drawer-overlay'></label>
                    <ul className='menu  p-4 text-base-content bg-white'>
                        {/* <!-- Sidebar content here --> */}

                        <li>
                            <Link to='/dashboard'>My Appointmens</Link>
                        </li>

                        {isAdmin && (
                            <>
                                <li>
                                    <Link to='/dashboard/allUsers'>All Users</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/adddoctors'>Add Doctors</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/alldoctors'>All Doctors</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className='drawer-content   flex justify-center  py-10 '>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
