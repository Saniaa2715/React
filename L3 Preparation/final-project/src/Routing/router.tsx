import { createBrowserRouter } from "react-router";
import App from "../App";
import Products from "../Pages/Products/Products";

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <Products />
            },

        ]
    }

])