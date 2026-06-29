// import React from 'react';

import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const senderSelectedRegion = watch("sender_region")
    const receiverSelectedRegion = watch("receiver_region")

    const serviceCenters = useLoaderData();
    const regionDuplicate = serviceCenters.map(r => r.region)
    const regions = [...new Set(regionDuplicate)]

    const senderDistictByRegion = (selectedRegion) => {
        const SelectedserviceCenters = serviceCenters.filter(center => center.region === selectedRegion)
        const districts = SelectedserviceCenters.map(obj => obj.district)
        return districts
    }
    const receiverDistictByRegion = (selectedRegion) => {
        const SelectedserviceCenters = serviceCenters.filter(center => center.region === selectedRegion)
        const districts = SelectedserviceCenters.map(obj => obj.district)
        return districts
    }
    const handleParcelSubmit = (data) => {
        const isdocument = data.document === 'document' ? true : false;
        const inCity = data.sender_district === data.receiver_district ? true : false;
        const weight = parseFloat(data.parcel_weight)
        let cost;
        
        if (isdocument) {
            cost = inCity ? 60 : 80;
            console.log(cost)
        }
        else {
            if (weight <= 3) {
                cost = inCity ? 110 : 150;
                console.log(cost)
                
            }
            else {
                let extra = weight - 3;
                cost = inCity ? 110 + 40 * extra : 150 + 40 * extra + 40;
                console.log(cost)
                
            }
        }
        Swal.fire({
            title: "Are you sure?",
            text: `You Will be charged ${cost} taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Are you agree"
        }).then((result) => {
            if (result.isConfirmed) Swal.fire({
                // title: "Deleted!",
                // text: "Your file has been deleted.",
                // icon: "success"
            });
        });
    }

    return (
        <div className="bg-white mt-8 p-8 rounded-2xl">
            <h1 className="font-bold text-secondary text-4xl">Send A Parcel</h1>
            <h3 className="text-xl font-bold text-secondary pt-6">Enter Your Parcel Details</h3>
            <form onSubmit={handleSubmit(handleParcelSubmit)}>
                <div>
                    <fieldset className="fieldset mt-8 pt-6 border-t-2 border-slate-300 flex gap-4">
                        <label className="label ">
                            <input type="radio"{...register('document')} value='document' className="radio text-xl font-black" defaultChecked />Document
                        </label>
                        <label className="label">
                            <input type="radio" {...register('document')} value='non_document' className="radio text-xl font-black" />Non-Document
                        </label>
                    </fieldset>
                    <div className="grid py-4 grid-cols-1 lg:grid-cols-2 gap-12">
                        <fieldset className="fieldset ">
                            <label className="label">Parcel Name</label>
                            <input type="text" className="input w-full bg-white" placeholder="Parcel Name"{...register('parcel_name')} />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <label className="label">Parcel Weight(kg)</label>
                            <input type="text" className="input w-full bg-white" placeholder="Parcel Weight"{...register('parcel_weight')} />
                        </fieldset>
                    </div>
                </div>
                {/* Sender Deatils */}
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <fieldset className="fieldset">
                        <h3 className="text-lg font-semibold">Sender Details</h3>
                        <label className="label pt-2">Sender Name</label>
                        <input type="text" className="input w-full bg-white" placeholder="Name"{...register('sender_name')} />

                        <label className="label pt-2">Address</label>
                        <input type="text" className="input w-full bg-white" placeholder="Address"{...register('sender_address')} />
                        <label className="label pt-2">Sender Phone Number</label>
                        <input type="number" className="input w-full bg-white" placeholder="Phone Number"{...register('sender_phone_number')} />
                        {/* Sender Region */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Your Region</label>
                            <select defaultValue="Pick a Region" className="select w-full bg-white 0" {...register('sender_region')}>
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Sender District */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Your District</label>
                            <select defaultValue="Pick a District" className="select w-full bg-white 0" {...register('sender_district')}>
                                <option disabled={true}>Pick a District</option>
                                {
                                    senderDistictByRegion(senderSelectedRegion).map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>

                        <label className="label pt-2">Pickup Instruction</label>
                        <textarea className="textarea w-full bg-white" placeholder="Pickup Instruction"{...register('sender_pickup_instruction')}></textarea>

                    </fieldset>
                    {/* Receiver Details */}
                    <fieldset className="fieldset">
                        <h3 className="text-lg font-semibold">Receiver Details</h3>
                        <label className="label pt-2">Receiver Name</label>
                        <input type="text" className="input w-full bg-white" placeholder="Name"{...register('receiver_name')} />

                        <label className="label pt-2">Receiver Address</label>
                        <input type="text" className="input w-full bg-white" placeholder="Address"{...register('receiver_address')} />
                        <label className="label pt-2">Receiver Phone Number</label>
                        <input type="number" className="input w-full bg-white" placeholder="Phone Number"{...register('receiver_phone_number')} />

                        {/* Receiver Region */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Receiver Region</label>
                            <select defaultValue="Pick a Region" className="select w-full bg-white 0" {...register('receiver_region')}>
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Receiver District */}
                        <fieldset className="fieldset">
                            <label className="label pt-2">Receiver District</label>
                            <select defaultValue="Pick a District" className="select w-full bg-white 0" {...register('receiver_district')}>
                                <option disabled={true}>Pick a District</option>
                                {
                                    receiverDistictByRegion(receiverSelectedRegion).map((reg, index) => <option key={index}>{reg}</option>)
                                }
                            </select>
                        </fieldset>

                        <label className="label pt-2">Delivery Instruction</label>
                        <textarea className="textarea w-full bg-white" placeholder="Delivery Instruction"{...register('delivery_instruction')}></textarea>
                    </fieldset>
                </div>
                <input className="btn btn-primary mt-8 text-secondary font-semibold" type="submit" value="Process To Confirm Booking" />
            </form>
        </div>
    );
};

export default SendParcel;