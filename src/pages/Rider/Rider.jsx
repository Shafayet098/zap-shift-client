// import React from 'react';

import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import agent from '../../../src/assets/agent-pending.png'

const Rider = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // formState: { errors },
        watch,
    } = useForm()

    const riderSelectedRegion = watch("rider_region")
    

    const serviceCenters = useLoaderData();
    const regionDuplicate = serviceCenters.map(r => r.region)
    const regions = [...new Set(regionDuplicate)]
    console.log(regions)

    const riderDistictByRegion = (selectedRegion) => {
        const SelectedserviceCenters = serviceCenters.filter(center => center.region === selectedRegion)
        const districts = SelectedserviceCenters.map(obj => obj.district)
        console.log(districts)
        return districts
    }

    const handleParcelSubmit = (data) => {
        console.log(data)
        axiosSecure.post('/riders',data)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    position:"top-end",
                    icon:"success",
                    title:"Your application has been submitted. we will reach to you in 14 days",
                    showConfirmButton: false,
                    timer:2000
                })
            }
        })
    }
    return (
        <div className="bg-white mt-8 p-8 rounded-2xl">
            <h1 className="font-bold text-secondary text-4xl">Be a Rider</h1>
            <p className="w-[40%] my-2">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <h3 className="text-xl font-bold text-secondary pt-6">Tell us about yourself</h3>
            
            <form onSubmit={handleSubmit(handleParcelSubmit)}>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <fieldset className="fieldset">
                        {/* Rider Name */}
                        <label className="label pt-2">Your Name</label>
                        <input type="text" className="input w-full bg-white" placeholder="Name"
                            defaultValue={user?.displayName}
                            {...register('rider_name')} />
                        {/* Rider Email */}
                        <label className="label pt-2">Your Email</label>
                        <input type="email" className="input w-full bg-white" placeholder="Address"{...register('rider_email')} />
                        {/* Rider License Number */}
                        <label className="label pt-2">Driving License Number</label>
                        <input type="text" className="input w-full bg-white" placeholder="Driving License Number"{...register('driving_license_number')} />
                        {/* Bike registration Number */}
                        <label className="label pt-2">Driving Registration Number</label>
                        <input type="text" className="input w-full bg-white" placeholder="Driving Registration Number"{...register('driving_registration_number')} />
                        {/* Rider Mobile Number */}
                        <label className="label pt-2">Driving Mobile Number</label>
                        <input type="number" className="input w-full bg-white" placeholder="Driving Mobile Number"{...register('driving_mobile_number')} />

                        {/* Bike brand model and year */}
                        <label className="label pt-2">Bike brand, model and Year </label>
                        <input type="text" className="input w-full bg-white" placeholder="Brand, Model and Year "
                            defaultValue={user?.email}
                            {...register('rider_bike_model')} />

                        {/* Region */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Your Region</label>
                            <select defaultValue="Pick a Region" className="select w-full bg-white 0" {...register('rider_region')}>
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Rider District */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Your District</label>
                            <select defaultValue="Pick a District" className="select w-full bg-white 0" {...register('rider_district')}>
                                <option disabled={true}>Pick a District</option>
                                {
                                    riderDistictByRegion(riderSelectedRegion).map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>

                        <label className="label pt-2">Tell Us about yourself</label>
                        <textarea className="textarea w-full bg-white" placeholder="Tell Us About you"{...register('rider_about')}></textarea>

                    </fieldset>
                    {/* Receiver Details */}
                    <div>
                        <img src={agent} alt="" />
                    </div>
                </div>
                <input className="btn btn-primary mt-8 text-secondary font-semibold" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Rider;