import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";



function Button () {
    return (
        <>
            <MainBut>
                <Link to = "/">Order Now</Link>
            </MainBut>
        </>
    )
}

const MainBut = styled.div`
    margin-top: 40px;

    a {
        display: flex;
        font-weight: 600;
        text-decoration: none;
        padding: 25px 58px;
        user-select: none;
        outline: none;
        border-radius: 43px;
        transition: 0.4s;
        color: black;
        font-family: "HelveticaNeueRegular";
        font-size: 20px;
        background: #34C759;
    }

    a:hover {
        color: #34C759;
        background: black;
    }
`
export default Button;