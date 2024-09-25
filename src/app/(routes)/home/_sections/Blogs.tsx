import 'swiper/css';
import React from 'react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import PinkBg from '@/app/images/PinkBg.jpeg';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';
import CarouselSample from '@/app/images/CarouselSample.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SectionContent, SectionPadding } from '../../../components/ui/pages/home/styles/Layout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Card, IconButton, Typography } from '@mui/material';

// Styled components
const StyledBox = styled(Box)(({}) => ({
    position: 'relative',
    overflow: 'visible', // Ensures no clipping of blur effect
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${PinkBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.4',
        filter: 'blur(30px)', // Adds the blur effect
        zIndex: -1, // Ensures the background is behind the content
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    position: 'relative',
    padding: '16px',
    width: '360px',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(232, 255, 221, 0.50) 100%)',
    boxShadow: 'none',
    color: 'black',
    [theme.breakpoints.down('md')]: {
        width: '300px',
    },
}));

const CardImageContainer = styled(Box)(({}) => ({
    position: 'relative',
    borderRadius: '8.13px',
    height: '205.057px',
    width: '100%',
    gap: '20px',
    overflow: 'hidden',
}));

const CardContent = styled(Box)(({}) => ({
    display: 'flex',
    padding: '20px 0px',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));

const SwiperStyled = styled(Swiper)(({ theme }) => ({
    height: 'auto',
    marginTop: '42px',
    '.swiper-slide': {
        display: 'flex',
        justifyContent: 'center',
    },
    [theme.breakpoints.down('md')]: {
        height: '450px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    maxWidth: '900px',
    fontWeight: 700,
    fontSize: '48px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        textAlign: 'center',
        width: '100%',
    },
}));

// Custom navigation buttons
const NavButtonLeft = styled(IconButton)(({}) => ({
    position: 'absolute',
    top: '50%',
    left: '0x',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
}));

const NavButtonRight = styled(IconButton)(({}) => ({
    position: 'absolute',
    top: '50%',
    right: '0px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
}));

interface Blog {
    title: string;
    image: StaticImageData;
    type: string;
    content: string;
    readTime: string;
}

const blogData: Blog[] = [
    {
        title: 'Exploring Asanas',
        image: CarouselSample,
        type: 'Asanas',
        content: 'Dive into the world of asanas and discover the transformative power of yoga poses...',
        readTime: '5 min read',
    },
    {
        title: 'The Path to Mindfulness',
        image: CarouselSample,
        type: 'Mindfulness',
        content: 'Learn about the essential practices for cultivating mindfulness and achieving inner peace...',
        readTime: '7 min read',
    },
    {
        title: 'Yoga for Flexibility',
        image: CarouselSample,
        type: 'Flexibility',
        content: 'Discover how yoga can improve your flexibility and overall well-being through targeted exercises...',
        readTime: '6 min read',
    },
    {
        title: 'Breathing Techniques',
        image: CarouselSample,
        type: 'Breathing',
        content: 'Explore various breathing techniques that can enhance your yoga practice and daily life...',
        readTime: '4 min read',
    },
];

function Blogs() {
    return (
        <StyledBox>
            <SectionPadding>
                <SectionContent>
                    <Title variant="h2">Read About Yoga: Asanas, Practices and a Path to Mindful Living</Title>
                    <Box position="relative">
                        <SwiperStyled
                            modules={[Navigation]}
                            slidesPerView={3}
                            spaceBetween={0}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 },
                                1220: { slidesPerView: 3 },
                            }}
                        >
                            {blogData.map((blog, index) => (
                                <SwiperSlide key={index}>
                                    <StyledCard>
                                        <CardImageContainer>
                                            <Image src={blog.image} fill style={{ objectFit: 'cover' }} alt={blog.title} />
                                        </CardImageContainer>

                                        <CardContent>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>{blog.type}</Typography>
                                                <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>{blog.readTime}</Typography>
                                            </Box>
                                            <Typography sx={{ fontSize: '24px', fontWeight: '700', marginTop: '12px' }}>{blog.title}</Typography>
                                            <Typography variant="body1">{blog.content}</Typography>
                                            <Button sx={{ width: '150px', marginTop: '20px' }} variant="contained">
                                                Read More
                                            </Button>
                                        </CardContent>
                                    </StyledCard>
                                </SwiperSlide>
                            ))}
                            <NavButtonLeft className="custom-prev">
                                <ArrowBackIosIcon />
                            </NavButtonLeft>
                            <NavButtonRight className="custom-next">
                                <ArrowForwardIosIcon />
                            </NavButtonRight>
                        </SwiperStyled>
                    </Box>
                </SectionContent>
            </SectionPadding>
        </StyledBox>
    );
}

export default Blogs;
