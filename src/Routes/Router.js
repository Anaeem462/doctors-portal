import AllUsers from "../pages/AllUsers/AllUsers";
import Appointment from "../pages/Appointment/Appointment";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../pages/Dashboard/DashboardLayout/DashboardLayout";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import UserAppointment from "../pages/UserAppointment/UserAppointment";
import Login from "./../pages/Login/Login";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import AllDoctors from "./../pages/Dashboard/AllDoctors/AllDoctors";
import Payment from "../pages/Dashboard/Payment/Payment";
import ErrorPage from "../Shared/DisplayError/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },

    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/dashboard/allUsers",
                element: (
                    <AdminRoute>
                        <AllUsers></AllUsers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/adddoctors",
                element: (
                    <AdminRoute>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/alldoctors",
                element: (
                    <AdminRoute>
                        <AllDoctors></AllDoctors>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/payment/:id",
                element: (
                    <PrivateRoute>
                        <Payment></Payment>
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`${process.env.REACT_APP_serverurl}/bookings/${params.id}`),
            },
        ],
    },
]);
