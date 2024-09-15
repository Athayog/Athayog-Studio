import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css/navigation';
import { AthayogSwiper } from './styles/WhyAthayog';
import { Pagination, Navigation } from 'swiper/modules';
import { Box, IconButton, Typography } from '@mui/material';
import CarouselSample from '@/app/images/CarouselSample.png';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import RegisterButton from '../../ui/common/elements/button/RegisterButton';

const EmbraceWellness = () => {
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <Box>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Embrace Wellness: <br />
                Our Yoga Story
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Box sx={{ maxWidth: '550px', position: 'relative' }}>
                    <Typography sx={{ fontSize: '24px', color: '#000', marginTop: '34px' }}>
                        Embrace Wellness: Our Yoga Story at Athayog Living is devoted to preserving the long-standing
                        legacy of Yog (Yoga) by integrating its true purpose, philosophies, and practices into modern
                        daily life. We aim to illuminate and educate by sharing transformational tools that help you
                        reconnect with your true nature, encouraging change towards higher living. When you register
                        with us, we offer free consultations, suggesting lifestyle changes to help you embrace a
                        complete Yogic lifestyle. Athayog Living empowers you to progress on your journey by entrusting
                        you to practice on your own, embedding ancient Yogic wisdom into your modern day reality.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px', marginTop: '27px' }}>
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
                        className="swiper-why"
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
                                <Image src={CarouselSample} fill style={{ objectFit: 'cover' }} alt="Carousel Sample" />
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
                                <Image src={CarouselSample} fill style={{ objectFit: 'cover' }} alt="Carousel Sample" />
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
                                <Image src={CarouselSample} fill style={{ objectFit: 'cover' }} alt="Carousel Sample" />
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
                                <Image src={CarouselSample} fill style={{ objectFit: 'cover' }} alt="Carousel Sample" />
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </AthayogSwiper>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <RegisterButton>Learn More</RegisterButton>
            </Box>
        </Box>
    );
};

export default EmbraceWellness;
