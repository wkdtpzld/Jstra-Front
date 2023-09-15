import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../Screens/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <h1>Error</h1>
    },
]);

export default router;