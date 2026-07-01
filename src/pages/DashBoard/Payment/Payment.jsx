// import React from 'react';

import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";

const Payment = () => {
    const {parcel_id} = useParams();
    const axiosSecure = useAxiosSecure();

    const {isLoading, data:parcel} = useQuery({
        queryKey:['parcels',parcel_id],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/parcels/${parcel_id}`);
            return res.data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    const handlePayment=async()=>{
        const paymentInfo = {
            cost:parcel.cost,
            parcel_id:parcel._id,
            sender_email:parcel.sender_email,
            parcel_name:parcel.parcel_name
        }
        const res = await axiosSecure.post('/create-checkout-session',paymentInfo);
        console.log(res.data)
        window.location.href = res.data.url;
    }

    return (
        <div>
            <h2>Please Pay ${parcel.cost} for: {parcel.parcel_name}</h2>
            <button onClick={handlePayment} className="btn btn-primary text-black">Pay</button>
        </div>
    );
};

export default Payment;