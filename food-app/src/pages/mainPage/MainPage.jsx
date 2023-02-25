import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../../assets/img/placeholder.svg';
import icon_time from '../../assets/img/icon_time.svg'; 
import icon_adress from '../../assets/img/icon_adress.svg';
import icon_call from '../../assets/img/icon_call.svg';
import Header from './components/Header/Header';
import AboutScreen from './components/About/About';
import Work from './components/Work/Work';
import DishesScreen from './components/Dishes/Dishes';
import Chefs from './components/Chefs/Chefs';
import Recipes from './components/Recipes/Recipes';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react';


function Main() {
    // const [nav, setNav] = useState(false);
    // const [isActive, setIsActive] = useState(false);

    // function ChangeBurger() {
    //     setNav(!nav);
    // }

    // function headerChange() {
    //     setIsActive(!isActive);
    // }

    // window.onscroll = function showHeader() {
    //     headerChange();
    //     // var header = document.querySelector('.header');

    //     // if(window.pageYOffset > 20) {
    //     //     // header.classList.add('header_fixed');
    //     //     isActive ? <Header/> : <Header className='header_fixed'/>
    //     // // } else {
    //     // //     header.classList.remove('header_fixed');
    //     // }
    // }

    return (

        <Container>
            <MainM>

                {/* {window.onscroll = function showHeader() {
                    if(window.pageYOffset > 20) {
                        headerChange()
                        console.log('ghbdtn')
                    }
                }} 
                isActive ? <Header className='header_fixed'/> : <Header/> */}

                <Header/>
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
        </Container>
    )
}
  

export default Main;

// { window.onscroll = function showHeader() {
//     var header = document.querySelector('.header');

//     if(window.pageYOffset > 20) {
//         header.classList.add('header_fixed');
//         nav ? <Header/> : <Header className='header_fixed'/>
//         } else {
//             header.classList.remove('header_fixed');
//     }
// }}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const MainM = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    align-content: center;
    background: url('${bgImg}') no-repeat center center;
    background-size: cover; 


    .header {
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
    width: 1140px;
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

    @media (max-width: 1162px) {
        width: 960px;
    }

    @media (max-width: 984px) {
        width: 720px;
    }

    @media (max-width: 767px) {
        width: 540px;
    }

    @media (max-width: 550px) {
        width: 440px;
    }

    @media (max-width: 300px) {
        padding-bottom:40%;
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

    @media (max-width: 767px) {
        font-size: 58px;
        line-height: 54px;
        margin-top:75px;
    }

    @media (max-width: 550px) {
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

    @media (max-width: 550px) {
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

    @media (max-width: 767px) {
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