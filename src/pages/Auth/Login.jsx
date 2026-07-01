// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Login = () => {
    const { register,getValues, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const { signInUser,signInGoogle,forgetPassword } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location',location)

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(res => {
                console.log(res)
                navigate(location?.state||'/')
            }).catch(err => {
                console.log(err)
            })
    }
    const loginWithGoogle=()=>{
        signInGoogle().then(res=>{
            console.log(res)
            
            // Create user in the database
            const userInfo = {
                email: res.user.email,
                displayName: res.user.displayName,
                photoURL: res.user.photoURL
            }
            axiosSecure.post('/users',userInfo)
            .then(res=>{
                console.log("user data has been stored",res.data);
                navigate(location.state||'/');
            })

        }).catch(err=>{
            console.log(err)
        })
    }
    
    const handleForgetPassword=()=>{
        const email = getValues("email");
        console.log(email)
        forgetPassword(email).then(()=>{
            alert("Mail is send")
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="card mt-32  w-full  max-w-sm shrink-0 ">

            <form onSubmit={handleSubmit(handleLogin)} className="card-body flex flex-col">
                <h1 className="text-4xl font-bold">Welcome Back</h1>
                <p className="text-sm py-2">LogIn With ZapShift</p>
                <fieldset className="fieldset">
                    <label className="label text-sm">Email</label>
                    <input type="email" name='email' className="input w-full bg-white" placeholder="Email" {...register("email", { required: true })} />

                    {errors.email?.type === "required" && (
                        <p className="text-red-500">Email is required</p>
                    )}

                    <label className="label text-sm">Password</label>
                    <input type="password" className="input w-full bg-white" placeholder="Password" {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/ })} />

                    {errors.password?.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p className="text-red-500">Password must be 8 char long and composed of at least one capital letter, one small letter, one digit and one special character</p>
                    )}

                    <div><button onClick={handleForgetPassword} className="link link-hover">Forgot password?</button></div>
                    <button className="btn bg-primary mt-4 ">Login</button>
                </fieldset>
                <p>Don't have any Account? <Link
                state={location.state}
                to={'/auth/register'} className="font-bold text-primary">Register</Link></p>
                <p className="text-center ">Or</p>
                {/* Google */}
                <button onClick={loginWithGoogle} className="btn bg-white text-black hover:bg-slate-200 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </form>
        </div>
    );
};

export default Login;