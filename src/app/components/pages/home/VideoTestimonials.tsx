import { Box, Typography } from '@mui/material';
import React from 'react';
import { VideoContainer, VideoParent } from './styles/VideoTestimonials';
import Image from 'next/image';
import CarouselSample from '@/app/images/CarouselSample.png';
import { YouTubeEmbed } from '@next/third-parties/google';

function VideoTestimonials() {
    const RING_WIDTH = '836.202px';
    const RING_HEIGHT = '400.612px';

    // const videosToEmbedd = ['id1zkgBcLlY', 'mh1T62rmcY8', 'cCSNc1z2ptQ'];
    return (
        <Box sx={{ marginTop: '100px', height: '720px' }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" sx={{ color: '#303030', fontWeight: '700' }}>
                    Heartfelt Testimonials:
                </Typography>
                <Typography variant="h2" sx={{ color: '#46892D', fontWeight: '700' }}>
                    Why People Love Athayog Living
                </Typography>
            </Box>

            <VideoContainer>
                <VideoParent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: `calc(${RING_WIDTH} - 90%)`,
                                top: `calc(415px - ${RING_HEIGHT})`,
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                        <Box sx={{ position: 'absolute', left: `calc(${RING_WIDTH} - 105%)`, top: '150px' }}>
                            {' '}
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                        <Box sx={{ position: 'absolute', left: `calc(${RING_WIDTH} - 90%)`, top: '250px' }}>
                            {' '}
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'absolute', left: '250px', top: '-50px' }}>
                        <Box
                            sx={{
                                position: 'relative',
                                borderRadius: '22.2px',
                                height: '520px',
                                width: '321px',
                                border: '4px solid #F8BCC0',
                                overflow: 'hidden',
                            }}
                        >
                            <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <Box sx={{ position: 'absolute', right: '50px', top: '10px' }}>
                            {' '}
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                        <Box sx={{ position: 'absolute', right: '-40px', top: '150px' }}>
                            {' '}
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                        <Box sx={{ position: 'absolute', right: '60px', top: '250px' }}>
                            {' '}
                            <Box
                                sx={{
                                    position: 'relative',
                                    borderRadius: '270px',
                                    height: '118px',
                                    width: '118px',
                                    border: '4px solid #F8BCC0',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
                            </Box>
                        </Box>
                    </Box>
                </VideoParent>
            </VideoContainer>
        </Box>
    );
}

export default VideoTestimonials;
