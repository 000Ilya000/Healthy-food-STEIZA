import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RECIPES from "../../assets/img/RECIPES.svg";
import FirstBlockRecipePlactholder from "../../assets/img/FirstBlockRecipePlactholder.svg";
import VievesFirstBlock from "../../assets/img/VievesFirstBlock.svg";
import CommFirstBlock from "../../assets/img/CommFirstBlock.svg";


function Recipes () {
    return (
        <>
            <MainRecipes>
                <TitleRecipes>Recipes From Our Chefs</TitleRecipes>
                <RecipesBlocks>
                    <FirstRecipeBlock>
                        <TypeOfFoodRecipe>BREAKFAST</TypeOfFoodRecipe>
                        <DateRcipe>05 Jul 2016</DateRcipe>
                        <TitleFirstBlockRecipe>Lorem ipsum dolor sit amet, consectetur adipiscing elit</TitleFirstBlockRecipe>
                        <AutorOfRecipe>Jason Keller</AutorOfRecipe>
                        <VievsAndComm>
                            <VievsRecipe><img src={VievesFirstBlock} alt="VievesFirstBlock" /></VievsRecipe>
                            <CommentsRecipe><img src={CommFirstBlock} alt="CommFirstBlock" /></CommentsRecipe>
                        </VievsAndComm>
                    </FirstRecipeBlock>
                    <SecondRecipesBlocks>
                        <Recipe></Recipe>
                        <Recipe></Recipe>
                        <Recipe></Recipe>
                    </SecondRecipesBlocks>
                </RecipesBlocks>
            </MainRecipes>
        </>
    )
}

export default Recipes;

const MainRecipes = styled.div`
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
`;

const FirstRecipeBlock = styled.div`
    height: 510px;
    display: flex;
    background: url('${FirstBlockRecipePlactholder}') no-repeat center center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;


    // width: 73px;
    // height: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    // line-height: 30px;
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
`;

const Recipe = styled.div`
`;