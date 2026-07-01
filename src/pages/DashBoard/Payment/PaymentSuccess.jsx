// import React from 'react';

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [transactionId, setTransactionId] = useState();
    const [trackingId, setTrackingId] = useState();

    const sessionId = searchParams.get('session_id')
    const axiosSecure = useAxiosSecure();

    console.log(sessionId);
    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
                setTransactionId(res.data.transactionId)
                setTrackingId(res.data.trackingId)
            })
        }
    },[sessionId,axiosSecure])
    return (
        <div>
            <h2 className="text-4xl">Payment Successful</h2>
            <p>Your TransactionId: {transactionId}</p>
            <p>Your Parcel Tracking Id: {trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;