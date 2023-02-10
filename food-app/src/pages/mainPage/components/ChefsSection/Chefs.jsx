import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import CHEFS from "./Chefs(img)/CHEFS.svg";
import ChefAvatar1 from "./Chefs(img)/ChefAvatar1.svg";
import ChefAvatar2 from "./Chefs(img)/ChefAvatar2.svg";
import ChefAvatar3 from "./Chefs(img)/ChefAvatar3.svg";
import ChefImg1 from "./Chefs(img)/ChefImg1.svg"
import ChefImg2 from "./Chefs(img)/ChefImg2.svg"
import ChefImg3 from "./Chefs(img)/ChefImg3.svg"
import ChefImg4 from "./Chefs(img)/ChefImg4.svg"
import ChefImg5 from "./Chefs(img)/ChefImg5.svg"
import ChefImg6 from "./Chefs(img)/ChefImg6.svg"
import ChefImg7 from "./Chefs(img)/ChefImg7.svg"
import ChefImg8 from "./Chefs(img)/ChefImg8.svg"
import ChefImg9 from "./Chefs(img)/ChefImg9.svg"
import { MainTitle } from '../AboutSection/About';
import { Title } from '../AboutSection/About';
import { BackgroundTitle } from '../AboutSection/About';

function Chefs () {
    return (
        <ChefsScreen>
            <MainTitle>
                <Title>
                    This Month's Chefs
                </Title>
                <BackgroundTitle className='bgtitle'>CHEFS</BackgroundTitle>
            </MainTitle>
            <MainChefs>
                <Chef>
                    <AboutChef>
                        <img src={ChefAvatar1} alt="ChefAvatar1" />
                        <ChefText>
                            <ChefName>Gregory Flores</ChefName>
                            <ChefDiscr>Chef of the cold</ChefDiscr>
                        </ChefText>
                    </AboutChef>

                    <ChefFoods> 
                        <img src={ChefImg1} alt="ChefImg1" id='firstChefImg'/>
                        <img src={ChefImg2} alt="ChefImg2" id='firstChefImg'/>
                        <img src={ChefImg3} alt="ChefImg3" id='firstChefImg'/>
                    </ChefFoods>
                </Chef>
                <Chef>
                    <AboutChef>
                        <img src={ChefAvatar2} alt="ChefAvatar2" />
                        <ChefText>
                            <ChefName>Annette Cooper</ChefName>
                            <ChefDiscr>Chef of the hot</ChefDiscr>
                        </ChefText>
                    </AboutChef>
                    <ChefFoods> 
                        <img src={ChefImg4} alt="ChefImg4" id='firstChefImg'/>
                        <img src={ChefImg5} alt="ChefImg5" id='firstChefImg'/>
                        <img src={ChefImg6} alt="ChefImg6" id='firstChefImg'/>
                    </ChefFoods>
                </Chef>
                <Chef>
                    <AboutChef>
                        <img src={ChefAvatar3} alt="ChefAvatar3 " />
                        <ChefText>
                            <ChefName>Greg Fox</ChefName>
                            <ChefDiscr>Сhef macro kitchen</ChefDiscr>
                        </ChefText>
                    </AboutChef>
                    <ChefFoods> 
                        <img src={ChefImg7} alt="ChefImg7" id='firstChefImg'/>
                        <img src={ChefImg8} alt="ChefImg8" id='firstChefImg'/>
                        <img src={ChefImg9} alt="ChefImg9" />
                    </ChefFoods>
                </Chef>
            </MainChefs>
        </ChefsScreen>
    )
}

export default Chefs;

const ChefsScreen = styled.div`
    min-height:100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

const MainChefs = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 36px;
`;

const Chef = styled.div`
    min-width:350px;
    margin-right:2%;
    :last-child {
        margin-right: 0%;
    }
`;

const ChefText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    font-style: normal;
    font-weight: 400;
`;

const ChefName = styled.div`
    height: 21px;
    display: flex;
    align-items: center;
    font-size: 18px;
    letter-spacing: -0.225px;
    color: #FFFFFF;
    margin-bottom: 6px;
`;

const ChefDiscr = styled.div`
    height: 16px;
    display: flex;
    align-items: center;
    font-size: 12px;
    letter-spacing: -0.15px;
    color: rgba(255, 255, 255, 0.5);
`;

const AboutChef = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const ChefFoods = styled.div`
    display: flex;
    #firstChefImg {
        margin-right: 8%;
    }
`;