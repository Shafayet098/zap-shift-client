// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        }
    })
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch() //refresh the data in the UI
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    const handlePayment=async(parcel)=>{
        const paymentInfo = {
            cost: parcel.cost,
            parcel_id:parcel._id,
            sender_email : parcel.sender_email,
            parcel_name : parcel.parcel_name
        }
        const res=await axiosSecure.post('/payment-checkout-session',paymentInfo)
        window.location.assign(res.data.url)
    }

    return (
        <div className="mt-2">
            <h1>All of My Parcels Here: {parcels.length}</h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-white">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcel_name}</td>
                                <td>{parcel.cost}</td>
                                <td>{
                                    parcel.payment_status === 'paid' ?
                                        <span className="text-green-400">paid</span>
                                        :
                                        //for old session
                                        // <Link to={`/dashboard/payment/${parcel._id}`}>
                                        // <button className="btn btn-primary text-black btn-sm">Pay</button>
                                        // </Link>
                                        //for new session
                                        <button onClick={()=>handlePayment(parcel)}  className="btn btn-primary text-black btn-sm">Pay</button>

                                }
                                </td>
                                <td>{parcel.deliveryStatus}</td>
                                <td>
                                    <button  className="btn bg-white btn-square hover:bg-primary">
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button  className="btn mx-2 bg-white btn-square hover:bg-primary">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(parcel._id)} className="btn bg-white btn-square hover:bg-primary">
                                        <RiDeleteBin6Line />
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;