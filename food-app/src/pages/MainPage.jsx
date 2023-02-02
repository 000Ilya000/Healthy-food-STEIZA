import React, { Component } from 'react';
import styled from 'styled-components';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";


function Title () {
    return (
        <>
            <TestTitle>
                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
            </TestTitle>
        </>
    )
}
  

export default Title;


const TestTitle = styled.p`
    font-family: "HelveticaNeueRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.2px;
    // color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.7;
`;