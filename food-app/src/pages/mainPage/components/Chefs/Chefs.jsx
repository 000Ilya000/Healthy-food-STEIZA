import React from 'react';
import styled from 'styled-components';
import ChefAvatar1 from "./images/ChefAvatar1.svg";
import ChefAvatar2 from "./images/ChefAvatar2.svg";
import ChefAvatar3 from "./images/ChefAvatar3.svg";
import ChefImg1 from "./images/ChefImg1.svg"
import ChefImg2 from "./images/ChefImg2.svg"
import ChefImg3 from "./images/ChefImg3.svg"
import ChefImg4 from "./images/ChefImg4.svg"
import ChefImg5 from "./images/ChefImg5.svg"
import ChefImg6 from "./images/ChefImg6.svg"
import ChefImg7 from "./images/ChefImg7.svg"
import ChefImg8 from "./images/ChefImg8.svg"
import ChefImg9 from "./images/ChefImg9.svg"
import { MainTitle, BackgroundTitle } from '../About/About';

function Chefs () {
    return (
        <BestChefs id='chefs'>
            <ChefsContent>
                <MainTitle className='bgtitle' id='chefstitle'>
                    <BackgroundTitle>CHEFS</BackgroundTitle>
                </MainTitle>
                <MainChefs>
                    <Chef>
                        <AboutChef>
                            <img src={ChefAvatar1} alt="ChefAvatar1"/>
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
                            <img src={ChefAvatar2} alt="ChefAvatar2"/>
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
                            <img src={ChefAvatar3} alt="ChefAvatar3 "/>
                            <ChefText>
                                <ChefName>Greg Fox</ChefName>
                                <ChefDiscr>Сhef macro kitchen</ChefDiscr>
                            </ChefText>
                        </AboutChef>
                        <ChefFoods> 
                            <img src={ChefImg7} alt="ChefImg7" id='firstChefImg'/>
                            <img src={ChefImg8} alt="ChefImg8" id='firstChefImg'/>
                            <img src={ChefImg9} alt="ChefImg9"/>
                        </ChefFoods>
                    </Chef>
                </MainChefs>
            </ChefsContent>
        </BestChefs>
    )
}

export default Chefs;

const BestChefs = styled.div`
    min-height:100vh;
    margin-top:90px;
    margin-bottom:90px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    width:100%;
    align-items: center;
`;

const ChefsContent = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;

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
`;

const MainChefs = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 36px;

    @media (max-width: 1162px) {
        flex-direction: column;
        align-items: center;
    }
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

    @media (max-width: 1100px) {
        justify-content: center;
    }
`;

const ChefFoods = styled.div`
    display: flex;
    #firstChefImg {
        margin-right: 8%;
    }
    @media (max-width: 1162px) {
        margin-bottom:40px;
    }
`;