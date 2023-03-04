import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import dishesinfo from '../mainPage/components/Dishes/menu';
import star from '../mainPage/components/Dishes/images/star.svg';
import Header from '../../сomponents/Header/Header';
import Footer from '../../сomponents/Footer/Footer';  
import { MainBut } from '../mainPage/MainPage';
import { MainTitle, BackgroundTitle } from '../mainPage/components/About/About';
import { CardContent, DishCard, DishesDescr, DishesCardFoot, MainDishesCardTitle, DishesCardTitleDescr, DishesReiting } from '../mainPage/components/Dishes/Dishes';

function DishesCard ({numindex}) {
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);     
    
    // let filtereddishesinfo = dishesinfo.filter((value, index) => index !== numindex);
    let filtereddishesinfo = dishesinfo.filter((value, index) => index < 4);
    // filtereddishesinfo.map((item, index) => index !== numindex);
    let reviews = [dishesinfo[numindex]].map((item) => item.reviews);
    console.log(filtereddishesinfo);

    // function listdishindex() {
    //     numindex+2;
    // }

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
                                        {filtereddishesinfo.map((item, filterindex) => 
                                                // {/* <a key={filterindex} href={`/${ numindex <= filterindex ? filterindex+1 : filterindex}`}></a> */}
                                                <a key={filterindex} href={`/${filterindex}`}>
                                                    <img src={item.image}/>
                                                </a>
                                        )}
                                    </Otherdish>
                                </Images>
                                <CardContent className='cardContent'>
                                    <DishesDescr className='dishdescr'>{item.description}</DishesDescr>
                                    <DishesCardTitleDescr className='dishtitledescr'>{item.subtitle}</DishesCardTitleDescr>
                                    <button key={index} onClick={(e) => ChangeButton(e, index)} className={but[index] ? 'push_but' : ''}>ORDER</button>
                                    <DishesCardFoot>
                                        <DishesReiting>
                                            {Array(5).fill(0).map((item,index) => <img key={index} src={star}/>)}
                                            <Link to="linkreview" smooth={true} offset={-80} duration={500}><p>{item.reviews.length}</p></Link>
                                        </DishesReiting>
                                    </DishesCardFoot>
                                </CardContent>
                            </MainCardContent>
                        </div>
                    )} 
                </DishCard>
                <MainBut>
                    <a className='but' href = "/">BACK</a>
                </MainBut>
            </CardAndButton>
            <div id='linkreview'>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>Reviews</BackgroundTitle>
                </MainTitle>
                <DishReviews>
                    {reviews.map((item, index) => 
                        <div key={index}>
                            {item.map((item, index)=> 
                                <MainRewiew key={index}>
                                    <NameAndReview><p>{item.name}</p> <p className='review'>Review: {item.rating}</p></NameAndReview>
                                    <ReviewDescr><p>{item.text}</p></ReviewDescr>
                                </MainRewiew>
                            )}
                        </div>
                    )}
                </DishReviews>
            </div>
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

    @media (max-width: 200px) {
        min-height: 3000px;
    }
`;

const MainCardContent = styled.div`
    display: flex;
    align-items: center;
    margin-top:24px;
    a:hover {
        cursor: pointer;
        p {
            color: #34C759;
        }
    }
    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

const NameAndReview = styled.div`
    display: flex;  
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    font-size: 32px;
    color: #D9D9D9;
    align-items: center;

    .review {
        font-size: 20px;
        color: #F9AD3D;
    }
`;

const MainRewiew = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    padding: 10px;
    background: #252525;
    border-radius: 6px;
    transition: 0.4s;
    p {
        cursor: default;
    }
    :hover {
        background: #34C759;
        p {
            color: white;
        }
    }
`;

const ReviewDescr = styled.div`
    font-size: 16px;
    color: #85878C;
    width: 400px;
    margin-top: 10px;
`;

const DishReviews = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom:60px;
`;

const Images = styled.div`
    display: flex;
    flex-direction: column;
`;

const Otherdish = styled.div`
    display: flex;
    width:100%;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    a {
        height: 75px;
        border: 2px solid #252525;
        border-radius: 6px;
    }
    a:hover {
        border: 2px solid #34C759;
        border-radius: 6px;
    }
    img {
        height: 75px;
        border-radius: 6px;
    }
`;

const CardAndButton = styled.div`
    margin-top:170px;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    justify-content: center;
    .maindishcard {
        max-width: 100%;
        height: fit-content;
        .dishcard {
            display: flex;
            flex-direction: column;
            align-items: center;
            display: flex;
            .maindishimg {
                width: 450px;
                border-radius: 6px;
            }
        }
    }

    .cardContent {
        margin-left: 50px;
        max-width: 350px;
        .dishdescr {
            margin-top:0px;
            font-size: 16px;
            max-width:90%;
        }

        .dishtitledescr {
            font-size: 16px;
            margin-top: 10px;
        }
    }

    .but {
        padding: 16px 40px;
        font-size: 14px;
        letter-spacing: 0.1em;
        font-family: "HelveticalNeueCondensend";
        cursor: pointer;
    }

    button {
        max-width: 200px;
        margin-top:24px;
        margin-bottom:4px;
        justify-content: center;
        cursor: pointer;
        display: flex;
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

    @media (max-width: 984px) {
        .maindishcard {
            width: 700px;
        }
        button {
            max-width: 150px;
        }
    }

    @media (max-width: 767px) {
        .maindishcard {
            width: auto;
        }

        .cardContent {
            width:100%;
            margin: 24px 0px 24px 0px;
        }
    }

    @media (max-width: 200px) {
        height:100%;
        margin-top:0px;
        margin-bottom: 0px;
    }
`;