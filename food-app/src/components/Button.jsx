import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router";


function Button () {
    return (
        <>
            <MainBut>
                <Link to = "#">Order Now</Link>
            </MainBut>
        </>
    )
}

const MainBut = styled.div`
    a {

    }
`