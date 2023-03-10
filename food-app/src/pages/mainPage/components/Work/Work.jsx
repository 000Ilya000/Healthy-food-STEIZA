import React from 'react';
import styled from 'styled-components';
import { MainTitle, BackgroundTitle } from '../About/About';


function Work () {
    return (
        <HowItWork>
            <WorkContent>
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
            </WorkContent>
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
    width:100%;
    align-items: center;
    align-content: center;

    @media (max-width: 1100px) {
        width:100%;
        align-items: center;
    } 
    
    .bgtitle {
        p:after {
            content: 'How It Works';
            min-width: max-content;
        }
    }
`;

const WorkContent = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1162px) {
        width: 960px;
        align-items: center;
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

    @media (max-width: 1162px) {
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        div {
            margin-right:0px;
        }

        div:last-child {
            margin-top: 30px;
        }
    } 

    @media (max-width: 1020px) {
        max-width: 75%;
    }

    @media (max-width: 850px) {
        height:100%;
    }

    @media (max-width: 767px) {
        flex-direction: column;
        max-width: 100%;
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

    @media (max-width: 767px) {
        height: 180px;
        width: 85%;
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

    @media (max-width: 767px) {
        max-width: 30%;
    }
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

    @media (max-width: 767px) {
        max-width: 100%;
    }
`;