import React, { useState } from "react";
import "./../../Home/home.css";
import { format } from "date-fns";
import AvailableData from "./AvailableData";
import BookingModal from "../Booking/BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatMent] = useState(null);

    const date = format(selectedDate, "PP");

    const {
        data: appointmentOptions = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["appointmentOptions", date],
        queryFn: () => fetch(`${process.env.REACT_APP_serverurl}/appointmentOptions?date=${date}`).then((res) => res.json()),
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='my-7'>
            <p className='text-center text-appointment'>Available Appointments on {format(selectedDate, "PP")}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-9 my-24 mx-12'>
                {appointmentOptions?.map((options) => (
                    <AvailableData key={options._id} option={options} setTreatMent={setTreatMent}></AvailableData>
                ))}
            </div>
            {treatment && (
                <BookingModal refetch={refetch} treatment={treatment} selectedDate={selectedDate} setTreatMent={setTreatMent}></BookingModal>
            )}
        </div>
    );
};

export default AvailableAppointments;
