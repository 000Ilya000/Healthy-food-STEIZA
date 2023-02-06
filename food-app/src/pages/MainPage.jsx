import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import bgImg from '../assets/img/placeholder.svg';
// import line from '../assets/img/line.svg';
import logo from '../assets/img/Logo.svg';
import HEALTHYSWITCHER from '../assets/img/HEALTHY SWITCHER.svg';
import Button from '../components/Button';
import icon_time from '../assets/img/icon_time.svg';
import icon_adress from '../assets/img/icon_adress.svg';
import icon_call from '../assets/img/icon_call.svg';
import placeholderabout from '../assets/img/ABOUT.svg';
import placeholderwork from '../assets/img/WORK.svg';
import Basicfood1 from '../assets/img/BasicFOOD1.svg';
import Basicfood2 from '../assets/img/BasicFOOD2.svg';
// import WorkLine from '../assets/img/WorkLine1.svg';
import ArrowLeft from '../assets/img/Arrowleft.svg';
import ArrowRight from '../assets/img/ArrowRight.svg';

function Main () {
    return (
        <>
            <MainScreen>  
                <MainM>
                    <MainHeader className='header'>
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
                        <Title>
                            Your favourite food
                            delivered hot & fresh
                        </Title>
                        <Descr>
                            HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & 
                            marinating, so you can cook a fresh homemade dinner in just 15 minutes.
                        </Descr>
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
                    <About>
                        <PlaceholderAbout>
                            <AboutTitle>
                                The Basics Of Healthy Food
                            </AboutTitle>
                            <AboutDiscr>
                                In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. 
                                Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
                            </AboutDiscr>
                            <AboutImg>
                                <Link to="/">
                                    <Arrow>
                                            <img src={ArrowLeft} alt="arrow1" />
                                    </Arrow>
                                </Link>
                                <img src={Basicfood1} alt="img1" />
                                <img src={Basicfood2} alt="img2" />
                                <Link to="/">
                                    <Arrow>
                                            <img src={ArrowRight} alt="arrow2" />
                                    </Arrow>
                                </Link>
                            </AboutImg>
                        </PlaceholderAbout>
                    </About>
                    <HowItWork>
                        <WorkTitle>how it works</WorkTitle>
                        <WorkCards>
                            <WorkCard>
                                <WorkCardTitle>Pick Meals</WorkCardTitle>
                                <CardLine/>
                                <WorkCardDescr>Choose your meals from our diverse weekly menu. Find gluten or dairy free, 
                                low carb & veggie options.</WorkCardDescr>
                            </WorkCard>
                            <WorkCard>
                                <WorkCardTitle>Choose How Often</WorkCardTitle>
                                <CardLine/>
                                <WorkCardDescr>Our team of chefs do the prep work - no more chopping, measuring, 
                                or sink full of dishes!</WorkCardDescr>
                            </WorkCard>
                            <WorkCard>
                                <WorkCardTitle>Fast Deliveries</WorkCardTitle>
                                <CardLine/>
                                <WorkCardDescr>Your freshly prepped 15-min dinner kits arrive on your doorstep 
                                in a refrigerated box.</WorkCardDescr>
                            </WorkCard>
                            <WorkCard>
                                <WorkCardTitle>Tasty Meals</WorkCardTitle>
                                <CardLine/>
                                <WorkCardDescr>Gobble makes cooking fast, so you have more time 
                                to unwind and be with family.</WorkCardDescr>
                            </WorkCard>
                        </WorkCards>
                    </HowItWork>
                </MainM>  
            </MainScreen>
        </>
    )
}
  

export default Main;

window.onscroll = function showHeader() {
    var header = document.querySelector('.header');

    if(window.pageYOffset > 0) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}


const MainScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header_fixed {
        background: rgba(26, 26, 26, 1);
        position: fixed;
        z-index: 2;
        top:0;
        left:0;
    }
`;

const MainM = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FirstScreen = styled.div`
    // min-height: 950px;
    height:100vh;
    // height: 100%;
    // height: 100vh;
    background: url('${bgImg}') no-repeat center center;
    background-size: cover; 
    // position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`;

const MainHeader = styled.div`
    height:90px;
    display: flex;
    align-items: center;
    width:100%;
    justify-content: space-between;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;
    background: none;
    position: fixed;
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
    margin-bottom: 0px;
    margin-top: 0px;
`;

const Descr = styled.p`
    max-width: 35%;
    margin-bottom: 0px;
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

const About = styled.div`
    min-height: 100vh;
    display flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

const PlaceholderAbout = styled.div`
    // position: absolute;
    // margin-top: 150px;
    max-height: 736px;
    width: 80%;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutTitle = styled.p`
    min-height:150px;
    display: flex;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 0px;
    flex-direction: row;
    background: url('${placeholderabout}') no-repeat center center;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.2em;
    color: #D9D9D9;
`;

const Arrow = styled.div`
    min-width: 60px;
    min-height: 60px;
    border: 2px solid #303030;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    transition: 0.4s;


    :hover {
        background: #34C759;
    }
`;


const AboutDiscr = styled.p`
    max-width: 734px;
    // height: 60px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #A6A6A6;
    margin-bottom: 90px;
`;

const AboutImg = styled.div`
    display: flex;
    min-width: 75%;
    justify-content: space-between;
    margin-bottom: 90px;
    align-items: center;
`;

const HowItWork = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    min-height: 100vh;
    align-content: center;
    justify-content: center;
`;

const WorkTitle = styled.p`
    min-height:150px;
    min-width:308px;
    display: flex;
    background: url('${placeholderwork}') no-repeat center center;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    // line-height: 90px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: capitalize;
    color: #D9D9D9;
    padding-bottom: 6px;
    margin-bottom: 0px;
    flex-direction: column;

    ::after {
        height: 2px;
        max-width: 100%;
        background: #34C759;
        color: #34C759;
        content: ' ';
        min-width:56px;
        // margin-top:40px;
    }
`;

const WorkCards = styled.div`
    display: flex;
    width:100%;
    div:last-child {
        margin-right:0px;
    }
    justify-content: center;
    margin-top:60px;
`;


const WorkCard = styled.div`
    height: 206px;
    Width: 255px;
    margin-right:30px;

    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transition: 0.4s;

    :hover {
        background: #34C759;
        p {
            color: #191919;
        }
        div {
            background: #191919;
        }
    }
`;

const WorkCardTitle = styled.p`
    height: 32px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.275px;
    text-transform: capitalize;
    margin-bottom: 10px;
    margin-top: 24px;
    margin-left: 24px;
    color: #FFFFFF;
    transition: 0.4s;
`;

const CardLine = styled.div`
    height: 2px;
    max-width: 56px;
    background: #34C759;
    margin-left: 24px;
    transition: 0.4s;
`;

const WorkCardDescr = styled.p`
    max-width: 207px;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    margin-top: 24px;
    margin-left: 24px;
    line-height: 18px;
    transition: 0.4s;
    letter-spacing: -0.1625px;

    color: rgba(255, 255, 255, 0.5);
`;

