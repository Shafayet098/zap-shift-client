// import React from 'react';
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
    const { registerUser, signInGoogle } = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result)
            }).catch(err => console.log(err))
    }
    const loginWithGoogle = () => {
        signInGoogle().then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="card mt-32  w-full  max-w-sm shrink-0 ">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <h1 className="text-4xl font-bold">Create An Account</h1>
                <p className="text-sm py-2">Register With ZapShift</p>
                <fieldset className="fieldset">
                    <label className="label text-sm">Email</label>
                    <input type="email" className="input w-full bg-white" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                    <label className="label text-sm">Password</label>
                    <input type="password" className="input w-full bg-white" placeholder="Password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/ })} />

                    {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">
                        Password Must be 6 characters or longer</p>}
                    {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have at least one capital letter, one small letter, one special character and one digit</span>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn bg-primary mt-4">Register</button>
                </fieldset>
                <p className="text-sm pt-2">Already Have an Account <Link to={'/auth'} className="font-bold text-primary">Login</Link></p>
                <p className="text-center py-2">Or</p>
                {/* Google */}
                <button onClick={loginWithGoogle} className="btn bg-white text-black hover:bg-slate-200 border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Register with Google
                </button>
            </form>
        </div>
    );
};

export default Register;