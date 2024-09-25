'use client';
import { ActionButton, ContentBox, Gradient, HeadingTitle, HeroContainer, SubTitle, videoStyles } from '@/app/components/ui/pages/home/styles/Hero';
import React from 'react';

const Hero = () => {
    return (
        <HeroContainer>
            <video autoPlay loop muted playsInline style={videoStyles as React.CSSProperties}>
                <source src="https://firebasestorage.googleapis.com/v0/b/development-v2-53228.appspot.com/o/Source.mp4?alt=media&token=21146d35-db54-4c9f-abf5-911484322bc8" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Gradient />

            <ContentBox>
                <HeadingTitle variant="h1">Experience yoga like never before Ancient yoga meets modern values</HeadingTitle>
                <SubTitle>Awaken your mind, body and spirit with our diverse classes</SubTitle>
                <ActionButton variant="contained">Start Your Yoga Journey</ActionButton>
            </ContentBox>
        </HeroContainer>
    );
};

export default Hero;
