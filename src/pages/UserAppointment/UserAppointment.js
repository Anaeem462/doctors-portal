import React from "react";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "../Dashboard/DeleteConfirmModal";

const UserAppointment = ({ date, data, setDeleteData }) => {
    // const { patientName, slot, appointmentDate, treatmentName } = data;

    return (
        <div>
            {data.length > 0 ? (
                <table className='table w-full'>
                    <thead className='bg-[#E6E6E6] '>
                        <tr className=''>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>payment</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {data.map((user, i) => (
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.patientName}</td>
                                <td>{user.treatmentName}</td>
                                <td>{user.appointmentDate}</td>
                                <td>{user.slot}</td>
                                <td>
                                    <Link
                                        disabled={user?.paid}
                                        title={user.price}
                                        className='btn btn-sm btn-primary'
                                        to={`/dashboard/payment/${user._id}`}>
                                        {user?.paid ? "payed" : "pay"}
                                    </Link>
                                </td>
                                <td className=''>
                                    <label
                                        htmlFor='delete-confirm-modal'
                                        onClick={() => setDeleteData(user)}
                                        disabled={user?.paid}
                                        className='btn btn-sm btn-warning'>
                                        x
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    <p className='text-center text-red-600 text-4xl mt-5 '>"No Service booked on {date}"</p>
                    <p className='text-center text-red-600 text-4xl my-5'>please booked an appointment</p>
                    <div className='w-full flex justify-center'>
                        <Link className='btn btn-xl btn-primary text-white' to='/appointment'>
                            Appointment
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserAppointment;
