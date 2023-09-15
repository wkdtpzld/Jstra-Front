import React from "react";
import router from "./Router/router";
import {RouterProvider} from "react-router-dom";
import {Theme, ThemeProvider} from "@emotion/react";
import {useReactiveVar} from "@apollo/client";
import {darkModeVar} from "./Apollo/apollo";

const lightTheme: Theme = {
    fontColor: "#2c2c2c",
    bgColor: "lightgray",
}

const darkTheme: Theme = {
    fontColor: "lightgray",
    bgColor: "#2c2c2c",
}

const App = () => {

    const isDarkMode = useReactiveVar<boolean>(darkModeVar);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App;