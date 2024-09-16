import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, IconButton, styled, Typography } from '@mui/material';
import CarouselSample from '@/app/images/CarouselSample.png';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { SectionContent, SectionPadding } from '@/app/components/pages/home/styles/Layout';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import theme from '../../ui/theme';
const AthayogSwiper = styled(Box)(() => ({
    '.swiper-yoga': {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
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
            right: '0px',
            textAlign: 'center',
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
        margin: '20px auto 0 auto',
        fontSize: '18px',
        height: '40px',
        width: '200px',
    },
}));

const EmbraceWellness = () => {
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <SectionPadding>
            <SectionContent>
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            textAlign: 'center',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '24px',
                            },
                        }}
                    >
                        Embrace Wellness: <br />
                        Our Yoga Story
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            gap: '50px',
                            marginTop: '50px',
                            [theme.breakpoints.down('lg')]: {
                                flexDirection: 'column-reverse',
                                marginTop: '20px',
                                gap: '20px',
                            },
                        }}
                    >
                        <Box sx={{ maxWidth: '100%', position: 'relative' }}>
                            <Typography
                                sx={{
                                    fontSize: '24px',
                                    color: '#000',
                                    marginTop: '34px',
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '18px',
                                        marginTop: '0px',
                                    },
                                }}
                            >
                                Embrace Wellness: Our Yoga Story at Athayog Living is devoted to preserving the
                                long-standing legacy of Yog (Yoga) by integrating its true purpose, philosophies, and
                                practices into modern daily life. We aim to illuminate and educate by sharing
                                transformational tools that help you reconnect with your true nature, encouraging change
                                towards higher living. When you register with us, we offer free consultations,
                                suggesting lifestyle changes to help you embrace a complete Yogic lifestyle. Athayog
                                Living empowers you to progress on your journey by entrusting you to practice on your
                                own, embedding ancient Yogic wisdom into your modern day reality.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: '20px',
                                    marginTop: '27px',
                                    [theme.breakpoints.down('sm')]: {
                                        display: 'none',
                                    },
                                }}
                            >
                                <IconButton
                                    sx={{
                                        backgroundColor: '#d7f0cd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => swiperRef?.current?.swiper.slideNext()}
                                >
                                    <ArrowBackIos />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        backgroundColor: '#d7f0cd',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    onClick={() => swiperRef?.current?.swiper.slidePrev()}
                                >
                                    <ArrowForwardIos />
                                </IconButton>
                            </Box>
                        </Box>
                        <AthayogSwiper>
                            <Swiper
                                direction={'vertical'}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination, Navigation]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                loop={true}
                                ref={swiperRef}
                                className="swiper-yoga"
                                style={{ height: '510px', marginLeft: '0', marginRight: '0px', paddingRight: '70px' }}
                            >
                                <SwiperSlide>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '270px',
                                            height: '500px',
                                            width: '436px',
                                            border: '4px solid #F8BCC0',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={CarouselSample}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Carousel Sample"
                                        />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '270px',
                                            height: '500px',
                                            width: '436px',
                                            border: '4px solid #F8BCC0',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={CarouselSample}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Carousel Sample"
                                        />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '270px',
                                            height: '500px',
                                            width: '436px',
                                            border: '4px solid #F8BCC0',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={CarouselSample}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Carousel Sample"
                                        />
                                    </Box>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '270px',
                                            height: '500px',
                                            width: '436px',
                                            border: '4px solid #F8BCC0',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src={CarouselSample}
                                            layout="fill"
                                            objectFit="cover"
                                            alt="Carousel Sample"
                                        />
                                    </Box>
                                </SwiperSlide>
                            </Swiper>
                        </AthayogSwiper>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <StyledButton>Learn More</StyledButton>
                </Box>
            </SectionContent>
        </SectionPadding>
    );
};

export default EmbraceWellness;
