import React, {useState} from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MainDishCards, DishCard, CardContent, MainDishesCardTitle, DishesCardTitleDescr, DishesDescr, DishesCardFoot, DishesReiting } from '../../../mainPage/components/Dishes/Dishes';
import star from '../../../mainPage/components/Dishes/images/star.svg';
import WhiteARR from '../../../mainPage/components/Dishes/images/WhiteARR.svg';
import { MainTitle, BackgroundTitle } from '../../../mainPage/components/About/About';
import dishesinfo from "../../../mainPage/components/Dishes/menu";


function MainDishes( {dishes, loading}) {
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
                                        <button key={index} onClick={(e) => ChangeButton(e, index)} className={but[index] ? 'push_but' : ''}>ORDER</button>
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

    .push_but {
        color: #252525;
        background: #34C759;
    }
`;