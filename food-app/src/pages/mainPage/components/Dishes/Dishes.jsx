import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import DISHES from './Dishes(img)/DISHES.svg';
import dishesinfo from './menu';
// import imgDishes1 from './images/imgDishes1.svg';
// import imgDishes2 from './images/imgDishes2.svg';
// import imgDishes3 from './images/imgDishes3.svg';
// import imgDishes4 from './images/imgDishes4.svg';
// import imgDishes5 from './images/imgDishes5.svg';
// import imgDishes6 from './images/imgDishes6.svg';
import star from './images/star.svg';
import WhiteARR from './images/WhiteARR.svg';
import { MainTitle } from '../About/About';
import { Title } from '../About/About';
import { BackgroundTitle } from '../About/About';
import { useState} from 'react';
// import { isInputElement } from 'react-router-dom/dist/dom';


// function changeColor(e) {
//     const btn = document.getElementsByClassName('MainButton')
//     btn.className.add("active");     
// };

// console.log(resultdihesinfo);
// const firstcardinfo = dishesinfo[0];

// console.log(firstcardinfo);

// {dishesinfo.map((item, image) => <img key={image} src={item.image.img1}/>)}
// <MainDishesCardTitle>{dishesinfo.map(item => item.title)[0]}</MainDishesCardTitle>




function DishesScreen () {
    // const [nav, setNav] = useState(false);
    // const [nav1, setNav1] = useState(false);
    // const [nav2, setNav2] = useState(false);
    // const [nav3, setNav3] = useState(false);
    // const [nav4, setNav4] = useState(false);
    // const [nav5, setNav5] = useState(false);


    // function ChangeDishesButton1() {
    //     setNav(!nav);
    // }
    // function ChangeDishesButton2() {
    //     setNav1(!nav1);
    // }
    // function ChangeDishesButton3() {
    //     setNav2(!nav2);
    // }
    // function ChangeDishesButton4() {
    //     setNav3(!nav3);
    // }
    // function ChangeDishesButton5() {
    //     setNav4(!nav4);
    // }
    // function ChangeDishesButton6() {
    //     setNav5(!nav5);
    // }

    // const firstcardinfo = dishesinfo[0];

    return (
        <Dishes id='dishes'>
            <DishesContent>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>DISHES</BackgroundTitle>
                </MainTitle>
                <MainDishCards>
                    {dishesinfo.map((item, index) =>
                        <div key={index}>
                            <DishCard>
                                <Link to={`/${index}`}><img src={WhiteARR} alt="WhiteARR" /></Link>
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
                            </DishCard>
                        </div> 
                    )}
                </MainDishCards>
            </DishesContent>
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
    width:100%;

    .bgtitle {
        p:after {
            content: 'Dish Of The Day';
            min-width: max-content;
        }
    }
`;

const DishesContent = styled.div`
    width: 1140px;
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

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

export const MainDishCards = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;

    // div {
    //     margin-bottom:40px;
    // }

    // @media (max-width: 1300px) {
    //     // width:100%;
    //     .secondthree {
    //         margin-bottom:40px;
    //     }
    // }
    // @media (max-width: 1050px) {
    //     width:100%;
    //     .secondthree {
    //         margin-bottom:40px;
    //     }
    // }
`;

export const DishCard = styled.div`
    height: 494px;
    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom:40px;


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



export const DishesCardTitle = styled.div`
`;

export const CardContent = styled.div`
    // width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 8%;
`;

const MainBut = styled.div`

`;

export const MainDishesCardTitle = styled.p`
    // width: 290px;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    color: #D9D9D9;
    margin-top: 30px;
    margin-bottom: 0px;
`;

export const DishesCardTitleDescr = styled.p`
    // width: 290px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.15px;
    color: #A4A8B2;
    margin-top: 0px;
`;

export const DishesDescr = styled.p`
    // width: 290px;

    max-width: 85%;
    font-weight: 400;
    font-size: 13px;
    margin-top: 20px;
    line-height: 18px;
    letter-spacing: -0.1625px;
    color: #85878C;
`;

export const DishesCardFoot = styled.div`
    margin-top: 20px;

    button {
        margin-left:10%;
        // border: none;
        // background: none;
        cursor: pointer;
        display: flex;
        font-weight: 600;
        padding: 16px 34px;
        border-radius: 43px;
        transition: 0.4s;
        color: rgba(255, 255, 255, 0.5);
        font-family: "HelveticaNeueBold";
        font-size: 10px;
        background: none;
        border: 2px solid #303030; 
        letter-spacing: 0.1em;
    }

    // .MainButton {
    //     display: flex;
    //     font-weight: 600;
    //     padding: 16px 36px;
    //     border-radius: 43px;
    //     transition: 0.4s;
    //     color: rgba(255, 255, 255, 0.5);
    //     font-family: "HelveticaNeueBold";
    //     font-size: 10px;
    //     background: none;
    //     border: 2px solid #303030; 
    //     letter-spacing: 0.1em;
    // }

    // .active {
    //     display: flex;
    //     font-weight: 600;
    //     padding: 16px 36px;
    //     border-radius: 43px;
    //     transition: 0.4s;
    //     color: #252525;
    //     font-family: "HelveticaNeueBold";
    //     font-size: 10px;
    //     background: #34C759;
    //     border: 2px solid #34C759; 
    //     letter-spacing: 0.1em;
    // }

    display: flex;
    align-items: center;
`;

export const DishesReiting = styled.div`
    max-width: 155px;
    display: flex;
    align-items: center;
    img {
        height: 22px;
        margin-right: 4px;
    }

    p {
        padding-left: 8px;
        font-weight: 900;
        font-size: 12px;
        letter-spacing: 1.5px;
        color: #B3B3B3;
    }
`;
