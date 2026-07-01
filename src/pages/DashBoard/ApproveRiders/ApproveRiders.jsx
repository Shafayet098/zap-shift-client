// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: riders = [] } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data;
        }
    })
    // console.log(riders)
    const updateRiderStatus=(rider,status)=>{
        const updatedInfo = {status: status,email:rider.rider_email}
        axiosSecure.patch(`/riders/${rider._id}`, updatedInfo)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider status is set to be ${status}`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }
    const handleApproval = rider =>{
        updateRiderStatus(rider, 'approved')
    }
    const handleRejection = rider =>{
        updateRiderStatus(rider,'rejected')
    }
    
    return (
        <div>
            <h2 className='text-3xl'>Riders Pending Approval: {riders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>District</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider,index)=><tr key={rider._id}>
                                    <td>{index+1}</td>
                                    <td>{rider.rider_name}</td>
                                    <td>{rider.rider_email}</td>
                                    <td className={`${rider.status==='pending'?'text-red-400':'text-green-400'}`}>
                                        {rider.status}</td>
                                    <td>{rider.rider_district}</td>
                                    <td>
                                        <button onClick={()=>handleApproval(rider)} className="btn bg-white hover:bg-primary">
                                            <FaUserCheck />
                                        </button>
                                        <button onClick={()=>handleRejection(rider)} className="btn bg-white hover:bg-red-500">
                                            <IoPersonRemove />
                                        </button>
                                        <button className="btn bg-white hover:bg-red-600">
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

export default ApproveRiders;