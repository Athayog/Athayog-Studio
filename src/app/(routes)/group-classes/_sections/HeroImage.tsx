import { Box } from '@mui/material';
import Banner from '@/app/components/ui/common/Banner';
import PersonalSessionImage from '@/app/images/group-classes/hero.png';

const Hero = () => {
    return (
        <Banner
            imageSrc={{ xs: PersonalSessionImage, sm: PersonalSessionImage, md: PersonalSessionImage }}
            imageAlt="Personal Session"
            height={{ xs: '750px', sm: '750px', md: '750px' }}
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
            ></Box>
        </Banner>
    );
};

export default Hero;
