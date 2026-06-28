// import React from 'react';

import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to={'/auth'}></Navigate>
    }
    return children;
};

export default PrivateRoute;