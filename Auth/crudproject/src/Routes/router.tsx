import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import Tools from '../Pages/Tools/Tools'
import OwnerDashboard from "../Pages/OwnerPages/OwnerDashboard/OwnerDashboard";
import Facilities from "../Pages/OwnerPages/Facilities/Facilities";
import FacilityManagers from "../Pages/OwnerPages/FacilityManagers/FacilityManagers";
import WorkSpaces from "../Pages/OwnerPages/WorkSpaces/WorkSpaces";
// import Workers from "../Pages/OwnerPages/Workers/Workers";
// import FacilityManager from "../Layouts/FacilityManager/FacilityManager";
// import WorkSpaceManager from "../Layouts/WorkSpaceManager/WorkSpaceManager";
// import ToolCribManager from "../Layouts/ToolCribManager/ToolCribManager";
// import Worker from "../Layouts/Worker/Worker";
import Employees from "../Pages/OwnerPages/Employees/Employees";

const App=lazy(()=>import('../App'));
const Login = lazy(()=>import('../Pages/Login/Login'));
const Owner =lazy(()=>import('../Layouts/Owner/Owner'));

export const router =createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Login/>
            },{
                path:'owner',
                element:<Owner/>,
                children:[
                    {path:'', element:<OwnerDashboard/>},
                    {path:'facilities', element:<Facilities/>},
                    {path:'facilitymanagers', element:<FacilityManagers/>},
                    {path:'tools', element:<Tools/>},
                    {path:'workspaces', element:<WorkSpaces/>},
                    {path:'employees', element:<Employees/>}
                ]
            },
            // {
            //     path:'facilitymanager',
            //     element:<FacilityManager/>,
            //     children:[
            //         {path:'', element:<WorkspaceManagers/>},
            //         {path:'', element:<Workspaces/>}
            //     ]
            // },
            // {
            //     path:'workspacemanager',
            //     element:<WorkSpaceManager/>,
            //     children:[
            //         {path:'workers', element:<Workers/>},
            //         {path:'workstations', element:<Workstations/>},
            //         {path:'toolcribmanagers', element:<ToolCribManagers/>}
            //     ]
            // },
            // {
            //     path:'toolcribmanager',
            //     element:<ToolCribManager/>,
            //     children:[
            //         {path:''},
            //         {path:''}
            //     ]
            // },
            // {
            //     path:'worker',
            //     element:<Worker/>
            // }
        ]
    }
])