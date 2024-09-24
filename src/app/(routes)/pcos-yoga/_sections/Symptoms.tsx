import React from 'react';
import theme from '@/app/styles/theme';
import { Box, Typography } from '@mui/material';
import { Title } from '@/app/components/ui/pages/pcos-yoga/styles/Index';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';

const Symptoms = () => {
    const symptomsPoints = ['Irregular menstrual cycles', 'Excess hair growth and acne', 'Weight gain or difficulty losing weight', 'Skin issues Fertility challenges', 'Mood swings and pelvic pain'];

    return (
        <Layout>
            <Box
                sx={{
                    width: '100%',
                    padding: '20px',
                }}
            >
                <Title>Symptoms of PCOS</Title>
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
                    {symptomsPoints.map((item, index) => (
                        <Box
                            key={index}
                            component="li"
                            sx={{
                                flexBasis: 'calc(50% - 10px)', // 2 columns, items 1-3 left, 4-6 right
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 0',
                                [theme.breakpoints.down('md')]: {
                                    flexBasis: '100%', // 1 column per row on smaller screens
                                },
                            }}
                        >
                            {/* Pink Dot */}
                            <Box
                                sx={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#C32A58', // Pink dot color
                                    flexShrink: 0,
                                }}
                            />
                            {/* Text */}
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    color: '#333',
                                    fontWeight: '500',
                                    [theme.breakpoints.down('md')]: {
                                        fontSize: '18px',
                                    },
                                }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Symptoms;
