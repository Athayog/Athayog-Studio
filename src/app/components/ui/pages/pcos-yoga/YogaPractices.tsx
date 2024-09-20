import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../theme';
import { Title } from './styles/Index';
import { Layout } from './styles/Layout';

const YogaPractices = () => {
    const CausesPoints = [
        {
            title: 'Gentle Asanas',
            description: 'Child’s Pose, Cat Cow and Legs Up The Wall for relaxation.',
        },
        {
            title: 'Strength Building Poses',
            description: 'Warrior II, Plank and Chair Pose for strength and stability.',
        },
        {
            title: 'Breathing Exercises',
            description: 'Pranayama and deep abdominal breathing to manage stress.',
        },
        { title: 'Restorative Yoga', description: 'Savasana and restorative poses to promote overall well being.' },
    ];
    return (
        <Layout>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                }}
            >
                <Title>Recommended Yoga Practices for PCOS</Title>
                <Box
                    component="ul"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'flex-start',
                        padding: 0,
                        listStyle: 'none',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'flex-start' }}>
                        {CausesPoints.map((item, index) => (
                            <Box key={index}>
                                <Typography
                                    sx={{
                                        color: '#000',
                                        fontSize: '24px',
                                        fontWeight: '700',

                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '18px',
                                        },
                                    }}
                                >
                                    {item.title}:
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontSize: '24px',
                                            marginLeft: '10px',
                                            fontWeight: '400',
                                            [theme.breakpoints.down('md')]: {
                                                fontSize: '18px',
                                            },
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default YogaPractices;
