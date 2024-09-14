// Import Swiper React components
import CarouselSample from '@/app/images/CarouselSample.png';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import Swiper's Navigation module
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AthayogSwiper } from './styles/WhyAthayog';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useRef } from 'react';

const WhyAthayog = () => {
    const swiperRef = useRef<typeof AthayogSwiper | null>(null);

    return (
        <Box
            sx={{
                marginTop: '100px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Box sx={{ maxWidth: '550px', position: 'relative' }}>
                <Typography sx={{ fontSize: '48px', color: '#202020', fontWeight: '700' }}>Why Athayog?</Typography>
                <Typography sx={{ fontSize: '32px', color: '#46892D', fontWeight: '700', marginTop: '22px' }}>
                    Experienced and caring teachers
                </Typography>
                <Typography sx={{ fontSize: '24px', color: '#000', marginTop: '34px' }}>
                    The instructors at Athayog are professional, attentive, caring and focus on the individual. They are
                    passionate about yoga and have a deep understanding of the practice.
                </Typography>
                <Box sx={{ display: 'flex', gap: '20px', marginTop: '27px' }}>
                    <IconButton
                        sx={{
                            backgroundColor: '#d7f0cd',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}
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
                        onClick={() => swiperRef.current?.swiper?.slideNext()}
                    >
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            </Box>
            <AthayogSwiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next', // Custom next button
                    prevEl: '.swiper-button-prev', // Custom prev button
                }}
                ref={swiperRef}
                style={{ height: '510px', marginLeft: '0', marginRight: '0px', paddingRight: '70px' }} // Set height and width here
            >
                <SwiperSlide>
                    <Box
                        sx={{
                            position: 'relative', // Required for the `fill` layout
                            borderRadius: '270px',
                            height: '500px',
                            width: '436px',
                            border: '4px solid #F8BCC0',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={CarouselSample}
                            layout="fill" // Ensures the image covers the container
                            objectFit="cover" // Adjusts the image to cover the container
                            alt="Carousel Sample"
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            position: 'relative', // Required for the `fill` layout
                            borderRadius: '270px',
                            height: '500px',
                            width: '436px',
                            border: '4px solid #F8BCC0',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={CarouselSample}
                            layout="fill" // Ensures the image covers the container
                            objectFit="cover" // Adjusts the image to cover the container
                            alt="Carousel Sample"
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            position: 'relative', // Required for the `fill` layout
                            borderRadius: '270px',
                            height: '500px',
                            width: '436px',
                            border: '4px solid #F8BCC0',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={CarouselSample}
                            layout="fill" // Ensures the image covers the container
                            objectFit="cover" // Adjusts the image to cover the container
                            alt="Carousel Sample"
                        />
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box
                        sx={{
                            position: 'relative', // Required for the `fill` layout
                            borderRadius: '270px',
                            height: '500px',
                            width: '436px',
                            border: '4px solid #F8BCC0',
                            overflow: 'hidden',
                        }}
                    >
                        <Image
                            src={CarouselSample}
                            layout="fill" // Ensures the image covers the container
                            objectFit="cover" // Adjusts the image to cover the container
                            alt="Carousel Sample"
                        />
                    </Box>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
            </AthayogSwiper>
        </Box>
    );
};

export default WhyAthayog;
