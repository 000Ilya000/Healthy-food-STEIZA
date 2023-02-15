import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import DISHES from './Dishes(img)/DISHES.svg';
import imgDishes1 from './images/imgDishes1.svg';
import imgDishes2 from './images/imgDishes2.svg';
import imgDishes3 from './images/imgDishes3.svg';
import imgDishes4 from './images/imgDishes4.svg';
import imgDishes5 from './images/imgDishes5.svg';
import imgDishes6 from './images/imgDishes6.svg';
import stars from './images/stars.svg';
import WhiteARR from './images/WhiteARR.svg';
import { MainTitle } from '../About/About';
import { Title } from '../About/About';
import { BackgroundTitle } from '../About/About';

// function changeColor(e) {
//     const btn = document.getElementsByClassName('MainButton')
//     btn.className.add("active");     
// };


function DishesScreen () {
    return (
        <Dishes id='dishes'>
            <MainTitle>
                <Title>
                    Dish Of The Day
                </Title>
                <BackgroundTitle className='bgtitle'>DISHES</BackgroundTitle>
            </MainTitle>
            <MainDishCards>
                    <DishCard className='firstthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                    <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard className='firstthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard className='firstthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard className='secondthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard className='secondthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
                    
                    <DishCard className='secondthree'>
                        <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                                <button className='MainButton'>ORDER</button>
                            </DishesCardFoot>
                        </CardContent>
                    </DishCard>
            </MainDishCards>
        </Dishes>
    )
}


export default DishesScreen;

const Dishes = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    margin-top:90px;
    margin-bottom:90px;
`;

const MainDishCards = styled.div`
    width:80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;

    .firstthree {
        margin-bottom:40px;
    }

    @media (max-width: 1300px) {
        width:100%;
        .secondthree {
            margin-bottom:40px;
        }
    }
    // @media (max-width: 1050px) {
    //     .secondthree {
    //         margin-bottom:40px;
    //     }
    // }
`;

const DishCard = styled.div`
    height: 494px;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;


    :hover {
        a {
            opacity: 100%
        }
    }

    img {
        width:100%;
    }

    a img {
        max-width:24px;
    }

    a {
        margin-top: 24px;
        margin-right: 24px;
        position: absolute;
        min-width:40px;
        min-height: 40px;
        display: flex;
        opacity:0%;
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
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    color: #D9D9D9;
    margin-top: 30px;
    margin-bottom: 0px;
`;

const DishesCardTitleDescr = styled.p`
    // width: 290px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.15px;
    color: #A4A8B2;
    margin-top: 0px;
`;

const DishesDescr = styled.p`
    // width: 290px;

    max-width: 85%;
    font-weight: 400;
    font-size: 13px;
    margin-top: 20px;
    line-height: 18px;
    letter-spacing: -0.1625px;
    color: #85878C;
`;

const DishesCardFoot = styled.div`
    button {
        margin-left:11%;
    }

    .active {
        background-color: red;
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
