import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import CarouselSample from '@/app/images/CarouselSample.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AthayogSwiper } from './styles/YogaAcademy';

const YogaAcademy: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box>
                <AthayogSwiper>
                    <Swiper
                        direction={'vertical'}
                        autoplay
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop
                        className="swiper-yoga"
                        style={{ height: '510px', marginLeft: '0', marginRight: '0px', paddingLeft: '45px' }}
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
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
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
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
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
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
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
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </AthayogSwiper>
            </Box>
            <Box sx={{ maxWidth: '800px', display: 'flex', gap: '34px', flexDirection: 'column', alignItems: 'end' }}>
                <Typography variant="h2" sx={{ color: '#1E6F00' }}>
                    Yoga Academy
                </Typography>
                <Typography variant="h3" sx={{ textAlign: 'end', maxWidth: '474px' }}>
                    Teachers Training Course <br /> RYT 200 Certification Course
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'end', maxWidth: '600px' }}>
                    Transform into a certified Yoga professional with our online International Certificate Program
                    accredited by Yoga Alliance USA. Elevate your career and build your brand as a Yoga Coach.
                </Typography>
                <RegisterButton>Register Now</RegisterButton>
            </Box>
        </Box>
    );
};

export default YogaAcademy;
