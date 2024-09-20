import PCOSHeroImage from '@/app/images/pcos-page/hero.png';
import { Box } from '@mui/material';
import Image from 'next/image';
import RegisterButton from '../../common/elements/button/RegisterButton';
import { Subtitle, Title } from './styles/Index';
import { Layout } from './styles/Layout';
import theme from '../../theme';

const HeroMobile = () => {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '50px',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    paddingTop: '120px',
                }}
            >
                <Box sx={{ flexBasis: '50%' }}>
                    <Title>Join Our PCOS Yoga Class</Title>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <RegisterButton
                            sx={{
                                background: 'linear-gradient(0deg, #C32A58 0%, #C32A58 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(0deg, #B22952 0%, #B22952 100%)',
                                    color: 'white',
                                },
                                height: '53px',
                                marginRight: '20px',
                                width: '211px',
                                minWidth: 'content',
                                fontSize: '22px',
                                padding: '0px',
                            }}
                        >
                            Register Now
                        </RegisterButton>

                        <Box sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    flexBasis: '50%',
                                    maxWidth: '600px',
                                    position: 'relative',
                                    height: 'auto',
                                    overflow: 'hidden',
                                }}
                            >
                                <Image
                                    src={PCOSHeroImage}
                                    alt="PCOS Image"
                                    layout="responsive"
                                    height={500}
                                    width={600}
                                    style={{ overflow: 'hidden' }}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Subtitle>
                        Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting those with ovaries. It’s
                        characterised by irregular menstrual cycles, elevated androgen levels, and polycystic ovaries.
                        These symptoms can lead to challenges like acne, weight gain and fertility issues.
                    </Subtitle>
                </Box>
            </Box>
        </Layout>
    );
};

export default HeroMobile;
