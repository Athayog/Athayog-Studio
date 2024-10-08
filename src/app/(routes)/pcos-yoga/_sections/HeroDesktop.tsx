import Image from 'next/image';
import { Box } from '@mui/material';
import PCOSHeroImage from '@/app/images/pcos-page/hero.png';
import HeroVector from '@/app/images/pcos-page/HeroVector.svg';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';
import { Subtitle, Title } from '@/app/components/ui/pages/pcos-yoga/styles/Index';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';

const HeroDesktop = () => {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '50px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '80px',
                }}
            >
                <Box sx={{ flexBasis: '50%', maxWidth: '600px' }}>
                    <Title>
                        Join Our PCOS <br /> Yoga Class
                    </Title>
                    <Subtitle>
                        Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting those with ovaries. It’s
                        characterised by irregular menstrual cycles, elevated androgen levels, and polycystic ovaries.
                        These symptoms can lead to challenges like acne, weight gain and fertility issues.
                    </Subtitle>
                    <RegisterButton
                        sx={{
                            background: 'linear-gradient(0deg, #C32A58 0%, #C32A58 100%)',
                            '&:hover': {
                                background: 'linear-gradient(0deg, #B22952 0%, #B22952 100%)',
                                color: 'white',
                            },
                        }}
                    >
                        Register Now
                    </RegisterButton>
                </Box>
                <Box
                    sx={{
                        flexBasis: '50%',
                        maxWidth: '600px',
                        position: 'relative',
                        height: 'auto',
                        overflow: 'hidden',
                    }}
                >
                    <HeroVector style={{ position: 'absolute', zIndex: '-1', opacity: '0.5' }} />
                    <Image
                        src={PCOSHeroImage}
                        alt="PCOS Image"
                        layout="responsive"
                        height={500}
                        width={600}
                        style={{
                            WebkitTransform: 'scaleX(-1)', // for Safari
                            transform: 'scaleX(-1)',
                        }}
                    />
                </Box>
            </Box>
        </Layout>
    );
};

export default HeroDesktop;
