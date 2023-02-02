import React, { Component } from 'react';
import styled from 'styled-components';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../assets/img/placeholder.svg';
import line from '../assets/img/line.svg'
import logo from '../assets/img/Logo.svg'
import HEALTHYSWITCHER from '../assets/img/HEALTHY SWITCHER.svg'

function Main () {
    return (
        <>
            <MainScreen>    
                <MainHeader>
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                        </Link>
                    </Logo>
                    
                    <MainNav>
                        <ul>
                            <li><a to="/">Menu</a></li>
                            <li><Link to="/">Recipes</Link></li>
                            <li><Link to="/">Chefs</Link></li>
                            <li><Link to="/">Contacts</Link></li>   
                        </ul>
                    </MainNav>
                    <Line>
                        <img src={line} alt="line"/>
                    </Line>
                </MainHeader>
            </MainScreen>
        </>
    )
}
  

export default Main;


const MainScreen = styled.div`
    height: 1080px;
    background: url('${bgImg}') no-repeat center center;
    background-size:cover; 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const MainHeader = styled.div`
    height:90px;
    display: flex;
    align-items: center;
`;

const Line = styled.div`
    img {
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0px;
        right: 0px;
        top: 89px;
        background: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.1;
    }
`;

const Logo = styled.div`
`;

const MainNav = styled.div`
    ul {
        list-style: none;
    }

`;

const Link = styled.a`
    margin-left: 165px;
    display:flex;
    width:200px;
    height: 25px;
    align-items: center;
    img:last-child {
        height: 10px;
        margin-top: 10px;
        margin-left: 9px;
    }
`;