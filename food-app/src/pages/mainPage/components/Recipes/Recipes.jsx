import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import FirstBlockRecipePlactholder from "./images/FirstBlockRecipePlactholder.svg";
import WhiteArrowLeft from './images/WhiteArrowLeft.svg'
import WhiteEye from './images/WhiteEye.svg'
import WhiteComm from './images/WhiteComm.svg'
import placeholder10 from './images/placeholder (10).svg'
import { MainTitle } from '../About/About';
import { Title } from '../About/About';
import { BackgroundTitle } from '../About/About';



function Recipes () {
    return (
        <MainRecipes>
            <RecipesContent>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>RECIPES</BackgroundTitle>
                </MainTitle>
                <RecipesBlocks>
                    <FirstRecipeBlock>
                        <ContentFirstRecipeBlock>
                            <TypeOfFoodRecipe>BREAKFAST</TypeOfFoodRecipe>
                            <DateRcipe>05 Jul 2016</DateRcipe>
                            <TitleFirstBlockRecipe>Lorem ipsum dolor sit amet, consectetur adipiscing elit</TitleFirstBlockRecipe>
                            <AutorOfRecipe>Jason Keller</AutorOfRecipe>
                            <VievsAndComm>
                                <Vievs>
                                    <img src={WhiteEye} alt="WhiteEye" />
                                    <Quantity>275</Quantity>
                                </Vievs>
                                <Comm>
                                    <img src={WhiteComm} alt="WhiteComm" />
                                    <Quantity>275</Quantity>
                                </Comm>
                            </VievsAndComm>
                        </ContentFirstRecipeBlock>
                        <Link to="#">
                            <img src={WhiteArrowLeft} alt="arrow1" />
                        </Link>
                    </FirstRecipeBlock>
                    <SecondRecipesBlocks className='secondblocks'>
                        <Recipe>
                            <SecondMainCont>
                                <SecondRecipesBlocksTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</SecondRecipesBlocksTitle>
                                <SecondRecipesBloksFooter>
                                    <TypeAndDate>
                                        <TypeOfFoodRecipe className='type'>lunch</TypeOfFoodRecipe>
                                        <DateRcipe>07 Jan 2016</DateRcipe>
                                    </TypeAndDate>
                                    <SecondCommAndVievs>
                                        <Vievs>
                                            <img src={WhiteEye} alt="WhiteEye" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Vievs>
                                        <Comm>
                                        <img src={WhiteComm} alt="WhiteComm" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Comm>
                                    </SecondCommAndVievs>
                                </SecondRecipesBloksFooter>
                            </SecondMainCont>
                        </Recipe>
                        <Recipe className='withimg'>
                            <SecondMainCont>
                                <SecondRecipesBlocksTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</SecondRecipesBlocksTitle>
                                <SecondRecipesBloksFooter>
                                    <TypeAndDate>
                                        <TypeOfFoodRecipe className='type'>dinner</TypeOfFoodRecipe>
                                        <DateRcipe>07 Jan 2016</DateRcipe>
                                    </TypeAndDate>
                                    <SecondCommAndVievs>
                                        <Vievs>
                                            <img src={WhiteEye} alt="WhiteEye" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Vievs>
                                        <Comm>
                                            <img src={WhiteComm} alt="WhiteComm" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Comm>
                                    </SecondCommAndVievs>
                                </SecondRecipesBloksFooter>
                            </SecondMainCont>
                        </Recipe>
                        <Recipe>
                            <SecondMainCont>
                                <SecondRecipesBlocksTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </SecondRecipesBlocksTitle>
                                <SecondRecipesBloksFooter>
                                    <TypeAndDate>
                                        <TypeOfFoodRecipe className='type'>sweets</TypeOfFoodRecipe>
                                        <DateRcipe>10 Oct 2017</DateRcipe>
                                    </TypeAndDate>
                                    <SecondCommAndVievs>
                                        <Vievs>
                                            <img src={WhiteEye} alt="WhiteEye" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Vievs>
                                        <Comm>
                                            <img src={WhiteComm} alt="WhiteComm" />
                                            <Quantity className='qua'>275</Quantity>
                                        </Comm>
                                    </SecondCommAndVievs>
                                </SecondRecipesBloksFooter>
                            </SecondMainCont>
                        </Recipe>
                    </SecondRecipesBlocks>
                </RecipesBlocks>
            </RecipesContent>
        </MainRecipes>
    )
}

export default Recipes;

const MainRecipes = styled.div`
    display: flex;
    min-height: 100vh;
    margin-top:90px;
    margin-bottom:90px;
    flex-direction: column;
    justify-content: center;
    width:100%;
    align-items: center;

    .bgtitle {
        p:after {
            content: 'Recipes From Our Chefs';
            min-width: max-content;
        }
    }
`;

