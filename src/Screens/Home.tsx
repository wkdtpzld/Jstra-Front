/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";

const Home = () => {
    const theme = useTheme();

    return (
        <h1 css={css({
            color: `${theme.fontColor}`
        })}>Home</h1>
    );
}

export default Home;