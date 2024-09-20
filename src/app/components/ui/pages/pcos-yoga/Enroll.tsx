import React from 'react';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';
import { Title } from './styles/Index';
import { Box, Button, Typography } from '@mui/material';
import theme from '../../theme';
const Enroll = () => {
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    justfyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Title sx={{ textAlign: 'center' }}>Enroll Now: Yoga for PCOS Find Strength & Relief!</Title>
                <Typography
                    sx={{
                        color: '#202020',
                        fontSize: '28px',
                        fontWeight: '500',
                        textAlign: 'center',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '18px',
                        },
                    }}
                >
                    Find balance, strength and relief with our specialised yoga program. Sign up today and take the
                    first step towards better health!
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justfyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '30px',
                        marginTop: '40px',
                        [theme.breakpoints.down('md')]: {
                            justifyContent: 'center',
                        },
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: '46px',
                            backgroundColor: '#FFF',
                            width: 'max-content',
                            height: '61px',
                            padding: ' 17.467px 23.289px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#202020',
                            fontWeigh: '600',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '16px',
                                height: '37.833px',
                                wdith: '159.394px',
                            },
                        }}
                    >
                        24th September
                    </Box>
                    <Box
                        sx={{
                            borderRadius: '46px',
                            backgroundColor: '#FFF',
                            width: 'max-content',
                            height: '61px',
                            padding: ' 17.467px 23.289px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#202020',
                            fontWeigh: '600',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '16px',
                                height: '37.833px',
                                wdith: '159.394px',
                            },
                        }}
                    >
                        ₹12,999 + GST
                    </Box>
                    <Box
                        sx={{
                            borderRadius: '46px',
                            backgroundColor: '#FFF',
                            width: 'max-content',
                            height: '61px',
                            padding: ' 17.467px 23.289px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#202020',
                            fontWeigh: '600',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '16px',
                                height: '37.833px',
                                wdith: '159.394px',
                            },
                        }}
                    >
                        4:00 PM - 5:00 PM, Mon-Sat
                    </Box>
                </Box>
                <Button
                    sx={{
                        background: 'linear-gradient(0deg, #C32A58 0%, #C32A58 100%)',
                        marginTop: '50px',
                        borderRadius: '46.578px',
                        height: '77px',
                        width: '313px',
                        color: '#fff',
                        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.44)',
                        fontSize: '26px',
                        fontWeight: '700',
                    }}
                >
                    Join Now
                </Button>
            </Box>
        </Layout>
    );
};

export default Enroll;
