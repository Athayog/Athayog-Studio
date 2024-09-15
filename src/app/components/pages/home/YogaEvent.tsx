import React, { useState } from 'react';
import { Box, Typography, Card, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import CarouselSample from '@/app/images/Sample (1).png';
import CarouselSample2 from '@/app/images/Sample (2).png';
import CarouselSample3 from '@/app/images/Sample (3).png';
import CarouselSample4 from '@/app/images/Sample (4).png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RegisterButton from '../../ui/common/elements/button/RegisterButton';

// Define albums with their images and titles
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
        <Box sx={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
                Yoga Event Highlights
            </Typography>
            {/* Custom Previous Arrow */}
            <IconButton
                className="swiper-button-prev"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-50px',
                    zIndex: 10,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
            >
                <ArrowBackIosIcon />
            </IconButton>

            {/* Main Swiper to display selected album */}
            <Swiper
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                spaceBetween={30}
                loop={true}
                style={{ height: '500px', maxWidth: '1000px', marginTop: '80px' }}
                modules={[Navigation]}
            >
                {albums[currentAlbum].images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            sx={{
                                position: 'relative',
                                height: '100%',
                                borderRradius: '10.232px',
                                border: ' 2.2px solid #94CE66',
                            }}
                        >
                            <Image
                                src={image}
                                layout="fill"
                                objectFit="cover"
                                alt={`Album ${currentAlbum + 1} Image`}
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Next Arrow */}
            <IconButton
                className="swiper-button-next"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-50px',
                    zIndex: 10,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                    '&:hover': { backgroundColor: '#f0f0f0' },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

            {/* Album thumbnails with names below */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    marginTop: '20px',
                    gap: '10px',
                }}
            >
                {albums.map((album, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box
                            onClick={() => setCurrentAlbum(index)}
                            sx={{
                                border: currentAlbum === index ? '2px solid #1E6F00' : '1px solid gray',
                                position: 'relative',
                                height: '120px',
                                width: '200px',
                                marginBottom: '10px',
                                borderRadius: ' 7.685px',
                            }}
                        >
                            <Image
                                src={album.images[0]}
                                layout="fill"
                                objectFit="cover"
                                alt={`${album.name} Thumbnail`}
                            />
                        </Box>
                        {/* Display album name */}
                        <Typography
                            sx={{ fontSize: '16px', fontWeight: '700', fontStyle: 'italic', textAlign: 'center' }}
                        >
                            {album.name}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <RegisterButton>Explore More </RegisterButton>
        </Box>
    );
};

export default YogaEvent;
