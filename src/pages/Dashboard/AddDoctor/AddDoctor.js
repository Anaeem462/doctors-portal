import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
    const [signUpError, setSignUpError] = useState();
    // const imgbbkey = process.env.REACT_APP_imagebb_key;
    const imgbbUrl = process.env.REACT_APP_imagebb_url;
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { data: specialities = [], isLoading } = useQuery({
        queryKey: ["speciality"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_serverurl}/appointment-Speciality`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }
    // console.log(specialities);
    const handleAddDoctor = (data) => {
        setSignUpError("");
        const image = data.photo[0];
        const formData = new FormData();
        formData.append("image", image);

        fetch(imgbbUrl, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((imagedata) => {
                if (imagedata.success) {
                    const photoUrl = imagedata.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        image: photoUrl,
                    };
                    // save doctor in database
                    fetch(`${process.env.REACT_APP_serverurl}/doctors?speciality=${data.speciality}&email=${data.email}`, {
                        method: "POST",
                        headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            if (result.acknowledged) {
                                toast.success("successfully added in doctors list");
                                navigate("/dashboard/alldoctors");
                            } else {
                                toast.error(result.message);
                            }
                        })
                        .catch((err) => console.log(err));
                }
            });
    };
    return (
        <div>
            <h1 className='text-4xl font-bold'>ADD A NEW DOCTOR</h1>
            <div className='bg-slate-100 rounded-xl  py-8 px-4 mt-5 '>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className='form-control w-full'>
                        <div>
                            <label htmlFor='name' className='label mt-2'>
                                <span className='lebel-text'> Name</span>
                            </label>
                            <input
                                className='input input-bordered w-full shadow-inner '
                                type='Text'
                                name='name'
                                placeholder='Name'
                                {...register("name", {
                                    required: { value: true, message: "Name is required" },
                                })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {signUpError || (errors.name && <p className='text-red-700 text-[12px]'>{signUpError || errors.name.message}</p>)}
                        </div>
                        <div>
                            <label htmlFor='email' className='label mt-2'>
                                <span className='lebel-text'> Email</span>
                            </label>
                            <input
                                className='input input-bordered w-full shadow-inner '
                                type='email'
                                name='email'
                                placeholder='Email'
                                {...register("email", {
                                    required: { value: true, message: "Email is required" },
                                })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {errors.email && <p className='text-red-700 text-[12px]'>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor='select' className='label mt-2'>
                                <span className='lebel-text'> Speciality</span>
                            </label>
                            <select {...register("speciality")} className='select input-bordered w-full '>
                                {specialities?.map((specaility) => (
                                    <option key={specaility._id} value={specaility.name}>
                                        {specaility.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='photo' className='label mt-2'>
                                <span className='lebel-text'> photo</span>
                            </label>
                            <input
                                // className='input input-bordered w-full shadow-inner '
                                type='file'
                                name='photo'
                                placeholder='Photo'
                                {...register("photo", {
                                    required: { value: true, message: "photo is required" },
                                })}
                                aria-invalid={errors.photo ? "true" : "false"}
                            />
                            {signUpError || (errors.photo && <p className='text-red-700 text-[12px]'>{signUpError || errors.photo.message}</p>)}
                        </div>
                    </div>

                    <input type='submit' value='ADD Doctor' className='w-full btn bg-neutral mt-4 text-[#D4D9E3]' />

                    {/* <div className='divider'>OR</div> */}
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
