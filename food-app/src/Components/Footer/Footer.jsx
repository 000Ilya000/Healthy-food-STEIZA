import React from 'react';
import styled from 'styled-components';
import { CardCont, Card, CardTitle, CardDescr } from '../../pages/mainPage/MainPage';
import icon_time from '../../assets/img/icon_time.svg';
import icon_adress from '../../assets/img/icon_adress.svg';
import icon_call from '../../assets/img/icon_call.svg';
import { Logo } from '../Header/Header';
import logo from '../Header/images/Logo.svg';
import HEALTHYSWITCHER from '../Header/images/HEALTHY SWITCHER.svg';

function Footer () {
    return (
        <MainFooter>
                <FooterMainInfo>
                    <CardCont className='centrcards'>
                        <Card>
                            <img src={icon_time} alt="time" />
                            <CardTitle>Today 10:00 am - 7:00 pm</CardTitle>
                            <CardDescr>Working hours</CardDescr>
                        </Card>
                        <Card>
                            <img src={icon_adress} alt="time" />
                            <CardTitle>Velyka Vasylkivska 100</CardTitle>
                            <CardDescr>Get Directions</CardDescr>
                        </Card>
                        <Card>
                            <img src={icon_call} alt="time" />
                            <CardTitle>+38 (063)833 24 15</CardTitle>
                            <CardDescr>Call Online</CardDescr>
                        </Card>
                    </CardCont>
                </FooterMainInfo>
                <FooterLogo>
                    <Logo>
                        <a href="/">
                            <img src={logo} alt="logo" />
                            <img src={HEALTHYSWITCHER} alt="HEALTHYSWITCHER" />
                        </a>
                    </Logo> 
                    <Designed>© Designed by Yellow Snow. All Rights Reserved.</Designed>
                </FooterLogo>
        </MainFooter>
    )
}
  

export default Footer;

const MainFooter = styled.div`
    background: #252525;
    display: flex;
    min-height:275px;
    flex-direction: column;
    justify-content: space-around;
    width:100%; 
    align-items: center;
`;

const FooterMainInfo = styled.div`
    min-height:155px;
    border-bottom: 2px solid #303030;
    width:100%;
    display: flex;
    justify-content: center;

    .centrcards {
        margin: 0px;
        justify-content: space-between;

        width: 1140px;
        display: flex;
    
        @media (max-width: 1162px) {
            width: 960px;
        }  

        @media (max-width: 984px) {
            width: 720px;
        }

        @media (max-width: 767px) {
            width: 540px;
        }

        @media (max-width: 550px) {
            width: 440px;
        }
    }

    @media (max-width: 600px) {
        margin-top:10px;
    }

    @media (max-width: 200px) {
        padding-bottom: 100px;
    }
`;

const FooterLogo = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    div {
        margin-left:0px;
        display: flex;
        justify-content: center
    }
`;

const Designed = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 40px;

    display: flex;
    color: #737373;
`;