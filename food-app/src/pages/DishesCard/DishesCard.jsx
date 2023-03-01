import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import dishesinfo from '../mainPage/components/Dishes/menu';
import WhiteArrowLeft from '../mainPage/components/Recipes/images/WhiteArrowLeft.svg';
import star from '../mainPage/components/Dishes/images/star.svg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';  
import { MainBut } from '../mainPage/MainPage';
import { CardContent, DishCard, DishesDescr, DishesCardFoot, MainDishesCardTitle, DishesCardTitleDescr, DishesReiting } from '../mainPage/components/Dishes/Dishes';

function DishesCard ({numindex}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);     
    
    return (
            <Cardpage>
                <Header/>
                <CardAndButton>
                    <DishCard className='maindishcard'>
                        {[dishesinfo[numindex]].map((item, index) =>
                            <div key={index} className='dishcard'>
                                <img src={item.image} alt="imgDishes2" className='maindishimg'/>
                                <CardContent className='cardContent'>
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
                                            <button>ORDER</button>
                                    </DishesCardFoot>
                                    <Arrows>
                                        <Link to={`/${numindex > 0 ? numindex-1 : dishesinfo.length-1}`}><img src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                                        <Link to={`/${numindex < dishesinfo.length-1 ? numindex+1 : 0}`} className='nextcard'><img className='nextcardimg' src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                                    </Arrows>
                                </CardContent>
                            </div>
                        )}
                    </DishCard>
                    <MainBut>
                        <Link className='but' to = "/">BACK</Link>
                    </MainBut>
                </CardAndButton>
                <Footer/>
            </Cardpage>
    )
}

export default DishesCard;

const Cardpage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;

    .header {
        background: rgba(26, 26, 26, 1);
        position: fixed;
        z-index: 2;
        top:0;
        left:0;

    }

    @media (max-width: 265px) {
        min-height: 3000px;
    }
`;

const CardAndButton = styled.div`
    margin-top:170px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

    @media (max-width: 265px) {
        height:100%;
        margin-top:0px;
        margin-bottom: 0px;
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