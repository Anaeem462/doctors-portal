import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

import saveUser from "../../hooks/saveUser";
import { Helmet } from "react-helmet";
const SignUp = () => {
    const { createUser, updateUser, googleSignin, loading } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (data) => {
        const { email, password, name } = data;

        setSignUpError("");

        createUser(email, password)
            .then((result) => {
                const userInfo = {
                    displayName: name,
                };

                updateUser(userInfo)
                    .then(() => {
                        saveUser(email, name, password, "", from, navigate);
                    })
                    .catch((err) => toast.error(err.message, { position: "top-center", duration: 3000 }));
            })

            .catch((err) => {
                setSignUpError(err.message);
                toast.error(err.message, { position: "top-center", duration: 3000 });
            });
    };

    const handleGoogleSignIn = () => {
        googleSignin()
            .then((result) => {
                saveUser(result.user.email, result.user.displayName, result.user.uid, result.providerId, from, navigate);
            })
            .catch((err) => {
                toast.error(err.message, { duration: 2000, position: "top-center" });
                // console.log(err.message);
            });
    };

    return (
        <div className=' flex items-center justify-center py-12'>
            <div className=' card p-7 shadow-2xl xl:w-1/3'>
                <h1 className='text-center text-2xl '>SignUp</h1>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className='form-control w-full'>
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
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "please Enter a valid email",
                                },
                            })}
                            // mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && <p className='text-red-700 text-[12px]'>{errors.email.message}</p>}

                        <label htmlFor='password' className='label mt-2'>
                            <span className='lebel-text'> password</span>
                        </label>
                        <input
                            className='input input-bordered w-full shadow-inner '
                            type='password'
                            name='password'
                            placeholder='password'
                            {...register("password", {
                                required: { value: true, message: "password is required" },
                                minLength: { value: 8, message: "password at least 8 digit" },
                                pattern: {
                                    value: /(?=.*[A-za-z])(?=.*[@$%&!+*/-])(?=.*[0-9])/,
                                    message: `password must have a letter,a special character and a number`,
                                },
                            })}
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {errors.password && <p className='text-red-700 text-[12px]'>{errors.password.message}</p>}
                    </div>

                    <button className='w-full btn bg-neutral mt-4 text-[#D4D9E3]'>
                        {loading ? <div className='animate-spin h-5 w-5  border-2 border-sky-500 border-l-0 rounded-full'></div> : "Sign Up"}
                    </button>

                    <p className='my-2'>
                        Already Have an Account?{" "}
                        <Link to='/login' className='text-[#19D3AE] text-[12px]'>
                            please log in
                        </Link>{" "}
                    </p>
                    <div className='divider'>OR</div>
                </form>

                <button onClick={handleGoogleSignIn} className='w-full btn btn-outline border border-[#3A4256] text-[#3A4256] mt-4 '>
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default SignUp;
