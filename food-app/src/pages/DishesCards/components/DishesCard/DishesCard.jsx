import styled from 'styled-components';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
// import DishesScreen from './pages/mainPage/components/Dishes/Dishes';
import { DishCard } from '../../../mainPage/components/Dishes/Dishes';
import dishesinfo from '../../../mainPage/components/Dishes/menu';
import WhiteARR from '../../../mainPage/components/Dishes/images/WhiteARR.svg';
import star from '../../../mainPage/components/Dishes/images/star.svg';
import { CardContent } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardTitle } from '../../../mainPage/components/Dishes/Dishes';
import { DishesDescr } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardFoot } from '../../../mainPage/components/Dishes/Dishes';
import { MainDishesCardTitle } from '../../../mainPage/components/Dishes/Dishes';
import { DishesCardTitleDescr } from '../../../mainPage/components/Dishes/Dishes';
import { DishesReiting } from '../../../mainPage/components/Dishes/Dishes';    

function DishesCard () {


    return (
        <DishCard>
            {dishesinfo.map((item, index) =>
                <div key={index}>
                    {/* <Link to="/"><img src={WhiteARR} alt="WhiteARR" /></Link> */}
                    <img src={item.image} alt="imgDishes2"/>
                    <CardContent>
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
                    </CardContent>
                </div>
            )}
        </DishCard>
    )
}


export default DishesCard;