const RecipesContent = styled.div`
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


const RecipesBlocks = styled.div`
    display: flex;
    justify-content: center;    
    margin-top: 60px;
    @media (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        div:last-child {
            margin-left:0px;
        }
    }

    @media (max-width: 600px) {
        .secondblocks {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin-left: 0px;
        }
    }
`;

const FirstRecipeBlock = styled.div`
    height: 510px;
    display: flex;
    background: url('${FirstBlockRecipePlactholder}') no-repeat center center;
    width: 540px;
    overflow:hidden;


    :hover {
        a {
            opacity:100%;
        }
        background-size: 110%;
        border-radius:6px;
    }

    a {
        margin-top: 30px;
        margin-right: 30px;
        // position: absolute;
        min-width:40px;
        max-height: 40px;
        // border: 2px solid #303030;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 60px;
        transition: 0.4s;
        background: rgba(0, 0, 0, 0.3);
        opacity:0%;
    
    
        :hover {
            background: #34C759;
        }
    }

    @media (max-width: 1162px) {
        margin-bottom: 30px;
        border-radius:6px;
    }

    @media (max-width: 1100px) {
        margin-bottom: 30px;
    }

    @media (max-width: 600px) {
        width:90%;
    }
`;

const ContentFirstRecipeBlock = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-left:70px;


    font-weight: 400;
    font-size: 14px;
`;

const TypeOfFoodRecipe = styled.p`
    // height: 25px;

    font-weight: 900;
    font-size: 10px;
    line-height: 25px;
    background: rgba(0, 0, 0, 0.35);
    border: 1px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    padding-left: 17px;
    padding-right: 17px;
    margin-bottom: 65px;
    margin-top: 0px;
    text-align: center;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

const DateRcipe = styled.p`
    margin-bottom: 25px;
    margin-top: 0px;
`;

const TitleFirstBlockRecipe = styled.p`
    max-width:415px;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    // margin: 0px;
    margin-top: 0px;
    text-align: center;
    margin-bottom: 45px;
`;

const AutorOfRecipe = styled.p`
    margin-bottom: 60px;
    margin-top: 0px;
`;

const VievsAndComm = styled.div`
    display: flex;
    min-width: 140px;
    justify-content: space-between;
    font-size: 12px;
`;

const Vievs = styled.div`
    display: flex;
    align-items: center;
    img {
        display:flex;
    }
`;

const Comm = styled.div`
    display: flex;
    align-items: center;
    img {
        display:flex;
    }
`;

const Quantity = styled.p`
    margin-left: 12px;
`;

const SecondRecipesBlocks = styled.div`
    div:last-child {
        margin-bottom: 0px;
    }
    margin-left: 2%;

    .withimg {
        background: url('${placeholder10}') no-repeat center center;
        :hover {
            background: url('${placeholder10}') no-repeat center center;
            p {
                color: white;
            }
        }        
    }
`;

const Recipe = styled.div`
    margin-bottom: 30px;
    width: 540px;
    height: 150px;
    transition: 0.4s;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;

    display: flex;
    flex-direction: column;

    :hover {
        p {
            color: black;
            transition: 0.4s;
        }

        .qua {
            color:white;
        }

        .type {
            background: black;
        }

        background: #34C759;
    }

    p {
        margin-top: 0px;
        margin-bottom: 0px;    
    }

    @media (max-width: 600px) {
        width:90%;  
    }
`;

const SecondRecipesBloksFooter = styled.div`
    display: flex;
    max-width: 505px;
    justify-content: space-between;
    width:100%;
`;

const SecondRecipesBlocksTitle = styled.p`
    max-width: 505px;
    // padding-top: 30px;
    // margin-left: 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #FFFFFF;

    @media (max-width: 600px) {
        padding:8px;
    }
`;

const TypeAndDate = styled.div`
    display: flex;
    align-items: center;
    min-width:160px;
    justify-content: space-between;
    p:first-child {
        color: white;
    }

    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #B3B3B3;

    @media (max-width: 600px) {
        padding:8px;
    }
`;

const SecondMainCont = styled.div`
    display: flex;
    flex-direction: column;
    height:100%;
    width:100%;
    justify-content: space-evenly;
    align-items: center;
`;

const SecondCommAndVievs = styled.div`
    display: flex;
    // width:100%;
    min-width: 140px;
    justify-content: space-between;
    color: white;
    font-size: 12px;

    @media (max-width: 600px) {
        padding:8px;
    }
`;