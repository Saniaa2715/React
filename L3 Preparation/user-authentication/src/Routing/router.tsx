import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import App from "../App";
import SignUp from "../Pages/SignUp/SignUp";
import Owner from "../Layouts/Owner/Owner";
import FacilityManager from "../Layouts/FacilityManager/FacilityManager";
import ToolCribManager from "../Layouts/ToolCribManager/ToolCribManager";
import WorkspaceManager from "../Layouts/WorkspaceManager/WorkspaceManager";
import Worker from "../Layouts/Worker/Worker";
import Facilities from "../Pages/OwnerPages/Facilities/Facilities";


export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'owner',
                element: <Owner />,
                children:[
                    {path:'facilities', element:<Facilities/>}
                ]
            },
            {
                path:'facilitymanager',
                element:<FacilityManager/>
            },
            {
                path:'toolcribmanager',
                element:<ToolCribManager/>
            },
            {
                path:'workspacemanager',
                element:<WorkspaceManager/>
            },
            {
                path:'worker',
                element:<Worker/>
            }
        ]
    }
])