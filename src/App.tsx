import React from "react";
import router from "./Router/router";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "@emotion/react";
import {useReactiveVar} from "@apollo/client";
import {darkModeVar} from "./Apollo/apollo";
import {darkTheme, lightTheme} from "./Common/Theme";
import {Reset} from "styled-reset";
const App = () => {

    const isDarkMode = useReactiveVar<boolean>(darkModeVar);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Reset />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App;