import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../../assets/img/placeholder.svg';
import logo from '../../assets/img/Logo.svg';
import HEALTHYSWITCHER from '../../assets/img/HEALTHY SWITCHER.svg';
import icon_time from '../../assets/img/icon_time.svg';
import icon_adress from '../../assets/img/icon_adress.svg';
import icon_call from '../../assets/img/icon_call.svg';
import AboutScreen from './components/About/About';
import Work from './components/Work/Work';
import DishesScreen from './components/Dishes/Dishes';
import Chefs from './components/Chefs/Chefs';
import Recipes from './components/Recipes/Recipes';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';

function Main () {
    return (
        <>
            <MainM>
                <MainHeader className='header' >
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                            <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                        </Link>
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
                <FirstScreen>
                    <Text>
                        <Title>
                            Your favourite food
                            delivered hot & fresh
                        </Title>
                        <Descr>
                            HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                            marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                        </Descr>
                    </Text>
                    <MainBut>
                        <Link to = "/">Order Now</Link>
                    </MainBut>
                    <CardCont>
                        <Card>
                            <img src={icon_time} alt="time" />
                            <CardTitle>Today 10:00 am - 7:00 pm</CardTitle>
                            <CardDescr>Working hours</CardDescr>
                        </Card>
                        <Card>
                            <img src={icon_adress} alt="time" />
                            <CardTitle>Velyka Vasylkivska 100</CardTitle>
                            <CardDescr>Get Directions</CardDescr>
                        </Card>
                        <Card>
                            <img src={icon_call} alt="time" />
                            <CardTitle>+38 (063)833 24 15</CardTitle>
                            <CardDescr>Call Online</CardDescr>
                        </Card>
                    </CardCont>
                </FirstScreen>
            </MainM> 
            <AboutScreen/>
            <Work/>
            <DishesScreen/>
            <Chefs/>
            <Recipes/>
            <Social/> 
            <Footer/>
        </>
    )
}
  

export default Main;

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if(window.pageYOffset > 20) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

const MainM = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100wh;
    background: url('${bgImg}') no-repeat center center;
    background-size: cover; 


    .header_fixed {
        background: rgba(26, 26, 26, 1);
        z-index: 2;
        top:0;
        left:0;
    }
`;

const FirstScreen = styled.div`
    min-height:100vh;
    // background: url('${bgImg}') no-repeat center center;
    // background-size: cover; 
    margin-top:90px;
    margin-bottom:90px;
    // padding-bottom: 40px;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .header_fixed {
        background: rgba(26, 26, 26, 1);
        position: fixed;
        z-index: 2;
        top:0;
        left:0;
    }

    @media (max-width: 300px) {
        padding-bottom:40%;
    }
`;

const MainHeader = styled.div`
    height:90px;
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    transition: 0.2s;
    background: none;
    position: fixed;

    @media (max-width: 850px) {
        justify-content: space-evenly;
    }
`;

export const Logo = styled.div`
    margin-left: 165px;
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

    @media (max-width: 600px) {
        width: 39%;
    }
`;

const MainNav = styled.div`
    display:flex;
    padding-top:8px;
    
    a {
        color: #FFFFFF;
    }

    ul {
        list-style: none;
        font-family: "HelveticaNeueRegular";
        font-style: normal;
        font-size: 14px;
        font-weight: 700;
        line-height: 90px;
        display: flex;
        align-items: center;
        width:100%;
        margin-right:130px;

        @media (max-width: 850px) {
            margin-right:0px;
        }

        @media (max-width: 600px) {
            padding-left:0px;   
        }
    }

    ul li a {
        margin-right:45px;
        cursor: pointer;
        @media (max-width: 600px) {
            margin-right: 20px;
        }

        @media (max-width: 520px) {
            margin-right: 15px;
            min-width:498px;
        }

        @media (max-width: 520px) {
            margin-right: 8px;
        }
    }

    ul li a:hover {
        color: #34C759;
        transition: 0.4s;
    }
`;

const Text = styled.div`
    font-family: "HelveticaNeueRegular";
    text-align: center;
    color: #FFFFFF;
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
`;

const Title = styled.h1`
    display:flex;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 0.1em;
    text-transform: capitalize;
    margin-bottom: 0px;
    margin-top: 0px;

    @media (max-width: 600px) {
        font-size: 58px;
        line-height: 54px;
        margin-top:75px;
    }

    @media (max-width: 500px) {
        font-size: 50px;
    }
`;

const Descr = styled.p`
    max-width: 50%;
    margin-top: 0px;
    margin-bottom: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: -0.2px;
    mix-blend-mode: normal;
    opacity: 0.7;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

export const MainBut = styled.div`

    a {
        margin-top: 40px;
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
        border: 1px solid #34C759;   
    }

    a:hover {
        color: #34C759;
        background: none;
        border: 1px solid #34C759;   
    }

    @media (max-width: 500px) {
        a {
            padding: 20px 50px;
            font-size: 16px;
        }    
    }
`

export const CardCont = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;

    @media (max-width: 1300px) {
        width:100%;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 245px;
    height: 95px;
`;

export const CardTitle = styled.p`
    margin-top: 13px;
    margin-bottom: 10px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

export const CardDescr = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;

    margin: 0px;
    mix-blend-mode: normal;
    opacity: 0.5;
`;