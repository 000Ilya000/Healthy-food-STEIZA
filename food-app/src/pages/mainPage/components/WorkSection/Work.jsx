import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import placeholderwork from './Work(img)/WORK.svg';



function Work () {
    return (
        <>
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
        </>
    )
}

export default Work;


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