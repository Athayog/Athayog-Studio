import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { Box, Typography } from '@mui/material';
import { YouTubeEmbed } from '@next/third-parties/google';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import theme from '../../theme';

const YogaArambha = () => {
    return (
        <SectionPadding>
            <SectionContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        [theme.breakpoints.down('md')]: {
                            flexDirection: 'column',
                        },
                    }}
                >
                    <Box sx={{ maxWidth: '550px', position: 'relative' }}>
                        <Typography
                            sx={{
                                fontSize: '48px',
                                color: '#202020',
                                fontWeight: '700',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '28px',
                                    marginTop: '0px',
                                    textAlign: 'center',
                                },
                            }}
                        >
                            Yoga Arambha
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: '24px',
                                color: '#000',
                                marginTop: '34px',
                                [theme.breakpoints.down('md')]: {
                                    fontSize: '18px',
                                    marginTop: '20px',
                                },
                            }}
                        >
                            AthaYog Living and Indiranagar Club present &quot;Yoga Arambha&quot; on International Day of
                            Yoga, celebrating women&apos;s strength and resilience. Featuring a special Yoga session and
                            talent showcase, this event marks the start of a wellness journey. <br /> Chief Guest BNS
                            Reddy IPS (Retd.), President of Indiranagar Club, will honor us with his presence.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '20px',
                                marginTop: '27px',
                                [theme.breakpoints.down('md')]: {
                                    display: 'none',
                                },
                            }}
                        >
                            <RegisterButton sx={{ width: 'max-content' }}>Dive Into Yoga Arambaha</RegisterButton>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '270px',
                            height: '500px',
                            width: '436px',
                            border: '4px solid #F8BCC0',
                            overflow: 'hidden',
                            [theme.breakpoints.down('md')]: {
                                marginTop: '20px',
                                width: '100%',
                            },
                        }}
                    >
                        <YouTubeEmbed style="height: 520px;" videoid="cwvhEaSwwCw" params="controls=0" />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'none',
                        justifyContent: 'center',
                        marginTop: '27px',
                        [theme.breakpoints.down('md')]: {
                            display: 'flex',
                        },
                    }}
                >
                    <RegisterButton
                        sx={{
                            width: 'max-content',
                            [theme.breakpoints.down('md')]: {
                                margin: '0 auto',
                                fontSize: '18px',
                                height: '50px',
                                width: '300px',
                            },
                        }}
                    >
                        Dive Into Yoga Arambaha
                    </RegisterButton>
                </Box>
            </SectionContent>
        </SectionPadding>
    );
};

export default YogaArambha;
