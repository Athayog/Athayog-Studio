import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import CarouselSample from '@/app/images/Sample (1).png';
import CarouselSample2 from '@/app/images/Sample (2).png';
import CarouselSample3 from '@/app/images/Sample (3).png';
import CarouselSample4 from '@/app/images/Sample (4).png';
import ResponsiveImage from '@/app/components/ui/common/ResposiveImage';
import HorizontalSwiper from '@/app/components/ui/common/Swiper/HorizontalSwiper';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '48px',
    color: '#202020',
    fontWeight: 700,
    marginBottom: '80px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        marginBottom: '24px',
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '20px',
    backgroundColor: '#007668',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

const albums = [
    {
        name: 'Album 1',
        images: [CarouselSample, CarouselSample2],
    },
    {
        name: 'Album 2',
        images: [CarouselSample3, CarouselSample4],
    },
    {
        name: 'Album 3',
        images: [CarouselSample, CarouselSample2],
    },
    {
        name: 'Album 4',
        images: [CarouselSample3, CarouselSample4],
    },
];

const YogaEvent: React.FC = () => {
    const [currentAlbum, setCurrentAlbum] = useState(0);

    return (
        <SectionPadding>
            <SectionContent>
                <Title>Yoga Event Highlights</Title>
                <HorizontalSwiper
                    slidesPerView={1}
                    enablePagination={false}
                    swiperWidth={{ xs: '80vw', md: '80vw', lg: '1000px' }}
                    enableNavigation={true}
                    disableNavOnMobile={true}
                >
                    {albums[currentAlbum].images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    borderRadius: '10px',
                                    border: ' 2.2px solid #94CE66',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    height: {
                                        xs: '200px',
                                        md: '400px',
                                        lg: '500px',
                                    },
                                    width: '100%',
                                }}
                            >
                                <ResponsiveImage src={image} alt={`Slide ${index}`} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </HorizontalSwiper>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: '40px',
                        gap: '20px',
                        justifyContent: 'center',
                    }}
                >
                    {albums.map((album, index) => {
                        return (
                            <Box key={index}>
                                <Box
                                    onClick={() => setCurrentAlbum(index)}
                                    sx={{
                                        borderRadius: '10px',
                                        border: ' 2.2px solid #94CE66',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        width: {
                                            xs: '115px',
                                            md: '115px',
                                            lg: '190px',
                                        },
                                        height: {
                                            xs: '76px',
                                            md: '76px',
                                            lg: '130px',
                                        },
                                    }}
                                >
                                    <ResponsiveImage src={album.images[0]} alt={`Slide ${index}`} />
                                </Box>
                                <Typography
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '16px',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    {album.name}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '20px', md: '50px' } }}>
                    <StyledButton>Explore More</StyledButton>
                </Box>
            </SectionContent>
        </SectionPadding>
    );
};

export default YogaEvent;
