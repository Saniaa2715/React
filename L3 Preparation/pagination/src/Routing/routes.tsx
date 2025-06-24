import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../Components/Cart/Cart";


export const router =createBrowserRouter([
    {
        path:'',
        element:<App/>,
        children:[
            {
                path:'',
                element:<Cart/>
            }
        ]
    }
])