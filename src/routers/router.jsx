import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";



export const router = createBrowserRouter([
    {
        Component:RootLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'rider',
                element:<PrivateRoute>
                    <Rider></Rider>
                </PrivateRoute>
            },
            {
                path:'send-parcel',
                element:<PrivateRoute>
                    <SendParcel></SendParcel>
                </PrivateRoute>,
                loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
            },
            {
                path:'coverage',
                Component:Coverage,
                loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
            },
            {
                path:'about',
                Component:About,
            }
        ]
    },
    {
        path:'auth',
        Component:AuthLayout,
        children:[
            {
                index:true,
                Component:Login
            },
            {
                path: 'register',
                Component:Register
            }
        ]
    }
])