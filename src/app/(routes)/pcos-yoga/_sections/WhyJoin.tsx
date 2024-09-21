import React from 'react';
import theme from '@/app/components/ui/theme';
import { Box, Typography } from '@mui/material';
import SlimImage from '@/app/images/pcos-page/Slim.svg';
import StressImage from '@/app/images/pcos-page/stress.svg';
import ReproductiveImage from '@/app/images/pcos-page/reproductive.svg';
import { Title } from '@/app/components/ui/pages/pcos-yoga/styles/Index';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';
import MenstrualCycleImage from '@/app/images/pcos-page/menstrual-cycle.svg';

const WhyJoin = () => {
    const Data = [
        {
            icon: ReproductiveImage,
            description: 'Regulate hormones naturally',
        },
        {
            icon: SlimImage,
            description: 'Manage weight effectively',
        },
        {
            icon: StressImage,
            description: 'Reduce stress and anxiety',
        },
        {
            icon: MenstrualCycleImage,
            description: 'Improve menstrual health',
        },
    ];

    return (
        <Layout>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                }}
            >
                <Title sx={{ textAlign: 'center' }}>Why Join?</Title>
                <Box
                    component="ul"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'center',
                        padding: 0,
                        listStyle: 'none',
                    }}
                >
                    {Data.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Box
                                key={index}
                                sx={{
                                    borderRadius: ' 109.432px',
                                    background: 'rgba(146, 103, 201, 0.15)',
                                    width: '100%',
                                    maxWidth: ' 500px',
                                    height: '67px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    fontSize: '24px',
                                    gap: '5px',
                                    alignItems: 'center',
                                    svg: {
                                        height: '50px',
                                        width: '50px',
                                    },
                                    flexBasis: 'calc(50% - 20px)', // 2 items per row with a gap of 20px
                                    padding: '20px 30px',

                                    [theme.breakpoints.down('md')]: {
                                        flexBasis: '100%', // 1 item per row on small screens
                                        fontSize: '17px',
                                        width: 'min-content',
                                        svg: {
                                            height: '47px',
                                            width: '47px',
                                        },
                                    },
                                    [theme.breakpoints.down('sm')]: {
                                        flexBasis: '100%', // 1 item per row on small screens
                                    },
                                }}
                            >
                                <Icon />{' '}
                                <Typography
                                    sx={{
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '17px',
                                        },
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Layout>
    );
};

export default WhyJoin;
