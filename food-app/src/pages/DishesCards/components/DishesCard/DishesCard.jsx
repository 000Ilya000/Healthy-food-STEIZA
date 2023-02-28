import styled from 'styled-components';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { DishCard } from '../../../mainPage/components/Dishes/Dishes';
import dishesinfo from '../../../mainPage/components/Dishes/menu';
import WhiteArrowLeft from '../../../mainPage/components/Recipes/images/WhiteArrowLeft.svg';
import star from '../../../mainPage/components/Dishes/images/star.svg';
import { CardContent } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardTitle } from '../../../mainPage/components/Dishes/Dishes';
import { DishesDescr } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardFoot } from '../../../mainPage/components/Dishes/Dishes';
import { MainDishesCardTitle } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardTitleDescr } from '../../../mainPage/components/Dishes/Dishes';
import { DishesReiting } from '../../../mainPage/components/Dishes/Dishes';    
import { MainBut } from '../../../mainPage/MainPage';

function DishesCard (props) {
    let lengthcards = dishesinfo.length;
    return (
        <CardAndButton>
            <DishCard className='maindishcard'>
                {[dishesinfo[props.numindex]].map((item, index) =>
                    <div key={index} className='dishcard'>
                        <img src={item.image} alt="imgDishes2" className='maindishimg'/>
                        <CardContent className='cardContent'>
                            <DishesCardTitle>
                                <MainDishesCardTitle>{item.title}</MainDishesCardTitle>
                                <DishesCardTitleDescr>{item.subtitle}</DishesCardTitleDescr>
                            </DishesCardTitle>
                            <DishesDescr>{item.description}</DishesDescr>
                            <DishesCardFoot>
                                <DishesReiting>
                                    <img src={star}/>
                                    <img src={star}/>
                                    <img src={star}/>
                                    <img src={star}/>
                                    <img src={star}/>
                                    <p>{item.reviews.length}</p>
                                </DishesReiting>
                                    <button>ORDER</button>
                            </DishesCardFoot>
                            <Arrows>
                                <Link to={`/${props.previndex > -1 ? props.previndex : dishesinfo.length-1}`}><img src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                                <Link to={`/${props.nextindex < dishesinfo.length ? props.nextindex : index}`} className='nextcard'><img className='nextcardimg' src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                            </Arrows>
                        </CardContent>
                    </div>
                )}
            </DishCard>
            <MainBut>
                <Link className='but' to = "/">BACK</Link>
            </MainBut>
        </CardAndButton>
    )
}

export default DishesCard;

const CardAndButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width:100%;
    justify-content: center;
    .maindishcard {
        height: fit-content;
    }
    .but {
        padding: 16px 40px;
        font-size: 14px;
        letter-spacing: 0.1em;
        font-family: "HelveticalNeueCondensend";
    }

    @media (min-width: 984px) {
        .cardContent {
            margin-left: 50px;
            max-width: 400px;
        }

        .maindishcard {
            max-width: 100%;
            height: fit-content;
        }
    
        .dishcard {
            // max-width: 100%;
            align-items: center;
            display: flex;
            .maindishimg {
                width: 450px;
                border-radius: 6px;
            }
        }
    }
`;

const Arrows = styled.div`
    display: flex;
    .nextcardimg {
        transform: rotate(180deg);
    }
    a {
        opacity: 80%;
        position: relative;
        margin-top: 24px;
        // margin-right:0px;
        margin-bottom: 24px;
    }

    @media (min-width: 984px) {
        justify-content: flex-start;
        a {
            opacity: 80%;
            position: relative;
        }
    }
`;