import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({})
    localStorage.setItem("userData", JSON.stringify(userData))

    let { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
    })

    const handleForm = (data) => {
        console.log(data);
        setUserData((prev) => ({
            ...prev,
            ...data,
            isLogin: true,
        }));
        reset()
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit(handleForm)}>

                    <input
                        {...register("name", { required: "Name is required", })}
                        type="text" placeholder='Name' className='border p-2 rounded-xl' />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                    <input
                        {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}
                        type="email" placeholder='Email' className='border p-2 rounded-xl' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        type="text" placeholder='Password' className='border p-2 rounded-xl' />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className='py-2 px-3 bg-blue-600 rounded-xl'>Submit</button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <button className="text-green-600 font-semibold" onClick={() => navigate("/")}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;