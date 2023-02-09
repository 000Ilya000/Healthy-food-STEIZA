import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../../assets/img/placeholder.svg';
import logo from '../../assets/img/Logo.svg';
import HEALTHYSWITCHER from '../../assets/img/HEALTHY SWITCHER.svg';
import Button from './components/Button/Button';
import icon_time from '../../assets/img/icon_time.svg';
import icon_adress from '../../assets/img/icon_adress.svg';
import icon_call from '../../assets/img/icon_call.svg';

function Main () {
    return (
        <>
            <MainM>
                <MainHeader className='header'>
                    <Logo>
                        <Link to="Main">
                            <img src={logo} alt="logo" />
                            <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                        </Link>
                    </Logo>
                    
                    <MainNav>
                        <ul>
                            <li><Link to="#">Menu</Link></li>
                            <li><Link to="#">Recipes</Link></li>
                            <li><Link to="#">Chefs</Link></li>
                            <li><Link to="#">Contacts</Link></li>   
                        </ul>
                    </MainNav>
                </MainHeader>
                <FirstScreen>
                    <Tekst>
                        <Title>
                            Your favourite food
                            delivered hot & fresh
                        </Title>
                        <Descr>
                            HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                            marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                        </Descr>
                    </Tekst>
                    <Button/>
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
        </>
    )
}
  

export default Main;

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if(window.pageYOffset > 40) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

const MainM = styled.div`
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header_fixed {
        background: rgba(26, 26, 26, 1);
        // position: stiky;
        z-index: 2;
        top:0;
        left:0;
    }
`;

const FirstScreen = styled.div`
    min-height:100vh;
    background: url('${bgImg}') no-repeat center center;
    background-size: cover; 
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
`;

const Logo = styled.div`
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
`;

const MainNav = styled.div`
    display:flex;
    
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
        margin-right:130px
    }

    ul li a {
        margin-right:45px;
        cursor: pointer;
    }

    ul li a:hover {
        color: #34C759;
        transition: 0.4s;
    }
`;

const Tekst = styled.div`
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
`;

const CardCont = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 245px;
    height: 95px;
`;

const CardTitle = styled.p`
    margin-top: 13px;
    margin-bottom: 10px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`;

const CardDescr = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;

    margin: 0px;
    mix-blend-mode: normal;
    opacity: 0.5;
`;