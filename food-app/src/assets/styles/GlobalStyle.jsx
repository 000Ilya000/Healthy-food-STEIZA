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
        min-width:474px;
        // display: grid;   
    }

    p, a{
        font-family: "HelveticaNeueRegular";
        text-decoration: none;
        margin-top:0px;
        margin-bottom:0px;
    };

    // .MainButton {
    //     display: flex;
    //     // font-weight: 900;
    //     text-decoration: none;
    //     padding: 15px 32px;
    //     user-select: none;
    //     outline: none;
    //     border-radius: 43px;
    //     transition: 0.4s;
    //     color: black;
    //     font-family: "HelveticaNeueBold";
    //     font-size: 10px;
    //     background: #34C759;
    //     border: 1px solid #34C759;  
    //     // letter-spacing: 0.2em;
    // } 

    // .MainButton:hover {
    //     color: #34C759;
    //     background: none;
    //     border: 1px solid #34C759;
    // }

    .bgtitle {
        display:flex;
        flex-direction: column;
        align-items: center;

        ::after {
            height: 2px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            background: #34C759;
            color: #34C759;
            content: ' ';
            min-width: 56px;
            flex-direction: column-reverse;
        }
    }

    .firstthreecards {
        padding-top:30px;
    }

    #chefstitle {
        p {
            : after {
                content: 'Our Chefs';
                min-width: max-content;
            }
        }
    }
`;