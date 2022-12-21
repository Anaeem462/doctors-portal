import { useQuery } from "@tanstack/react-query";
import React from "react";
import { async } from "@firebase/util";
import { toast } from "react-hot-toast";
import Loading from "../../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const AllDoctors = () => {
    const {
        data: doctorsData = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["alldoctors"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_serverurl}/alldoctors`, {
                headers: { authorization: localStorage.getItem("userToken") },
            });
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Loading></Loading>;
    }
    // console.log(doctorsData);

    const handleDelete = (id) => {
        const adminPermission = window.confirm("Do you want to deleted");
        if (adminPermission) {
            fetch(`${process.env.REACT_APP_serverurl}/doctors/${id}`, {
                method: "DELETE",
                headers: { authorization: localStorage.getItem("userToken") },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount > 0) {
                        toast.success("successfully deleted");
                        refetch();
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                    console.error(err);
                });
        }
    };

    return (
        <div>
            {!doctorsData?.length ? (
                <div>
                    <p className='text-center text-red-600 text-4xl'>"Please Add a doctor"</p>
                    <Link to='/dashboard/adddoctors' className='btn-xl btn my-5 btn-primary text-white'>
                        Add Doctors
                    </Link>
                </div>
            ) : (
                <div className='bg-slate-100  rounded-xl  py-8 px-4'>
                    <h1 className='text-4xl font-bold'>DOCTORS ARE :</h1>
                    <div className='mt-10 mx-4'>
                        <table className='table w-full'>
                            <thead className='bg-[#E6E6E6] '>
                                <tr className=''>
                                    <th>SN</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Speciality</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {doctorsData?.map((doctor, i) => (
                                    <tr key={i}>
                                        <th>
                                            {i >= 9 ? "" : 0}
                                            {i + 1}
                                        </th>
                                        <td>
                                            <img className='rounded-full w-10 h-10 ' src={doctor.image} alt='' />
                                        </td>
                                        <td>
                                            <p title={doctor.email}>{doctor?.name}</p>
                                        </td>
                                        <td>{doctor?.speciality}</td>
                                        <td>
                                            <button onClick={() => handleDelete(doctor?._id)} className='btn btn-sm mt-4 btn-error'>
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllDoctors;
