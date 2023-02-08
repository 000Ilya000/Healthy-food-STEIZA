import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CHEFS from "../../assets/img/CHEFS.svg";
import ChefAvatar1 from "../../assets/img/ChefAvatar1.svg";
import ChefAvatar2 from "../../assets/img/ChefAvatar2.svg";
import ChefAvatar3 from "../../assets/img/ChefAvatar3.svg";
import ChefImg1 from "../../assets/img/ChefImg1.svg"
import ChefImg2 from "../../assets/img/ChefImg2.svg"
import ChefImg3 from "../../assets/img/ChefImg3.svg"
import ChefImg4 from "../../assets/img/ChefImg4.svg"
import ChefImg5 from "../../assets/img/ChefImg5.svg"
import ChefImg6 from "../../assets/img/ChefImg6.svg"
import ChefImg7 from "../../assets/img/ChefImg7.svg"
import ChefImg8 from "../../assets/img/ChefImg8.svg"
import ChefImg9 from "../../assets/img/ChefImg9.svg"





function Chefs () {
    return (
        <>
            <ChefsScreen>
                <ChefsTitle>This month's chefs</ChefsTitle>
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
        </>
    )
}

export default Chefs;

const ChefsScreen = styled.div`
    height:100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

const ChefsTitle = styled.p`
    min-height:150px;
    min-width:400px;
    display: flex;
    background: url('${CHEFS}') no-repeat center center;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: capitalize;
    color: #D9D9D9;
    padding-bottom: 6px;
    margin-bottom: 24px;
    flex-direction: column;

    ::after {
        height: 2px;
        max-width: 100%;
        background: #34C759;
        color: #34C759;
        content: ' ';
        min-width:56px;
    }
`;

const MainChefs = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
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