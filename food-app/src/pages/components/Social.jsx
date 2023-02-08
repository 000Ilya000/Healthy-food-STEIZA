import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from './Button';
import SOCIAL from '../../assets/img/SOCIAL.svg';


function Social () {
    return (
        <>
            <MainSocial>
                <SocialTitle>We in Social</SocialTitle>
                <SocialCards>
                    <SocialCard>
                        <HeaderSocialCard>
                            <SocialIkonAndName>
                                <ImgSocial></ImgSocial>
                                <SocialName></SocialName>
                                {/* <Button></Button> */}
                            </SocialIkonAndName>
                        </HeaderSocialCard>
                        <MainPartSocialCard>
                            <SocialDate></SocialDate>
                            <MainSocialText></MainSocialText>
                            <SocialAutor></SocialAutor>
                        </MainPartSocialCard>
                    </SocialCard>
                    <SocialCard>
                        <HeaderSocialCard>
                            <SocialIkonAndName>
                                <ImgSocial></ImgSocial>
                                <SocialName></SocialName>
                                {/* <Button></Button> */}
                            </SocialIkonAndName>
                        </HeaderSocialCard>
                        <MainPartSocialCard>
                            <SocialDate></SocialDate>
                            <MainSocialText></MainSocialText>
                            <SocialAutor></SocialAutor>
                        </MainPartSocialCard>
                    </SocialCard>
                    <SocialCard>
                        <HeaderSocialCard>
                            <SocialIkonAndName>
                                <ImgSocial></ImgSocial>
                                <SocialName></SocialName>
                                {/* <Button></Button> */}
                            </SocialIkonAndName>
                        </HeaderSocialCard>
                        <MainPartSocialCard>
                            <SocialDate></SocialDate>
                            <MainSocialText></MainSocialText>
                            <SocialAutor></SocialAutor>
                        </MainPartSocialCard>
                    </SocialCard>
                </SocialCards>
            </MainSocial>
        </>
    )
}

export default Social;

const MainSocial = styled.div`
`;

const SocialTitle = styled.p`
    min-height:150px;
    min-width:400px;
    display: flex;
    background: url('${SOCIAL}') no-repeat center center;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    letter-spacing: 0.2em;
    color: #D9D9D9;
    padding-bottom: 6px;
    margin-bottom: 24px;
    flex-direction: column;

    ::after {
        height: 2px;
        max-width: 100%;
        background: #34C759;
        color: #34C759;
        content: ' ';
        min-width:56px;
    }
`;

const SocialCards = styled.div`
    display: flex;
    justify-content: center;
`;

const SocialCard = styled.div`
    height: 330px;
    min-width: 350px;

    background: #252525;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
`;

const HeaderSocialCard = styled.div`
`;

const SocialIkonAndName = styled.div`
`;

const ImgSocial = styled.div`
`;

const SocialName = styled.div`
`;

const MainPartSocialCard = styled.div`
`;

const SocialDate = styled.p`
`;

const MainSocialText = styled.p`
`;

const SocialAutor = styled.p`
`;