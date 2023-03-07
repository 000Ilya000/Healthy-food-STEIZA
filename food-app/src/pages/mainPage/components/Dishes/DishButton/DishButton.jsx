import {React, useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function DishButton ({index}) {
    const [but0, setBut0] = useState(false);
    const [but1, setBut1] = useState(false);
    const [but2, setBut2] = useState(false);
    const [but3, setBut3] = useState(false);
    const [but4, setBut4] = useState(false);
    const [but5, setBut5] = useState(false);
    const [but6, setBut6] = useState(false);
    const [but7, setBut7] = useState(false);
    const [but8, setBut8] = useState(false);
    const [but9, setBut9] = useState(false);
    const [but10, setBut10] = useState(false);
    const [but11, setBut11] = useState(false);
    const [but12, setBut12] = useState(false);
    const [but13, setBut13] = useState(false);
    const [but14, setBut14] = useState(false);
    const [but15, setBut15] = useState(false);
    const but = [but0, but1, but2, but3, but4, but5, but6, but7, but8, but9, but10, but11, but12, but13, but14, but15]

    function change(delta, index) {
        var input = document.getElementById(index);
        input.value = parseInt(input.value) + delta;
        if (input.value < 1) {
            input.value = 0;
        } 
        if (input.value > 24) {
            input.value = 24;
        }
    }   

    function ChangeButton(e, index) {
        index == 0 ? setBut0(true) : setBut0(but0)
        index == 1 ? setBut1(true) : setBut1(but1)
        index == 2 ? setBut2(true) : setBut2(but2)
        index == 3 ? setBut3(true) : setBut3(but3)
        index == 4 ? setBut4(true) : setBut4(but4)
        index == 5 ? setBut5(true) : setBut5(but5)
        index == 6 ? setBut6(true) : setBut6(but6)
        index == 7 ? setBut7(true) : setBut7(but7)
        index == 8 ? setBut8(true) : setBut8(but8)
        index == 9 ? setBut9(true) : setBut9(but9)
        index == 10 ? setBut10(true) : setBut10(but10)
        index == 11 ? setBut11(true) : setBut11(but11)
        index == 12 ? setBut12(true) : setBut12(but12)
        index == 13 ? setBut13(true) : setBut13(but13)
        index == 14 ? setBut14(true) : setBut14(but14)
        index == 15 ? setBut15(true) : setBut15(but15)
        console.log(index)
    }

    return (
        <MainDishButton className='dishbut' key={index} onClick={(e) => ChangeButton(e, index)}>
            {but[index] ? <button className='push_but'><div className='changeorder' onClick={(e) => change(-1, index)}>-</div><input id={index} type="text" defaultValue={1}/><div className='changeorder' onClick={(e) => change(1, index)}>+</div></button> : <button/>}
        </MainDishButton>
    )
}


export default DishButton;

const MainDishButton = styled.div`
    display: flex;
    margin-left: 20%;
    font-size: 16px;

    .changeorder {
        width: 14px;
        // display: flex;
    }

    input {
        all: unset;
        width: 14px;
    }
`;