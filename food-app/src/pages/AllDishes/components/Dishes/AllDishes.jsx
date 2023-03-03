import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MainDishCards, DishCard, CardContent, MainDishesCardTitle, DishesCardTitleDescr, DishesDescr, DishesCardFoot, DishesReiting } from '../../../mainPage/components/Dishes/Dishes';
import star from '../../../mainPage/components/Dishes/images/star.svg';
import WhiteARR from '../../../mainPage/components/Dishes/images/WhiteARR.svg';
import { MainTitle, BackgroundTitle } from '../../../mainPage/components/About/About';


function MainDishes( {dishes, loading}) {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <AllDishesBlock>
            <MainTitle className='bgtitle'>
                <BackgroundTitle>DISHES</BackgroundTitle>
            </MainTitle>
            <MainDishCards>
                {dishes.map((dishes, index) =>
                    <div key={index}>
                        <DishCard>
                            <Link className='dishlink' to={`/${index}`}><img src={WhiteARR} alt="WhiteARR" /></Link>
                            <img src={dishes.image} className='dishimg' alt="imgDishes2"/>
                            <CardContent>
                                <div>
                                    <MainDishesCardTitle>{dishes.title}</MainDishesCardTitle>
                                    <DishesCardTitleDescr>{dishes.subtitle}</DishesCardTitleDescr>
                                </div>
                                <DishesDescr>{dishes.description}</DishesDescr>
                                <DishesCardFoot>
                                    <DishesReiting>
                                        {Array(5).fill(0).map((item,index) => <img key={index} src={star}/>)}
                                        <p>{dishes.reviews.length}</p>
                                    </DishesReiting>
                                        <button>ORDER</button>
                                </DishesCardFoot>
                            </CardContent>
                        </DishCard>
                    </div> 
                )}
            </MainDishCards>
        </AllDishesBlock>
    );
}

export default MainDishes;

const AllDishesBlock = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 90%;
        
    @media (max-width: 984px) {
        width: 540px;
    }
`;