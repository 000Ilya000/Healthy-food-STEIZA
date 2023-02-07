import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DISHES from '../../assets/img/DISHES.svg';
import Button from './Button';



function DishesScreen () {
    return (
        <>
            <Dishes id='dishes'>
                <DishesTitle>Dish Of The Day</DishesTitle>
                <FirstCards>
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                    
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                    
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                </FirstCards>
                <SecondCards>
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                    
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                    
                    <DishCard>
                        <img src="" alt="" />
                        <DishesCardTitle>
                            <MainDishesCardTitle></MainDishesCardTitle>
                            <DishesCardTitleDescr></DishesCardTitleDescr>
                        </DishesCardTitle>
                        <DishesDescr></DishesDescr>
                        <DishesCardFoot>
                            <DishesReiting></DishesReiting>
                            <Button></Button>
                        </DishesCardFoot>
                    </DishCard>
                </SecondCards>
            </Dishes>
        </>
    )
}

export default DishesScreen;


const Dishes = styled.div`

`;

const DishesTitle = styled.p`
    min-height:150px;
    min-width:400px;
    display: flex;
    background: url('${DISHES}') no-repeat center center;
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



const FirstCards = styled.div`
    display: flex;
`;

const SecondCards = styled.div`
    display: flex;
`;

const DishCard = styled.div`
`;

const DishesCardTitle = styled.div`
`;

const MainDishesCardTitle = styled.p`
`;

const DishesCardTitleDescr = styled.p`
`;

const DishesDescr = styled.p`
`;

const DishesCardFoot = styled.div`
`;

const DishesReiting = styled.div`
`;