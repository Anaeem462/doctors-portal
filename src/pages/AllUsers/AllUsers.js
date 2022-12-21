import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const AllUsers = () => {
    const { user } = useContext(AuthContext);
    const {
        data: userData = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetch(`${process.env.REACT_APP_serverurl}/users`).then((res) => res.json()),
    });

    const handleMakeAdmin = (users) => {
        fetch(`${process.env.REACT_APP_serverurl}/Admin/user?email=${users?.email}`, {
            method: "PUT",
            headers: { authorization: localStorage.getItem("userToken") },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result?.modifiedCount >= 1) {
                    toast.success(`${users?.name} now admin maked by ${user?.displayName}`);
                    return refetch();
                }
                if (result?.message) {
                    return toast.error(result?.message);
                }
                console.log(result);
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        const adminPermission = window.confirm("Do you want to delete");
        if (adminPermission) {
            fetch(`${process.env.REACT_APP_serverurl}/users/${id}`, {
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
            {!userData?.length > 0 ? (
                <p className='text-center text-red-600 text-4xl'>"No User"</p>
            ) : (
                <div className='bg-slate-100 rounded-xl  py-8 px-4 '>
                    <h1 className='text-4xl mb-4'>ALL Users</h1>

                    <table className='table w-full'>
                        <thead className='bg-[#E6E6E6] '>
                            <tr className=''>
                                <th>SN</th>
                                <th>Name</th>
                                <th>email</th>

                                <th>Admin</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {userData?.map((user, i) => (
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td title={user.password || user.Useruid}>{user.email}</td>

                                    <td>
                                        {" "}
                                        {user?.role !== "Admin" && (
                                            <button onClick={() => handleMakeAdmin(user)} className='btn btn-xs btn-primary mt-4'>
                                                make adming
                                            </button>
                                        )}
                                    </td>

                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className='btn btn-xs mt-4 btn-error'>
                                            x
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
