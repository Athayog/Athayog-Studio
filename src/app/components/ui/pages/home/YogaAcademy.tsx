import 'swiper/css';
import React, { useState } from 'react';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Skeleton, Typography, styled } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import CarouselSample from '@/app/images/CarouselSample.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';

// Styled Components
const SwiperContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '270px',
    height: '500px',
    width: '436px',
    border: '4px solid #F8BCC0',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        width: '300px',
        height: '356px',
    },
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '50px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '15px',
    },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    maxWidth: '800px',
    display: 'flex',
    gap: '34px',
    flexDirection: 'column',
    alignItems: 'end',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    color: '#1E6F00',
    width: '100%',
    textAlign: 'end',
    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
        textAlign: 'center',
        width: '100%',
    },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    textAlign: 'end',
    maxWidth: '474px',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        textAlign: 'center',
        width: '100%',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    textAlign: 'end',
    maxWidth: '600px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'center',
    },
}));

const AthayogSwiper = styled(Box)(({ theme }) => ({
    '.swiper-yoga': {
        height: '510px',
        marginLeft: '0',
        marginRight: '0px',
        paddingLeft: '45px',
        paddingRight: '70px',
        [theme.breakpoints.down('md')]: {
            height: '366px',
            paddingLeft: '0px',
            paddingRight: '0px',
        },
        '.swiper-pagination-bullet': {
            background: 'transparent',
            width: '16px',
            height: '16px',
            border: '1.546px solid #42740E',
            opacity: '1',
        },
        '.swiper-pagination-bullet-active': {
            height: '85px',
            borderRadius: '51px',
            border: '1.546px solid #42740E',
            background: '#42740E',
        },
        '.swiper-pagination': {
            left: '0px',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
        },
        '.swiper-button-next, .swiper-button-prev': {
            color: '#46892D',
            height: '68px',
            width: '68px',
        },
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '20px',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

const SwiperSkeleton = () => (
    <Box sx={{ borderRadius: '270px', height: '500px', width: '436px' }}>
        <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '270px', width: '436px' }} />
    </Box>
);

const YogaAcademy: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleSwiperInit = (swiper: { update: () => void }) => {
        swiper.update();
        setIsLoading(false); // Hide skeleton loader once Swiper is initialized
    };

    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    {isLoading && <SwiperSkeleton />}
                    <AthayogSwiper>
                        <Swiper
                            direction="vertical"
                            autoplay
                            pagination={{ clickable: true }}
                            modules={[Pagination, Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            onInit={handleSwiperInit}
                            className="swiper-yoga"
                            style={isLoading ? { display: 'none' } : { display: 'flex' }}
                        >
                            {[...Array(4)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <SwiperContainer>
                                        <Image
                                            src={CarouselSample}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            alt="Carousel Sample"
                                        />
                                    </SwiperContainer>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </AthayogSwiper>
                    <ContentBox>
                        <Title variant="h2">Yoga Academy</Title>
                        <Subtitle variant="h3">
                            Teachers Training Course <br /> RYT 200 Certification Course
                        </Subtitle>
                        <Description variant="body1">
                            Transform into a certified Yoga professional with our online International Certificate
                            Program accredited by Yoga Alliance USA. Elevate your career and build your brand as a Yoga
                            Coach.
                        </Description>
                        <StyledButton>Register Now</StyledButton>
                    </ContentBox>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
};

export default YogaAcademy;
