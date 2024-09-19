import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../ui/theme';
import { Title } from './styles/Index';
import { Layout } from './styles/Layout';
import Grid from '@mui/material/Grid2';

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
                <Grid container spacing={3} rowSpacing={2}>
                    {CausesPoints.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                borderRadius: '14px',
                                border: '2.5px solid #e3a6bd',
                                padding: '20px 30px',
                                background:
                                    'linear-gradient(180deg, rgba(240, 162, 195, 0.30) 0%, rgba(237, 161, 250, 0.30) 100%)',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#99163E',
                                    fontSize: '24px',
                                    fontWeight: '600',
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
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
};

export default Helps;
