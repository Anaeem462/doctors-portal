import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Navbar from "../../../Shared/Navbar/Navbar";
import UserAppointment from "../../UserAppointment/UserAppointment";
import { useQuery } from "@tanstack/react-query";
import DateModal from "../DateModal";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import Loading from "../../../Shared/Loading/Loading";
import DeleteConfirmModal from "../DeleteConfirmModal";

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [deleteData, setDeleteData] = useState();
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const date = format(selectedDate, "PP");

    const {
        data = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["bookings", user.email, date],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_serverurl}/bookings?email=${user.email}&date=${date}`, {
                headers: { authorization: localStorage.getItem("userToken") },
            }).then((res) => res.json()),
    });
    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_serverurl}/bookings/${id}`, {
            method: "DELETE",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged) {
                    refetch();
                    toast.success("deleted service succesfully", { duration: 3000, position: "top-center" });
                }
            });
    };

    return (
        <div className=' bg-slate-100 h-full rounded-xl  py-8 px-4 '>
            <div className=' flex justify-between py-4'>
                <h1 className='text-2xl'>My Appointment</h1>
                <label htmlFor='date-modal' className='btn btn-outline'>
                    {date}
                </label>
            </div>
            <DeleteConfirmModal deleteData={deleteData} handleDelete={handleDelete}></DeleteConfirmModal>
            <div className='mx-auto'>
                <UserAppointment data={data} setDeleteData={setDeleteData} date={date}></UserAppointment>
            </div>
            <DateModal selectedDate={selectedDate} setSelectedDate={setSelectedDate}></DateModal>
        </div>
    );
};

export default Dashboard;
