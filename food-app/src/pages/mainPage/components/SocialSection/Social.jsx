import React, { Component } from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { MainTitle } from '../AboutSection/About';
import { Title } from '../AboutSection/About';
import { BackgroundTitle } from '../AboutSection/About';

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