'use client';
import {
    ActionButton,
    ContentBox,
    Gradient,
    HeadingTitle,
    HeroContainer,
    SubTitle,
    videoStyles,
} from '@/components/pages/home/styles/Hero';
import React from 'react';

const Hero = () => {
    return (
        <HeroContainer sx={{}}>
            <video autoPlay loop muted playsInline style={videoStyles as React.CSSProperties}>
                <source
                    src="https://s3-figma-videos-production-sig.figma.com/video/1009910594128939157/TEAM/7dc2/1ea1/-d22e-4113-9dfa-a38590cb61ad?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o83NckhDs6ie9vZRhDG~yBhN9QnhA53vuvtEaOeLjFgQnU5Fo4LJ~GBikHdQooOjsF89gaBBsMlwCQiV8GwmX6g7Xownm~w~sNiqXbGG-V-l9mLxF18KhEAkL-6yHakylnpBR5jcnXFSIBcN8Bah4dX~6rw9gbgH03-lBcF-0bzLsZQNfqv4Qlpk60jCuztufUt3uwUj2k8oDkYh7sLNrhr0o7l5HGhp8~rjrog2Pltz5TEfFoSHNq9Yyhais863e2fME6m1-aU3G0A73xrg943XKOMg1YCRlOazBqB6Yp8zfHEDfSaeoqfNBu-1l~KI0iiPVHiLWQFeA3gzxenAEg__"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <Gradient />

            <ContentBox>
                <HeadingTitle variant="h1">
                    Experience yoga like never before Ancient yoga meets modern values
                </HeadingTitle>
                <SubTitle>Awaken your mind, body and spirit with our diverse classes</SubTitle>
                <ActionButton variant="contained">Start Your Yoga Journey</ActionButton>
            </ContentBox>
        </HeroContainer>
    );
};

export default Hero;
