import { Box, Typography } from '@mui/material';
import { YouTubeEmbed } from '@next/third-parties/google';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import RegisterButton from '../../ui/common/elements/button/RegisterButton';
import { AthayogSwiper } from './styles/WhyAthayog';

const YogaArambha = () => {
    const swiperRef = useRef<SwiperRef>(null);
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Box sx={{ maxWidth: '550px', position: 'relative' }}>
                <Typography sx={{ fontSize: '48px', color: '#202020', fontWeight: '700' }}>Yoga Arambha</Typography>
                <Typography
                    sx={{ fontSize: '32px', color: '#46892D', fontWeight: '700', marginTop: '22px' }}
                ></Typography>
                <Typography sx={{ fontSize: '24px', color: '#000', marginTop: '34px' }}>
                    AthaYog Living and Indiranagar Club present "Yoga Arambha" on International Day of Yoga, celebrating
                    women's strength and resilience. Featuring a special Yoga session and talent showcase, this event
                    marks the start of a wellness journey. <br /> Chief Guest BNS Reddy IPS (Retd.), President of
                    Indiranagar Club, will honor us with his presence.
                </Typography>
                <Box sx={{ display: 'flex', gap: '20px', marginTop: '27px' }}>
                    <RegisterButton sx={{ width: 'max-content' }}>Dive Into Yoga Arambaha</RegisterButton>
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
                            <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
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
                            <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
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
                            <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
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
                            <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </AthayogSwiper>
        </Box>
    );
};

export default YogaArambha;
