import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import dishesinfo from './menu';
import star from './images/star.svg';
import WhiteARR from './images/WhiteARR.svg';
import { MainTitle, BackgroundTitle } from '../About/About';
import { MainBut } from '../../MainPage';

function DishesScreen () {
    const [but0, setBut0] = useState(false);
    const [but1, setBut1] = useState(false);
    const [but2, setBut2] = useState(false);
    const [but3, setBut3] = useState(false);
    const [but4, setBut4] = useState(false);
    const [but5, setBut5] = useState(false);

    const but = [but0,but1,but2,but3, but4, but5]

    function ChangeButton(e, index) {
        index == 0 ? setBut0(!but0) : setBut0(but0)
        index == 1 ? setBut1(!but1) : setBut1(but1)
        index == 2 ? setBut2(!but2) : setBut2(but2)
        index == 3 ? setBut3(!but3) : setBut3(but3)
        index == 4 ? setBut4(!but4) : setBut4(but4)
        index == 5 ? setBut5(!but5) : setBut5(but5)

    }

    let firstdishcards = dishesinfo.filter((value, index) => index < 6);
    return (
        <Dishes id='dishes'>
            <DishesContent>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>DISHES</BackgroundTitle>
                </MainTitle>
                <MainDishCards>
                    {firstdishcards.map((item, index) =>
                        <div key={index}>
                            <DishCard>
                                <Link className='dishlink' to={`/${index}`}><img src={WhiteARR} alt="WhiteARR" /></Link>
                                <img src={item.image} className='dishimg' alt="imgDishes2"/>
                                <CardContent>
                                    <div>
                                        <MainDishesCardTitle>{item.title}</MainDishesCardTitle>
                                        <DishesCardTitleDescr>{item.subtitle}</DishesCardTitleDescr>
                                    </div>
                                    <DishesDescr>{item.description}</DishesDescr>
                                    <DishesCardFoot>
                                        <DishesReiting>
                                            {Array(5).fill(0).map((item,index) => <img key={index} src={star}/>)}
                                            <p>{item.reviews.length}</p>
                                        </DishesReiting>

                                        <button key={index} onClick={(e) => ChangeButton(e, index)} className={but[index] ? 'push_but' : ''}>ORDER</button>
                                    </DishesCardFoot>
                                </CardContent>
                            </DishCard>
                        </div> 
                    )}
                </MainDishCards>
                <MainBut>
                    <a className='but' href = "/AllDishes">MORE</a>
                </MainBut>
            </DishesContent>
        </Dishes>
    )
}


export default DishesScreen;

export const Dishes = styled.div`
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

export const DishesContent = styled.div`
    width: 1140px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .but {
        padding: 16px 40px;
        font-size: 14px;
        letter-spacing: 0.1em;
        font-family: "HelveticalNeueCondensend";
        cursor: pointer;
    }

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
        .dishlink {
            opacity: 100%
        }
    }

    .dishimg {
        width:100%;
        height: 260px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .dishlink img {
        max-width:24px;
    }

    .dishlink {
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

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8%;
`;

export const MainDishesCardTitle = styled.p`
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    color: #D9D9D9;
    margin-top: 30px;
    margin-bottom: 0px;
`;

export const DishesCardTitleDescr = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.15px;
    color: #A4A8B2;
    margin-top: 0px;
`;

export const DishesDescr = styled.p`
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
    display: flex;
    align-items: center;

    button {
        margin-left:10%;
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

    .push_but {
        color: #252525;
        background: #34C759;
    }
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
        padding-top: 2px;
        padding-left: 8px;
        font-weight: 900;
        font-size: 12px;
        letter-spacing: 1.5px;
        color: #B3B3B3;
    }
`;
