import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { MainTitle } from '../AboutSection/About';
import { Title } from '../AboutSection/About';
import { BackgroundTitle } from '../AboutSection/About';
import Twitter from './Social(img)/Twitter.svg';
import Instagram from './Social(img)/Instagram.svg';
import Facebook from './Social(img)/Facebook.svg';
import img1 from './Social(img)/img1.svg';
import img2 from './Social(img)/img2.svg';
import img3 from './Social(img)/img3.svg';
import img4 from './Social(img)/img4.svg';
import img5 from './Social(img)/img5.svg';
import img6 from './Social(img)/img6.svg';

import { MainBut } from '../../MainPage';

function Social () {
    return (
        <MainSocial>
            <MainTitle>
                <Title>
                    We in Social
                </Title>
                <BackgroundTitle className='bgtitle'>SOCIAL</BackgroundTitle>
            </MainTitle>
            <SocialCards>
                <SocialCard>
                    <HeaderSocialCard>
                        <Link to="/">
                            <ImgSocial><img src={Twitter} alt="Twitter"/></ImgSocial>
                            <SocialName>Twitter</SocialName>
                        </Link>
                        <MainBut>
                            <Link to = "/">FOLLOW US</Link>
                        </MainBut>
                    </HeaderSocialCard>
                    <MainPartSocialCard>
                        <SocialDate>24 Jun at 16:20 pm</SocialDate>
                        <TextAndAutor>
                            <MainSocialText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur, 
                                consectetur adipiscing elit, consectetur adipiscing, 
                                sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, 
                                consectetur adipiscing,
                            </MainSocialText>
                            <Link to="/">@DennisFerguson</Link>
                        </TextAndAutor>
                    </MainPartSocialCard>
                </SocialCard>
                <SocialCard className='centrCard'>
                    <HeaderSocialCard>
                        <Link to="/">
                            <ImgSocial><img src={Instagram} alt="Twitter"/></ImgSocial>
                            <SocialName>Instagram</SocialName>
                        </Link>
                        <MainBut>
                            <Link to = "/">FOLLOW US</Link>
                        </MainBut>
                    </HeaderSocialCard>
                    <MainPartSocialCard>
                        <TextAndAutor>
                            <img src={img1} alt="img.1" />
                            <img src={img2} alt="img.2" />
                            <img src={img3} alt="img.3" />
                            <img src={img4} alt="img.4" />
                            <img src={img5} alt="img.5" />
                            <img src={img6} alt="img.6" />
                            <img src={img3} alt="img.3" />
                            <img src={img2} alt="img.2" />
                            <img src={img1} alt="img.1" />
                        </TextAndAutor>
                    </MainPartSocialCard>
                </SocialCard>
                <SocialCard>
                    <HeaderSocialCard>
                        <Link to="/">
                            <ImgSocial><img src={Facebook} alt="Twitter"/></ImgSocial>
                            <SocialName>Facebook</SocialName>
                        </Link>
                        <MainBut>
                            <Link to = "/">FOLLOW US</Link>
                        </MainBut>
                    </HeaderSocialCard>
                    <MainPartSocialCard>
                    <SocialDate>17 Oct at 13:28 pm</SocialDate>
                        <TextAndAutor>
                            <MainSocialText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur, consectetur adipisci
                                consectetur adipiscing elit, consectetur adipiscing, adipiscing elit, consectetur adipiscin
                                sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,  Lorem ipsum dolor sit amet, 
                                consectetur adipiscing,
                            </MainSocialText>
                            <Link to="/">@MarkRergson</Link>
                        </TextAndAutor>
                    </MainPartSocialCard>
                </SocialCard>
            </SocialCards>
        </MainSocial>
    )
}

export default Social;

const MainSocial = styled.div`
    min-height: 100vh;
`;

const SocialCards = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;

    .centrCard {
        margin-left: 30px;
        margin-right: 30px;
        // width:100%;
    }
`;

const SocialCard = styled.div`
    height: 330px;
    min-width: 350px;

    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
`;

const HeaderSocialCard = styled.div`
    border-bottom: 2px solid rgba(48, 48, 48, 1);
    height: 88px;
    display: flex;
    align-items: center;
    min-width:300px;
    justify-content: space-around;

    a:first-child {
        display: flex;
        align-items: center;
        // width: 150px;
        justify-content: space-between;   
    }

    a:first-child:hover {
        p {
            color: #34C759;
        }

        div:first-child {
            border: 2px solid #34C759;
        }
    }

    a:last-child {
        border: 2px solid;
        padding: 18px 10px;
        font-size: 10px;
        letter-spacing: 0.2em;
        margin-top:0px;
        background: none;
        border-color: #303030;
        color: #303030;
        display: flex;
        justify-content: center;
        transition: 0.4s;
        width: 100px;
        font-family: "HelveticaNeueBold";
    }

    a:last-child:hover {
        background: #34C759;
        color: #252525;
        border: 2px solid;
        font-family: "HelveticaNeueBold";
    }
`;

const SocialIkonAndName = styled.div`
`;

const ImgSocial = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid #303030;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin-right: 20px;

    img {
        width:28px;
        height:28px;
    }
`;

const SocialName = styled.p`
    // width: 106px;
    // height: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #BFBFBF;
`;

const MainPartSocialCard = styled.div`
    max-width: 300px;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    margin-top: 20px;
    margin-left:30px;
    
    a {
        color: #34C759;
    }
`;

const SocialDate = styled.p`
    color: #737373;
    margin-bottom: 10px;
`;

const MainSocialText = styled.p`
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 10px;
`;

const TextAndAutor = styled.div`
    overflow: auto;
    max-height:160px;

    ::-webkit-scrollbar {
        width: 4px;
        position:absolute;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: #303030;
        position:absolute;
    }

    img {
        width:120px;
        height:120px;
    }
`;