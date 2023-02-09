import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body {
        min-height: 100vh;
        width: 100%;
        // display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        background: #1A1A1A;
    }

    html {
        min-width:350px;
        // display: grid;   
    }

    p, a{
        font-family: "HelveticaNeueRegular";
        text-decoration: none;
    };

    .MainButton {
        display: flex;
        // font-weight: 900;
        text-decoration: none;
        padding: 15px 32px;
        user-select: none;
        outline: none;
        border-radius: 43px;
        transition: 0.4s;
        color: black;
        font-family: "HelveticaNeueBold";
        font-size: 10px;
        background: #34C759;
        border: 1px solid #34C759;  
        // letter-spacing: 0.2em;
    } 

    .MainButton:hover {
        color: #34C759;
        background: none;
        border: 1px solid #34C759;
    }
`;