import styled from 'styled-components';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import dishesinfo from '../mainPage/components/Dishes/menu';
import WhiteArrowLeft from '../mainPage/components/Recipes/images/WhiteArrowLeft.svg';
import star from '../mainPage/components/Dishes/images/star.svg';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';  
import { MainBut } from '../mainPage/MainPage';
import { MainTitle, BackgroundTitle } from '../mainPage/components/About/About';
import { CardContent, DishCard, DishesDescr, DishesCardFoot, MainDishesCardTitle, DishesCardTitleDescr, DishesReiting } from '../mainPage/components/Dishes/Dishes';

function DishesCard ({numindex}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);     
    
    let filtereddishesinfo = dishesinfo.filter((value, index) => index !== numindex);
    let reviews = [dishesinfo[numindex]].map((item, index) => item.reviews);

    console.log(reviews[numindex]);

    return (
        <Cardpage>
            <Header/>
            <CardAndButton>
                <DishCard className='maindishcard'>
                    {[dishesinfo[numindex]].map((item, index) =>
                        <div key={index} className='dishcard'>
                            <MainDishesCardTitle>{item.title}</MainDishesCardTitle>
                            <MainCardContent>
                                <Images>
                                    <img src={item.image} alt="imgDishes2" className='maindishimg'/>
                                    <Otherdish>
                                        {filtereddishesinfo.map((item, index) => <img key={index} src={item.image}/>)}
                                    </Otherdish>
                                </Images>
                                <CardContent className='cardContent'>
                                    <DishesDescr className='dishdescr'>{item.description}</DishesDescr>
                                    <DishesCardTitleDescr className='dishtitledescr'>{item.subtitle}</DishesCardTitleDescr>
                                    <button>ORDER</button>
                                    <DishesCardFoot>
                                        <DishesReiting>
                                            {Array(5).fill(0).map((item,index) => <img key={index} src={star}/>)}
                                            <p>{item.reviews.length}</p>
                                        </DishesReiting>
                                    </DishesCardFoot>
                                    {/* <Arrows>
                                        <Link to={`/${numindex > 0 ? numindex-1 : dishesinfo.length-1}`}><img src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                                        <Link to={`/${numindex < dishesinfo.length-1 ? numindex+1 : 0}`} className='nextcard'><img className='nextcardimg' src={WhiteArrowLeft} alt="WhiteARR" /></Link>
                                    </Arrows> */}
                                </CardContent>
                            </MainCardContent>
                        </div>
                    )} 
                </DishCard>
                <MainBut>
                    <Link className='but' to = "/">BACK</Link>
                </MainBut>
            </CardAndButton>
            <Reviews>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>Reviews</BackgroundTitle>
                </MainTitle>
                <DishReviews>
                    {[reviews[numindex]].map((item, index) => 
                        <Review key={index}>
                                {item.map((item, index)=> 
                                    <MainRewiew key={index}>
                                        <NameAndReview><p>{item.name}</p> <p>{item.rating}</p></NameAndReview>
                                        <ReviewDescr><p>{item.text}</p></ReviewDescr>
                                    </MainRewiew>
                                )}
                        </Review>
                    )}
                </DishReviews>
            </Reviews>
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

    .bgtitle {
        p:after {
            content: 'Reviews';
            min-width: max-content;
        }
    }

    @media (max-width: 265px) {
        min-height: 3000px;
    }
`;

const MainCardContent = styled.div`
    display: flex;
    align-items: center;
    margin-top:24px;
`;

const Review = styled.div`
    // height: 100px;
`;

const NameAndReview = styled.div`
    display: flex;  
    flex-direction: row;
    width: 60px;
    justify-content: space-between;
`;

const MainRewiew = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    // width: 60px;
    // justify-content: space-between;
`;

const ReviewDescr = styled.div`

`;

const Reviews = styled.div`

`;

const DishReviews = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Images = styled.div`
    display: flex;
    flex-direction: column;
`;

const Otherdish = styled.div`
    display: flex;
    margin-top: 24px;
    width:100%;
    justify-content: space-between;
    // height: 100px;
    img {
        height: 60px;
        border-radius: 6px;
        // width:0%;
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
        .dishcard {
            display: flex;
            flex-direction: column;

        }
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
            max-width: 350px;
            .dishdescr {
                margin-top:0px;
                font-size: 16px;
                // width:100%;
                max-width:90%;
            }

            .dishtitledescr {
                font-size: 16px;
                margin-top: 10px;
            }

            button {
                // margin-left:10%;
                max-width: 200px;
                margin-top:24px;
                margin-bottom:4px;
                justify-content: center;
                cursor: pointer;
                display: flex;
                // font-weight: 600;
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