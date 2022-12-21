import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import saveUser from "../../hooks/saveUser";
import Loading from "./../../Shared/Loading/Loading";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signUpUser, forgetPassword, googleSignin, loading } = useContext(AuthContext);
    const [loginError, setLogInError] = useState();

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();

    const from = location?.state?.from?.pathname || "/";

    const handleLogIn = (data) => {
        const { email, password } = data;

        setLogInError("");

        signUpUser(email, password)
            .then((result) => {
                const user = result.user;
                saveUser(email, user.displayName, password, "", from, navigate);
            })
            .catch((err) => {
                setLogInError(err.message);
                toast.error(err.message, { position: "top-center", duration: 3000 });
            });
    };

    const handleForgetPassoword = () => {
        const email = watch("email");
        forgetPassword(email)
            .then(() => toast.success(`Check your ${email} inbox and set new password`, { duration: 5000, position: "top-center" }))
            .catch((err) => {
                toast.error(err.message, { duration: 3000, position: "top-center" });
                console.error(err.message);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignin()
            .then((result) => {
                saveUser(result.user.email, result.user.displayName, result.user.uid, result.providerId, from, navigate);
            })
            .catch((err) => {
                toast.error(err.message, { duration: 3000, position: "top-center" });
                console.error(err);
            });
    };

    return (
        <div className='h-[800px] flex items-center justify-center '>
            <div className='card shadow-2xl p-7 xl:w-1/4 '>
                <h2 className='text-center text-2xl '>Log in</h2>

                <form onSubmit={handleSubmit(handleLogIn)}>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>

                        <input
                            type='email'
                            className='input input-bordered w-full'
                            {...register("email", {
                                required: { value: true, message: "Email is required" },
                            })}
                            placeholder='Email'
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                            <p role='alert' className='text-red-700 text-[12px]'>
                                {errors.email.message}
                            </p>
                        )}

                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>

                        <input
                            type='password'
                            className='input input-bordered w-full'
                            {...register("password", {
                                required: { value: true, message: " password is required" },
                                minLength: { value: 8, message: "password at least 8 digit" },
                                pattern: {
                                    value: /(?=.*[A-za-z])(?=.*[@$%&!+*/-])(?=.*[0-9])/,
                                    message: `password must have a letter,a special character and a number`,
                                },
                            })}
                            placeholder='Password'
                            aria-invalid={errors.password ? "true" : "false"}
                        />
                        {loginError || (errors.password && <p className='text-red-700 text-[12px]'>{loginError || errors.password.message}</p>)}

                        <label className='label'>
                            <Link className='text-[#19D3AE] text-[12px] label-text' onClick={handleForgetPassoword}>
                                Forget Password ?
                            </Link>
                        </label>
                    </div>
                    <button className='w-full btn bg-neutral mt-4 text-[#D4D9E3]'>
                        {loading ? <div className='animate-spin h-5 w-5  border-2 border-sky-500 border-l-0 rounded-full'></div> : "Log in"}
                    </button>

                    <p className='my-2'>
                        New to Doctors Portal?{" "}
                        <Link to='/signup' className='text-[#19D3AE] text-[12px]'>
                            Create New Account
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

export default Login;
