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
import { SectionContent, SectionPadding } from '@/app/components/pages/home/styles/Layout';
import RegisterButton from '../../ui/common/elements/button/RegisterButton';
import { styled } from '@mui/material/styles';

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

// Styled components
const Wrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
}));

const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        textAlign: 'center',
        width: '100%',
    },
}));

const SwiperContainer = styled(Swiper)(({ theme }) => ({
    height: '500px',
    maxWidth: '1000px',
    marginTop: '80px',
    [theme.breakpoints.down('md')]: {
        height: '200px',
    },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    padding: '30px',
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    '&:hover': {
        backgroundColor: '#f0f0f0',
    },
}));

const AlbumThumbnailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    flexWrap: 'wrap',
    gap: '10px',
}));

const ThumbnailBox = styled(Box)(({ theme, isSelected }) => ({
    border: isSelected ? '2px solid #1E6F00' : '1px solid gray',
    position: 'relative',
    height: '120px',
    width: '200px',
    marginBottom: '10px',
    borderRadius: '7.685px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
        height: '74px',
        width: '114px',
    },
}));

const AlbumName = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    borderRadius: '10.232px',
    border: '2.2px solid #94CE66',
    [theme.breakpoints.down('md')]: {
        height: '182px',
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    margin: '20px  auto 0 auto',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: '20px  auto 0 auto',
        fontSize: '18px',
        height: '40px',
        width: '173px',
    },
}));

const YogaEvent: React.FC = () => {
    const [currentAlbum, setCurrentAlbum] = useState(0);

    return (
        <SectionPadding>
            <SectionContent>
                <Wrapper>
                    <Title variant="h2">Yoga Event Highlights</Title>

                    {/* Custom Previous Arrow */}
                    <CustomIconButton className="swiper-button-prev" sx={{ left: '-100px' }}>
                        <ArrowBackIosIcon />
                    </CustomIconButton>

                    {/* Main Swiper to display selected album */}
                    <SwiperContainer
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        spaceBetween={30}
                        loop={true}
                        modules={[Navigation]}
                    >
                        {albums[currentAlbum].images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <StyledCard>
                                    <Image
                                        src={image}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        alt={`Album ${currentAlbum + 1} Image`}
                                    />
                                </StyledCard>
                            </SwiperSlide>
                        ))}
                    </SwiperContainer>

                    {/* Custom Next Arrow */}
                    <CustomIconButton className="swiper-button-next" sx={{ right: '-100px' }}>
                        <ArrowForwardIosIcon />
                    </CustomIconButton>

                    {/* Album thumbnails with names below */}
                    <AlbumThumbnailContainer>
                        {albums.map((album, index) => (
                            <Box key={index} display="flex" flexDirection="column" alignItems="center">
                                <ThumbnailBox
                                    onClick={() => setCurrentAlbum(index)}
                                    isSelected={currentAlbum === index}
                                >
                                    <Image
                                        src={album.images[0]}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        alt={`${album.name} Thumbnail`}
                                    />
                                </ThumbnailBox>
                                <AlbumName>{album.name}</AlbumName>
                            </Box>
                        ))}
                    </AlbumThumbnailContainer>

                    <StyledButton>Explore More</StyledButton>
                </Wrapper>
            </SectionContent>
        </SectionPadding>
    );
};

export default YogaEvent;
