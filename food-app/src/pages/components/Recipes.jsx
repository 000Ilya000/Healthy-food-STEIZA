import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RECIPES from "../../assets/img/RECIPES.svg";
import FirstBlockRecipePlactholder from "../../assets/img/FirstBlockRecipePlactholder.svg";
import VievesFirstBlock from "../../assets/img/VievesFirstBlock.svg";
import CommFirstBlock from "../../assets/img/CommFirstBlock.svg";
import ArrowLeft from '../../assets/img/Arrowleft.svg';
import WhiteArrowLeft from '../../assets/img/WhiteArrowLeft.svg'
import placeholder10 from '../../assets/img/placeholder (10).svg'



function Recipes () {
    return (
        <>
            <MainRecipes>
                <TitleRecipes>Recipes From Our Chefs</TitleRecipes>
                <RecipesBlocks>
                    <FirstRecipeBlock>
                        <ContentFirstRecipeBlock>
                            <TypeOfFoodRecipe>BREAKFAST</TypeOfFoodRecipe>
                            <DateRcipe>05 Jul 2016</DateRcipe>
                            <TitleFirstBlockRecipe>Lorem ipsum dolor sit amet, consectetur adipiscing elit</TitleFirstBlockRecipe>
                            <AutorOfRecipe>Jason Keller</AutorOfRecipe>
                            <VievsAndComm>
                                <VievsRecipe><img src={VievesFirstBlock} alt="VievesFirstBlock" /></VievsRecipe>
                                <CommentsRecipe><img src={CommFirstBlock} alt="CommFirstBlock" /></CommentsRecipe>
                            </VievsAndComm>
                        </ContentFirstRecipeBlock>
                        <Link to="#">
                            <img src={WhiteArrowLeft} alt="arrow1" />
                        </Link>
                    </FirstRecipeBlock>
                    <SecondRecipesBlocks>
                        <Recipe>
                            <SecondMainCont>
                                <SecondRecipesBlocksTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</SecondRecipesBlocksTitle>
                                <SecondRecipesBloksFooter>
                                    <TypeAndDate>
                                        <TypeOfFoodRecipe className='type'>lunch</TypeOfFoodRecipe>
                                        <DateRcipe>07 Jan 2016</DateRcipe>
                                    </TypeAndDate>
                                    <SecondCommAndVievs>
                                        <SecondVievs><img src={VievesFirstBlock} alt="VievesFirstBlock" /></SecondVievs>
                                        <SecondComm><img src={CommFirstBlock} alt="CommFirstBlock" /></SecondComm>
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
                                        <SecondVievs><img src={VievesFirstBlock} alt="VievesFirstBlock" /></SecondVievs>
                                        <SecondComm><img src={CommFirstBlock} alt="CommFirstBlock" /></SecondComm>
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
                                        <SecondVievs><img src={VievesFirstBlock} alt="VievesFirstBlock" /></SecondVievs>
                                        <SecondComm><img src={CommFirstBlock} alt="CommFirstBlock" /></SecondComm>
                                    </SecondCommAndVievs>
                                </SecondRecipesBloksFooter>
                            </SecondMainCont>
                        </Recipe>
                    </SecondRecipesBlocks>
                </RecipesBlocks>
            </MainRecipes>
        </>
    )
}

export default Recipes;

const MainRecipes = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
`;

const TitleRecipes = styled.p`
    min-height:150px;
    min-width:308px;
    display: flex;
    background: url('${RECIPES}') no-repeat center center;
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

const RecipesBlocks = styled.div`
    display: flex;
    justify-content: center;
`;

const FirstRecipeBlock = styled.div`
    height: 510px;
    display: flex;
    background: url('${FirstBlockRecipePlactholder}') no-repeat center center;
    max-width: 540px;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // color: #FFFFFF;


    // font-style: normal;
    // font-weight: 400;
    // font-size: 14px;

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
    
    
        :hover {
            background: #34C759;
        }
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


    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`;

const TypeOfFoodRecipe = styled.p`
    // height: 25px;

    font-style: normal;
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
    font-style: normal;
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
`;

const VievsRecipe = styled.div`
`;

const CommentsRecipe = styled.div`
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

        .type {
            background: black;
        }

        background: #34C759;
    }

    p {
        margin-top: 0px;
        margin-bottom: 0px;    
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
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #FFFFFF;
`;

const TypeAndDate = styled.div`
    display: flex;
    align-items: center;
    min-width:150px;
    justify-content: space-between;
    p:first-child {
        color: white;
    }

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #B3B3B3;
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
`;

const SecondVievs = styled.div`
`;

const SecondComm = styled.div`
`;