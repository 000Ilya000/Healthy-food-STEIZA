import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../assets/img/placeholder.svg';
import line from '../assets/img/line.svg';
import logo from '../assets/img/Logo.svg';
import HEALTHYSWITCHER from '../assets/img/HEALTHY SWITCHER.svg';

function Main () {
    return (
        <>
            <MainScreen>    
                <MainHeader>
                    <Logo>
                        <LogoLink to="/">
                            <img src={logo} alt="logo" />
                            <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                        </LogoLink>
                    </Logo>
                    
                    <MainNav>
                        <ul>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Recipes</Link></li>
                            <li><Link to="/">Chefs</Link></li>
                            <li><Link to="/">Contacts</Link></li>   
                        </ul>
                    </MainNav>
                </MainHeader>
                <Line>
                        <img src={line} alt="line"/>
                </Line>
                <Title>
                    Your favourite food
                    delivered hot & fresh
                </Title>
                <Descr>
                    HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                    marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                </Descr>
            </MainScreen>
        </>
    )
}
  

export default Main;


const MainScreen = styled.div`
    height: 1080px;
    background: url('${bgImg}') no-repeat center center;
    background-size:cover; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainHeader = styled.div`
    height:90px;
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
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
    display:flex;

    ul {
        list-style: none;
        font-family: "HelveticaNeueRegular";
        font-style: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 90px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        width:100%;
        margin-right:130px
    }

    ul li {
        margin-right:45px;
        cursor: pointer;
    }

    ul li:hover {
        color: #34C759;
        transition: 0.4s;
    }
`;

const LogoLink = styled.a`
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

// const Link = styled.a`
// `;

const Title = styled.h1`
    max-width: 1100px;
    display:flex;
    font-family: "HelveticaNeueRegular";
    font-size: 72px;
    line-height: 84px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    color: #FFFFFF;
    margin-top:80px;
    margin-bottom: 0px;
`;

const Descr = styled.p`
    width: 35%;
    height: 52px;
    // top: 350px;

    font-family: "HelveticaNeueRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.7;
`;