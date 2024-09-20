import React from 'react';
import theme from '@/app/components/ui/theme';
import { Box, Typography } from '@mui/material';
import { Title } from '@/app/components/ui/pages/pcos-yoga/styles/Index';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';

const Helps = () => {
    const CausesPoints = [
        {
            title: 'Regulates Blood Sugar',
            description: 'Improves insulin sensitivity and blood sugar levels.',
        },
        { title: 'Aids Weight Loss ', description: 'Supports weight management, easing PCOS symptoms.' },
        {
            title: 'Balances Hormones',
            description: 'Reduces stress, helping regulate hormones.',
        },
        {
            title: 'Stress Management',
            description: 'Promotes relaxation and reduces stress, aiding in overall hormonal balance.',
        },
        {
            title: 'Menstrual Regularity',
            description: 'Alleviates menstrual discomfort and improves cycle regularity.',
        },
        { title: 'Mental Health', description: 'Enhances mood and well-being, reducing anxiety and depression.' },
    ];

    return (
        <Layout>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                }}
            >
                <Title>How Yoga Helps</Title>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'space-between',
                    }}
                >
                    {CausesPoints.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flexBasis: 'calc(33.333% - 20px)', // Ensure 3 items per row with a gap of 20px
                                flexGrow: 1,
                                borderRadius: '14px',
                                border: '2.5px solid #e3a6bd',
                                padding: '20px 30px',
                                background:
                                    'linear-gradient(180deg, rgba(240, 162, 195, 0.30) 0%, rgba(237, 161, 250, 0.30) 100%)',
                                [theme.breakpoints.down('md')]: {
                                    flexBasis: 'calc(50% - 20px)', // 2 items per row on medium screens
                                },
                                [theme.breakpoints.down('sm')]: {
                                    flexBasis: '100%', // 1 item per row on small screens
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#99163E',
                                    fontSize: '24px',
                                    fontWeight: '700',
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '18px',
                                    },
                                }}
                            >
                                {item.title}:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    marginTop: '10px',
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '18px',
                                    },
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Helps;
