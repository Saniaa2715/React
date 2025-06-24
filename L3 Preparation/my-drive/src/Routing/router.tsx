import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Admin from "../Layouts/Admin/Admin";
import Items from "../Pages/Items/Items";
import Distributors from "../Pages/Distributors/Distributors";


export const router = createBrowserRouter([{
    path: '',
    element: <App />,
    children: [
        {
            path: '',
            // index: true,
            element: <Login />
        },
        {
            path: 'admin',
            element: <Admin />,
            children: [
                {
                    path: 'items',
                    element: <Items />
                },
                {
                    path: 'distributors',
                    element: <Distributors />
                }
            ]
        }
    ]
}])