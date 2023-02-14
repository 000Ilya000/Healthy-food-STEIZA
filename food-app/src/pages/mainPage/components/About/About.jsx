import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Basicfood1 from './About(img)/BasicFOOD1.svg';
import Basicfood2 from './About(img)/BasicFOOD2.svg';
import ArrowLeft from './About(img)/Arrowleft.svg';
import ArrowRight from './About(img)/ArrowRight.svg';
// import placeholderabout from './About(img)/ABOUT.svg';


function AboutScreen () {
    return (
        <MainAbout>
            <PlaceholderAbout>
                <MainTitle>
                    <Title>
                        The Basics Of Healthy Food
                    </Title>
                    <BackgroundTitle>ABOUT</BackgroundTitle>
                </MainTitle>
                <AboutDiscr>
                    In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip consectetur voluptate est. 
                    Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
                </AboutDiscr>
                <AboutImg>
                    <Link to="#">
                        <img src={ArrowLeft} alt="arrow1" />
                    </Link>
                    <img src={Basicfood1} alt="img1" className='firstimgslider' />
                    <img src={Basicfood2} alt="img2" />
                    <Link to="#">
                        <img src={ArrowRight} alt="arrow2" />
                    </Link>
                </AboutImg>
            </PlaceholderAbout>
        </MainAbout>
    )
}


export default AboutScreen;

const MainAbout = styled.div`
    position: relative;
    min-height: 100vh;
    display flex;
    width: 100%;
    align-content: center;
    justify-content: center;
    align-items: flex-start;

`;

const PlaceholderAbout = styled.div`
    max-height: 736px;
    width: fit-content;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainTitle = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    justify-content: center;
    margin-top:60px;
`;

export const BackgroundTitle = styled.p`
    font-family: "HelveticalNeueCondensend";
    font-weight: 600;
    font-size: 100px;
    line-height: 150px;
    letter-spacing: 0.2em;
    color: #303030;
`;

export const Title = styled.p`
    position: absolute;
    min-height:150px;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 30px;
    letter-spacing: 0.2em;
    color: #D9D9D9;
`;

const AboutDiscr = styled.p`
    max-width: 734px;
    // height: 60px;
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
    margin-left: 64px;
    margin-right:64px; 

    .firstimgslider {
        margin-right:34px;
    }
    
    a {
        margin-left:64px;
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
    }

    a:first-child {
        margin-left: 0px;
        margin-right: 64px;
    }

    @media (max-width: 1100px) {
        margin-left: 0px;
        margin-right:0px; 

        .firstimgslider {
            margin-right:0px;
        }

        a {
            margin-left:0px;
        }

        a:first-child {
            margin-left: 0px;
            margin-right: 0px;
        }
    }
`;