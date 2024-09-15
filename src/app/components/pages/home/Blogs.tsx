import { Box, Button, Card, Typography } from '@mui/material';
import CarouselSample from '@/app/images/CarouselSample.png';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import PinkBg from '@/app/images/PinkBg.svg';
import { SectionContent } from './styles/Layout';

interface Blog {
    title: string;
    image: string;
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
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `url(${PinkBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundClip: 'content-box',
            }}
        >
            <SectionContent>
                <Typography sx={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} variant="h2">
                    Read About Yoga: Asanas, Practices and a Path to Mindful Living
                </Typography>

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={3}
                    style={{ height: '500px', marginTop: '42px' }}
                >
                    {blogData.map((blog, index) => (
                        <SwiperSlide key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    padding: '16px',
                                    width: '360px',
                                    height: '500px',

                                    background:
                                        'linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(232, 255, 221, 0.50) 100%)',
                                    boxShadow: 'none',
                                    color: 'black',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        borderRadius: '8.13px',
                                        height: '205.057px',
                                        width: ' 100%',
                                        gap: '20px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Image src={blog.image} fill style={{ objectFit: 'cover' }} alt={blog.title} />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '20px 0px',

                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                    >
                                        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
                                            {blog.type}
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>
                                            {blog.readTime}
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '24px', fontWeight: '700', marginTop: '12px' }}>
                                        {blog.type}
                                    </Typography>
                                    <Typography variant="body2">{blog.content}</Typography>
                                    <Button sx={{ width: '150px', marginTop: '20px' }} variant="contained">
                                        Read More
                                    </Button>
                                </Box>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SectionContent>
        </Box>
    );
}

export default Blogs;
