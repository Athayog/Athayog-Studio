import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            >
                <source
                    src="https://s3-figma-videos-production-sig.figma.com/video/1009910594128939157/TEAM/7dc2/1ea1/-d22e-4113-9dfa-a38590cb61ad?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o83NckhDs6ie9vZRhDG~yBhN9QnhA53vuvtEaOeLjFgQnU5Fo4LJ~GBikHdQooOjsF89gaBBsMlwCQiV8GwmX6g7Xownm~w~sNiqXbGG-V-l9mLxF18KhEAkL-6yHakylnpBR5jcnXFSIBcN8Bah4dX~6rw9gbgH03-lBcF-0bzLsZQNfqv4Qlpk60jCuztufUt3uwUj2k8oDkYh7sLNrhr0o7l5HGhp8~rjrog2Pltz5TEfFoSHNq9Yyhais863e2fME6m1-aU3G0A73xrg943XKOMg1YCRlOazBqB6Yp8zfHEDfSaeoqfNBu-1l~KI0iiPVHiLWQFeA3gzxenAEg__"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                        'linear-gradient(180deg, #101010 1.49%, rgba(33, 10, 10, 0) 69.5%, rgba(107, 138, 76, 0.8) 100%)',
                    pointerEvents: 'none', // Ensures the gradient does not interfere with any interactions
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    zIndex: 1,
                    color: 'white',
                    maxWidth: '800px',
                    margin: '0 auto',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '48px',
                        fontWeight: '700',
                        lineHeight: '56px',
                        textAlign: 'center',
                    }}
                >
                    Experience yoga like never before Ancient yoga meets modern
                    values
                </Typography>
                <Typography
                    sx={{
                        fontSize: '28px',
                        fontWeight: '400',
                        lineHeight: '56px',
                        textAlign: 'center',
                        marginTop: '17px',
                    }}
                >
                    Awaken your mind, body and spirit with our diverse classes
                </Typography>
                <Button
                    sx={{
                        marginTop: '60px',
                        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.44)',
                        padding: '17.467px 23.289px',
                        borderRadius: '46.578px',
                        height: '56px',
                        width: ' 288.064px',
                        fontSize: '20px',
                    }}
                    variant="contained"
                >
                    Start Your Yoga Journey
                </Button>
            </Box>
        </Box>
    );
};

export default Hero;
