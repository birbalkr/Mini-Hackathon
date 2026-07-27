import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

function Login() {
    const notify = () => toast.error('Invalid Email & Password!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });



    const navigate = useNavigate();
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
    });
    let userData = JSON.parse(localStorage.getItem("userData"))

    const handleForm = (data) => {
        if (userData.email === data.email && userData.password === data.password) {
            userData.isLogin = true
            localStorage.setItem("userData", JSON.stringify(userData));
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            toast.success('Login successful', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        else {
            notify()
            reset()
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <form onSubmit={handleSubmit(handleForm)}>
                    <input
                        {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" } })}
                        type="email" placeholder='Email' className="w-full border rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <input
                        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                        type="text" placeholder='Password' className="w-full border rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Don't have an account?
                    <button className="text-blue-600 font-semibold" onClick={() => { navigate("/register") }}>
                        Create Account
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;