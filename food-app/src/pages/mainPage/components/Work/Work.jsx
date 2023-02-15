import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import placeholderwork from './Work(img)/WORK.svg';
import { MainTitle } from '../About/About';
import { Title } from '../About/About';
import { BackgroundTitle } from '../About/About';



function Work () {
    return (
        <HowItWork>
            <MainTitle className='bgtitle'>
                <BackgroundTitle>WORK</BackgroundTitle>
            </MainTitle>
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
    )
}

export default Work;


const HowItWork = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    margin-top:90px;
    margin-bottom:90px;

    @media (max-width: 1100px) {
        width:100%;
        align-items: center;
    } 
    
    .bgtitle {
        p:after {
            content: 'How It Works';
        }
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
    p {
        cursor: default;
    }

    @media (max-width: 1100px) {
        flex-wrap: wrap;
        justify-content: space-evenly;
        // width: 60%;
        // height: 500px;
        align-items: center;

        div {
            margin-right:0px;
        }
    }

    @media (max-width: 850px) {
        height:100%;
    }
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

    @media (max-width: 1020px) {
        margin-top:30px;
    }
`;

const WorkCardTitle = styled.p`
    height: 32px;
    font-size: 22px;
    letter-spacing: -0.275px;
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
    font-weight: 400;
    font-size: 13px;
    margin-top: 24px;
    margin-left: 24px;
    line-height: 18px;
    transition: 0.4s;
    letter-spacing: -0.1625px;

    color: rgba(255, 255, 255, 0.5);
`;