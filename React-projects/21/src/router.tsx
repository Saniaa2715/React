import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from './Components/Login/Login';
import { Admin } from "./Pages/Admin";
import { User } from "./Pages/User";

export const router = createBrowserRouter([
    {
        path: '',
        element:< App/>,
        children: [
            { 
                path:'',
                element:<Login/>
            },
            {
                path: '/admin',
                element: <Admin/>,
                
            },
            {
                path: '/user',
                element: <User/>,

            }
        ]
    }
])

