import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './images/Logo.svg';
import HEALTHYSWITCHER from './images/HEALTHY SWITCHER.svg';
import { useState } from 'react';


function Header () {
    const [nav, setNav] = useState(false);

    function ChangeBurger() {
        setNav(!nav);
    }

    return (
        <MainHeader className='header' >
            <HeaderContent>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                    </Link>
                </Logo>
                
                <MainNav>
                        <ul className={ nav ? 'active' : 'menu'}>
                            <li><Link to="/">Menu</Link></li>
                            <li><Link to="/">Recipes</Link></li>
                            <li><Link to="/">Chefs</Link></li>
                            <li><Link to="/">Contacts</Link></li>   
                        </ul>
                </MainNav>

                <MenuBurger onClick = {ChangeBurger}>
                    {nav ? <CloseHeaderBurger><span/></CloseHeaderBurger> : <CloseHeaderBurger className='HeadBurger'><span/></CloseHeaderBurger>}
                </MenuBurger>
            </HeaderContent>
        </MainHeader>
    )
}


export default Header;

const MainHeader = styled.div`
    // height:90px;
    display: flex;
    align-items: center;
    width:100%;
    // justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    transition: 0.2s;
    background: none;
    position: fixed;
    justify-content: center;

    @media (max-width: 850px) {
        justify-content: space-evenly;
    }

    .burger {
        color:white;
        margin-top: 8px;
        display: none;
    }

    @media (max-width: 767px) {
        z-index: 11;    
    }
`;

const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 1140px;
    justify-content: space-between;
    height:90px;

    @media (max-width: 1162px) {
        width: 960px;
    }

    @media (max-width: 984px) {
        width: 720px;
    }

    @media (max-width: 767px) {
        width: 540px;

        .burger {
            display: block;
            position:absolute;
            right:0;
            margin-right:4%;
            cursor: pointer;
            z-index: 11;
        }    


        .Nav {
            display: none;
        }
    }

    @media (max-width: 550px) {
        width: 440px;
    }
`;

export const Logo = styled.div`
    // margin-left: 165px;
    display:flex;
    width:200px;
    height: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
    }
    img:last-child {
        height: 10px;
        margin-top: 10px;
        margin-left: 9px;
    }

    @media (max-width: 850px) {
        margin-left:0px;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin-left: 4%;
        z-index: 11;
    }

`;

const MainNav = styled.div`
    display:flex;
    padding-top:8px;

    a {
        color: #FFFFFF;
    }

    ul {
        padding-left:0px;
        list-style: none;
        font-family: "HelveticaNeueRegular";
        font-style: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 90px;
        display: flex;
        align-items: center;
        width:100%;
        // margin-right:130px;


        @media (max-width: 850px) {
            margin-right:0px;
        }

        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: rgba(26, 26, 26, 1);
            margin-top:0px;
            margin-bottom:0px;
            font-size:20px;
            padding-left: 0px;
        }
    }

    ul li a {
        margin-right:45px;
        cursor: pointer;
        @media (max-width: 767px) {
            margin-right: 0px;
        }

        // @media (max-width: 520px) {
        //     margin-right: 15px;
        //     min-width:498px;
        // }

        // @media (max-width: 520px) {
        //     margin-right: 8px;
        // }
    }

    ul li:last-child a {
        margin-right:0px;
    }

    ul li a:hover {
        color: #34C759;
    }

    @media (max-width: 767px) {
        width:100%;
        height:100%;
        padding-top: 0px;


        .menu {
            display: flex;
            position: fixed;
            z-index: 10;
            top:0;
            bottm:0;
            left: -100%;
            right:0;
            width:100%;
            height:100%;
            transition: left 0.8s;
            padding-top: 0px;
        }

        ul li:last-child a {
            margin-right: 0px;
        }

        .active {
            left: 0;
            position: fixed;
            height: 100%;
            transition: left 0.5s;
        }
    }
`;

const MenuBurger = styled.div`
    position: absolute;

    @media(max-width: 767px){
        position: relative;
    }

    opacity: 100;

    .HeadBurger {
        // // display: none;
        // margin-right: 18px;
    
        @media(max-width: 767px){
            span {
                top: 20px;
                height: 2px;
                width: 100%;
                position: absolute;
                background: white;
                margin: 0 auto;
                transition: 0.5s;
                opacity: 100;
    
                
                ::after, ::before {
                    content: '';
                    height: 2px;
                    width: 100%;
                    position: absolute;
                    background: white;
                    margin: 0 auto;
                    transition: 0.5s;
                    opacity: 100;
                }
    
                ::after {
                    transform: rotate(0deg);
                    bottom: 8px;
                    transition: 0.5s;
                }
        
                ::before {
                    transform: rotate(0deg);
                    top: 8px;
                    transition: 0.5s;
                }
            }
        }
    }
`;

const CloseHeaderBurger = styled.div`

    opacity: 100;

    @media(max-width: 767px){
        width: 40px;
        height: 35px;
        display: flex;
        z-index:10;
        margin-right: 18px;
        transition: 0.5s;
        position: relative;

        span {
            top: 20px;
            opacity: 100;
            height: 2px;
            width: 100%;
            position: absolute;
            margin: 0 auto;
            transition: 0.1s;
            position: relative;
            background: rgba(255, 255, 255, 0);
            
            ::after, ::before {
                content: '';
                height: 2px;
                width: 100%;
                position: absolute;
                background: white;
                margin: 0 auto;
                transition: 0.5s;
                opacity: 100;
            }

            ::after {
                transform: rotate(-40deg);
                bottom: 0px;
                transition: 0.5s;
            }
    
            ::before {
                transform: rotate(40deg);
                top: 0px;
                transition: 0.5s;
            }
        }
    }
`;