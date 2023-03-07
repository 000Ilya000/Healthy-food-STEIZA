import React, {useState} from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MainDishCards, DishCard, CardContent, MainDishesCardTitle, DishesCardTitleDescr, DishesDescr, DishesCardFoot, DishesReiting } from '../../../mainPage/components/Dishes/Dishes';
import WhiteARR from '../../../mainPage/components/Dishes/images/WhiteARR.svg';
import { MainTitle, BackgroundTitle } from '../../../mainPage/components/About/About';
import Rate from "../../../../сomponents/Rate/Rate";
// import { DishButton } from "../../../mainPage/components/Dishes/Dishes";
import DishButton from "../../../mainPage/components/Dishes/DishButton/DishButton";
import dishesinfo from "../../../mainPage/components/Dishes/menu";


function MainDishes( {dishes, loading}) {
    const [rating, setRating] = useState(0);
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);
    const [rating6, setRating6] = useState(0);
    const [rating7, setRating7] = useState(0);
    const [rating8, setRating8] = useState(0);
    const [rating9, setRating9] = useState(0);
    const [rating10, setRating10] = useState(0);
    const [rating11, setRating11] = useState(0);
    const [rating12, setRating12] = useState(0);
    const [rating13, setRating13] = useState(0);
    const [rating14, setRating14] = useState(0);
    const [rating15, setRating15] = useState(0);

    const setRait = [setRating, setRating1, setRating2, setRating3, setRating4, setRating5, setRating6, setRating7, setRating8, setRating9, setRating10, setRating11, setRating12, setRating13, setRating14, setRating15]
    const rait = [rating, rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9, rating10, rating11, rating12, rating13, rating14, rating15]

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
                                        {/* {Array(5).fill(0).map((item,index) => <img key={index} src={star}/>)} */}
                                        <Rate rating={rait[index]} indexreit={index} onRating={(rate) => setRait[index](rate)}/>
                                        <p>{dishes.reviews.length}</p>
                                    </DishesReiting>
                                        {/* <button key={index} onClick={(e) => ChangeButton(e, index)} className={but[index] ? 'push_but' : ''}></button> */}
                                    <DishButton index={index}/>
                                    {console.log(index)}
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