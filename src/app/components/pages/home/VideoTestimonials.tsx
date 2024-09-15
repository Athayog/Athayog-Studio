import { Box, IconButton, styled, Typography } from '@mui/material';
import { YouTubeEmbed } from '@next/third-parties/google';
import Image from 'next/image';
import { useState } from 'react';
import { SectionContent, SectionPadding } from './styles/Layout';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Wrapper = styled(Box)(({}) => ({
    height: 'auto',
}));

const TitleBox = styled(Box)(({}) => ({
    textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
    color: '#303030',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
        fontSize: '29px',
    },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    color: '#46892D',
    fontWeight: '700',
    marginTop: '22px',
    [theme.breakpoints.down('md')]: {
        fontSize: '29px',
        marginTop: '15px',
    },
}));

const VideoContainer = styled(Box)(({ theme }) => ({
    width: '836.202px',
    height: '400.612px',
    margin: '100px auto 0 auto',
    transform: 'rotate(-4.967deg)',
    flexShrink: 0,
    borderRadius: '410px / 200px',
    border: '3.53px solid #A5EFA7',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const VideoParent = styled(Box)(() => ({
    transform: 'rotate(+4.967deg)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
}));

const StyledImage = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '270px',
    height: '118px',
    width: '118px',
    border: '4px solid #F8BCC0',
    cursor: 'pointer',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        height: '90px',
        width: '90px',
    },
}));

const EmbeddYoutube = styled(Box)(({}) => ({
    position: 'relative',
    borderRadius: '22.2px',
    height: '520px',
    width: '321px',
    border: '4px solid #F8BCC0',
    overflow: 'hidden',
}));

const EmbeddYoutubeMobile = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '22.2px',
    height: '520px',
    width: '321px',
    border: '4px solid #F8BCC0',
    overflow: 'hidden',
    display: 'none',
    margin: '50px auto 0 auto',

    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const StyledIconButton = styled(IconButton)(({}) => ({
    backgroundColor: '#d7f0cd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '100px',
    [theme.breakpoints.down('md')]: {
        marginTop: '20px',
    },
}));
const videos = [
    { videoID: 'id1zkgBcLlY', thumbnail: 'https://img.youtube.com/vi/id1zkgBcLlY/maxresdefault.jpg' },
    { videoID: 'mh1T62rmcY8', thumbnail: 'https://img.youtube.com/vi/mh1T62rmcY8/maxresdefault.jpg' },
    { videoID: 'cCSNc1z2ptQ', thumbnail: 'https://img.youtube.com/vi/cCSNc1z2ptQ/maxresdefault.jpg' },
    { videoID: 'cwvhEaSwwCw', thumbnail: 'https://img.youtube.com/vi/cwvhEaSwwCw/maxresdefault.jpg' },
    { videoID: 'id1zkgBcLlY', thumbnail: 'https://img.youtube.com/vi/id1zkgBcLlY/maxresdefault.jpg' },
    { videoID: 'mh1T62rmcY8', thumbnail: 'https://img.youtube.com/vi/mh1T62rmcY8/maxresdefault.jpg' },
    { videoID: 'cCSNc1z2ptQ', thumbnail: 'https://img.youtube.com/vi/cCSNc1z2ptQ/maxresdefault.jpg' },
    { videoID: 'cwvhEaSwwCw', thumbnail: 'https://img.youtube.com/vi/cwvhEaSwwCw/maxresdefault.jpg' },
];
function VideoTestimonials() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(3);

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : videos.length - 1));
    };

    const handleNextClick = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <SectionPadding>
            <SectionContent>
                <Wrapper>
                    <TitleBox>
                        <Title variant="h2">Heartfelt Testimonials:</Title>
                        <Subtitle variant="h2">Why People Love Athayog Living</Subtitle>
                    </TitleBox>

                    <VideoContainer>
                        <VideoParent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: '80px',
                                        top: '0px',
                                    }}
                                >
                                    <StyledImage>
                                        <Image
                                            src={videos[0].thumbnail}
                                            onClick={() => handleThumbnailClick(0)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            alt="Video"
                                        />
                                    </StyledImage>
                                </Box>
                                <Box sx={{ position: 'absolute', left: '-50px', top: '150px' }}>
                                    <StyledImage>
                                        <Image
                                            src={videos[1].thumbnail}
                                            onClick={() => handleThumbnailClick(1)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            alt="Video"
                                        />
                                    </StyledImage>
                                </Box>
                                <Box sx={{ position: 'absolute', left: '100px', top: '300px' }}>
                                    <StyledImage>
                                        <Image
                                            src={videos[2].thumbnail}
                                            onClick={() => handleThumbnailClick(2)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            alt="Video"
                                        />
                                    </StyledImage>
                                </Box>
                            </Box>
                            <Box sx={{ position: 'absolute', left: '280px', top: '-50px' }}>
                                <EmbeddYoutube>
                                    <YouTubeEmbed
                                        style="height: 520px;"
                                        videoid={videos[currentVideoIndex].videoID}
                                        params="controls=0"
                                    />
                                </EmbeddYoutube>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Box sx={{ position: 'absolute', right: '50px', top: '-20px' }}>
                                    <StyledImage>
                                        <Image
                                            src={videos[3].thumbnail}
                                            onClick={() => handleThumbnailClick(3)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            alt="Video"
                                        />
                                    </StyledImage>
                                </Box>
                                <Box sx={{ position: 'absolute', right: '-60px', top: '120px' }}>
                                    <StyledImage>
                                        <Image
                                            src={videos[4].thumbnail}
                                            onClick={() => handleThumbnailClick(4)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                            alt="Video"
                                        />
                                    </StyledImage>
                                </Box>
                                <Box sx={{ position: 'absolute', right: '60px', top: '250px' }}>
                                    <StyledImage>
                                        <Image
                                            alt="Video"
                                            src={videos[5].thumbnail}
                                            onClick={() => handleThumbnailClick(5)}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </StyledImage>
                                </Box>
                            </Box>
                        </VideoParent>
                    </VideoContainer>

                    <EmbeddYoutubeMobile>
                        <YouTubeEmbed
                            style="height: 520px;"
                            videoid={videos[currentVideoIndex].videoID}
                            params="controls=0"
                        />
                    </EmbeddYoutubeMobile>

                    <ButtonGroup>
                        <StyledIconButton onClick={handlePrevClick}>
                            <ArrowBackIos />
                        </StyledIconButton>
                        <StyledIconButton onClick={handleNextClick}>
                            <ArrowForwardIos />
                        </StyledIconButton>
                    </ButtonGroup>
                </Wrapper>
            </SectionContent>
        </SectionPadding>
    );
}

export default VideoTestimonials;
