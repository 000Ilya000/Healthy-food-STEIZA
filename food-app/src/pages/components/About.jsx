import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Basicfood1 from '../../assets/img/BasicFOOD1.svg';
import Basicfood2 from '../../assets/img/BasicFOOD2.svg';
import ArrowLeft from '../../assets/img/Arrowleft.svg';
import ArrowRight from '../../assets/img/ArrowRight.svg';
import placeholderabout from '../../assets/img/ABOUT.svg';


function AboutScreen () {
    return (
        <>
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
                        <Link to="#">
                            <img src={ArrowLeft} alt="arrow1" />
                        </Link>
                        <img src={Basicfood1} alt="img1" />
                        <img src={Basicfood2} alt="img2" />
                        <Link to="#">
                            <img src={ArrowRight} alt="arrow2" />
                        </Link>
                    </AboutImg>
                </PlaceholderAbout>
            </About>
        </>
    )
}

export default AboutScreen;

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
    
    a {
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
`;