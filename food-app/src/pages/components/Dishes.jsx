import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DISHES from '../../assets/img/DISHES.svg';
import Button from './Button';
import imgDishes1 from '../../assets/img/imgDishes1.svg';
import imgDishes2 from '../../assets/img/imgDishes2.svg';
import imgDishes3 from '../../assets/img/imgDishes3.svg';
import imgDishes4 from '../../assets/img/imgDishes4.svg';
import imgDishes5 from '../../assets/img/imgDishes5.svg';
import imgDishes6 from '../../assets/img/imgDishes6.svg';
import stars from '../../assets/img/stars.svg';



function DishesScreen () {
    return (
        <>
            <Dishes id='dishes'>
                <DishesTitle>Dish Of The Day</DishesTitle>
                <ThreeCards>
                    <DishCard>
                        <img src={imgDishes1} alt="imgDishes1" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard>
                        <img src={imgDishes2} alt="imgDishes2" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard>
                        <img src={imgDishes3} alt="imgDishes3" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                </ThreeCards>
                <ThreeCards>
                    <DishCard>
                        <img src={imgDishes4} alt="imgDishes4" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard>
                        <img src={imgDishes5} alt="imgDishes5" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard>
                        <img src={imgDishes6} alt="imgDishes6" />
                        <CardContent>
                            <DishesCardTitle>
                                <MainDishesCardTitle>Featured Meal</MainDishesCardTitle>
                                <DishesCardTitleDescr>Served with french fries + drink</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>
                                Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...
                            </DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={stars} alt="stars" />
                                </DishesReiting>
                                <Button/>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                </ThreeCards>
            </Dishes>
        </>
    )
}

export default DishesScreen;


const Dishes = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 24px;
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



const ThreeCards = styled.div`
    display: flex;
    margin-top: 54px;
    width: 80%;
    justify-content: space-evenly;
    margin-top: 30px;
`;

const DishCard = styled.div`
    height: 494px;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    max-width: 350px;

    img {
        width:100%;
    }

`;

const DishesCardTitle = styled.div`
`;

const CardContent = styled.div`
    // width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 8%;
`;

const MainDishesCardTitle = styled.p`
    // width: 290px;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    color: #D9D9D9;
    margin-top: 30px;
    margin-bottom: 0px;
`;

const DishesCardTitleDescr = styled.p`
    // width: 290px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.15px;
    color: #A4A8B2;
    margin-top: 0px;
`;

const DishesDescr = styled.p`
    // width: 290px;

    font-style: normal;
    max-width: 85%;
    font-weight: 400;
    font-size: 13px;
    margin-top: 20px;
    line-height: 18px;
    letter-spacing: -0.1625px;
    color: #85878C;
`;

const DishesCardFoot = styled.div`
    a {
        // max-width: 20%;
        // max-height: 20%;
        font-size: 10px;
        padding: 15px 25px;
        justify-content: center;
        margin-top: 0px;
    }

    div:last-child {
        margin-left:11%;
    }

    display: flex;
    align-items: center;
`;

const DishesReiting = styled.div`
    max-width: 155px;
`;
