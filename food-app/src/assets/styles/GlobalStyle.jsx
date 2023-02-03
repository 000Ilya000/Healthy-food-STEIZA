import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    body {
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        background: #1A1A1A;
    }

    html {
        min-width:350px
    }

    p, a{
        font-family: "HelveticaNeueRegular";
        text-decoration: none;
    };
`;