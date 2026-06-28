// import React from 'react';
import { useForm } from "react-hook-form"

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register('email',{required:true})} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register('password',{required:true,minLength:6, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/})}/>

                    {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">
                        Password Must be 6 characters or longer</p>}
                    {errors.password?.type === 'pattern'&& <span className="text-red-500">Password must have at least one capital letter, one small letter, one special character and one digit</span>}
                    
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;