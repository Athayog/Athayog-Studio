import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, IconButton, Skeleton, Typography, styled } from '@mui/material';
import CarouselSample from '@/app/images/CarouselSample.png';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { SectionPadding, SectionContent } from '../../../components/ui/pages/home/styles/Layout';

// Styled components using MUI's styled
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '50px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '15px',
    },
}));

const TextBox = styled(Box)(({}) => ({
    maxWidth: '550px',
    position: 'relative',
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '48px',
    color: '#202020',
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
        fontSize: '33px',
    },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    color: '#46892D',
    fontWeight: 700,
    marginTop: '22px',
    [theme.breakpoints.down('md')]: {
        fontSize: '21px',
        marginTop: '15px',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: '24px',
    color: '#000',
    marginTop: '34px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        marginTop: '24px',
    },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    marginTop: '27px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const ButtonGroupBottom = styled(Box)(({ theme }) => ({
    gap: '20px',
    marginTop: '15px',
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'flex',
    },
}));

const StyledIconButton = styled(IconButton)(({}) => ({
    backgroundColor: '#d7f0cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const SwiperImageBox = styled(Box)(({ theme }) => ({
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

const AthayogSwiper = styled(Box)(({ theme }) => ({
    '.swiper-why': {
        height: '510px',
        width: '100%',
        marginLeft: '0',
        marginRight: '0px',
        paddingRight: '70px',
        '.swiper-vertical': {
            width: '100%',
            flexDirection: 'column',
        },
        [theme.breakpoints.down('md')]: {
            height: '366px',
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
            bottom: '10px',
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

const SwiperSkeleton = () => (
    <Box sx={{ borderRadius: '270px', height: '500px', width: '436px' }}>
        <Skeleton variant="rectangular" width="100%" height="100%" sx={{ borderRadius: '270px', width: '436px' }} />
    </Box>
);

const WhyAthayog = () => {
    const swiperRef = useRef<SwiperRef>(null);

    const [isLoading, setIsLoading] = useState(true);

    const handleSwiperInit = (swiper: { update: () => void }) => {
        swiper.update();
        setIsLoading(false); // Hide skeleton loader once Swiper is initialized
    };

    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    <TextBox>
                        <Title>Why Athayog?</Title>
                        <Subtitle>Experienced and caring teachers</Subtitle>
                        <Description>
                            The instructors at Athayog are professional, attentive, caring and focus on the individual.
                            They are passionate about yoga and have a deep understanding of the practice.
                        </Description>
                        <ButtonGroup>
                            <StyledIconButton onClick={() => swiperRef?.current?.swiper.slidePrev()}>
                                <ArrowBackIos />
                            </StyledIconButton>
                            <StyledIconButton onClick={() => swiperRef?.current?.swiper.slideNext()}>
                                <ArrowForwardIos />
                            </StyledIconButton>
                        </ButtonGroup>
                    </TextBox>
                    {isLoading && <SwiperSkeleton />}
                    <AthayogSwiper>
                        <Swiper
                            direction={'vertical'}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            autoplay={true}
                            onInit={handleSwiperInit}
                            ref={swiperRef}
                            className="swiper-why"
                            style={isLoading ? { display: 'none' } : { display: 'flex' }}
                        >
                            {Array(4)
                                .fill(null)
                                .map((_, index) => (
                                    <SwiperSlide key={index}>
                                        <SwiperImageBox>
                                            <Image
                                                src={CarouselSample}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ objectFit: 'cover' }}
                                                alt="Carousel Sample"
                                            />
                                        </SwiperImageBox>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </AthayogSwiper>
                    <ButtonGroupBottom>
                        <StyledIconButton onClick={() => swiperRef?.current?.swiper.slidePrev()}>
                            <ArrowBackIos />
                        </StyledIconButton>
                        <StyledIconButton onClick={() => swiperRef?.current?.swiper.slideNext()}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </ButtonGroupBottom>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
};

export default WhyAthayog;
