import { Box, Typography } from '@mui/material';
import Banner from '@/app/components/ui/common/Banner';
import PersonalSessionImage from '@/app/images/personal-session/hero.png';
import PersonalSessionMobileImage from '@/app/images/personal-session/mobile.jpeg';

const Hero = () => {
    return (
        <Banner
            imageSrc={{ xs: PersonalSessionMobileImage, sm: PersonalSessionMobileImage, md: PersonalSessionImage }}
            imageAlt="Personal Session"
            height={{ xs: '700px', sm: '700px', md: '900px' }}
            objectPosition={{ xs: 'bottom', sm: 'bottom', md: 'bottom' }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    height: '100%',
                    padding: { xs: '150px 2px', sm: '200px 10px', md: '0px 140px' },
                }}
            >
                <Typography
                    sx={{
                        color: '#255400',
                        fontSize: { xs: '30px', sm: '40px', md: '54px' },
                        textAlign: { xs: 'center', sm: 'left', md: 'left' },
                        fontWeight: '700',
                        maxWidth: '800px',
                    }}
                >
                    Athayog Personal Sessions: Your Path to Focused Transformation
                </Typography>
            </Box>
        </Banner>
    );
};

export default Hero;
