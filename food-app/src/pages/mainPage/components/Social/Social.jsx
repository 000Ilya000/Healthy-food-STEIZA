import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MainTitle, BackgroundTitle } from '../About/About';
import { MainBut } from '../../MainPage';
import Twitter from './images/Twitter.svg';
import Instagram from './images/Instagram.svg';
import Facebook from './images/Facebook.svg';
import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import img3 from './images/img3.svg';
import img4 from './images/img4.svg';
import img5 from './images/img5.svg';
import img6 from './images/img6.svg';
import GrayArrow from './images/GrayArrow.svg';

function Social () {
    return (
        <MainSocial id='social'>
            <SocialContent>
                <MainTitle className='bgtitle'>
                    <BackgroundTitle>SOCIAL</BackgroundTitle>
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
                    <SocialCard className='centerCard'>
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
                                <SocialImgBlock>
                                    <ImgHover className='img1'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img2'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img3'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                </SocialImgBlock>

                                <SocialImgBlock>
                                    <ImgHover className='img4'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img5'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img6'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                </SocialImgBlock>

                                <SocialImgBlock>
                                    <ImgHover className='img7'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img8'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>
                                    <ImgHover className='img9'>
                                        <Link to="/">
                                            <img src={GrayArrow} alt="arrow1" />
                                        </Link>
                                    </ImgHover>    
                                </SocialImgBlock>
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
            </SocialContent>
        </MainSocial>
    )
}

export default Social;

const MainSocial = styled.div`
    min-height: 100vh;
    margin-top:90px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom:60px;
    width:100%;
    align-items: center;

    .bgtitle {
        p:after {
            content: 'We in Social';
            min-width: max-content;
        }
    }
`;

const SocialContent = styled.div`
    width: 1140px;
    display: flex;
    flex-direction: column;

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
`;

const SocialCards = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    width:100%;
    .centerCard {
        margin-left: 30px;
        margin-right: 30px;
    }

    .centerCard div:last-child {
        margin: 0px;

        overflow: overlay;
        max-height:240px;
        max-width: none;
        
        ::-webkit-scrollbar {
            width: 4px;
            position:absolute;
        }
    
        ::-webkit-scrollbar-thumb {
            border-radius: 100px;
            background-color: rgba(255, 255, 255, 0.5);
            position:absolute;
        }
    }

    @media (max-width: 1162px) {
        flex-wrap: wrap;
        align-items: center;
        div {
            max-width: 350px;
        }

        .centerCard {
            margin-right:0px;
            margin-top:30px;
            margin-bottom:30px;
        }
    }

    @media (max-width: 984px) {
        flex-direction: column;
        .centerCard {
            margin-right:0px;
            margin-left:0px;
            margin-top:30px;
            margin-bottom:30px;
        }
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
        color: #737373;
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

const ImgHover = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:120px;

    a {
        width:40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 60px;
        transition: 0.4s;
        background: #34C759;
        opacity:0%;
    }

    :hover {
        a {
            opacity:100%;
        }
    }
`;

const SocialName = styled.p`
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

const SocialImgBlock = styled.div`
    display: flex;

    .img1 {
        background: url('${img1}') no-repeat;
    }
    .img2 {
        background: url('${img2}') no-repeat;
    }
    .img3 {
        background: url('${img3}') no-repeat;
    }
    .img4 {
        background: url('${img4}') no-repeat;
    }
    .img5 {
        background: url('${img5}') no-repeat;
    }
    .img6 {
        background: url('${img6}') no-repeat;
    }
    .img7 {
        background: url('${img1}') no-repeat;
        border-bottom-left-radius: 6px;
    }
    .img8 {
        background: url('${img2}') no-repeat;
    }
    .img9 {
        background: url('${img3}') no-repeat;
        border-bottom-right-radius: 6px;
    }
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
`;