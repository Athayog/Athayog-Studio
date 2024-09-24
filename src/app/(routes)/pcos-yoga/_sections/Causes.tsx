import React from 'react';
import Image from 'next/image';
import theme from '@/app/styles/theme';
import { Box, Typography } from '@mui/material';
import ConstipationImage from '@/app/images/pcos-page/constipation.png';
import { Title } from '@/app/components/ui/pages/pcos-yoga/styles/Index';
import { Layout } from '@/app/components/ui/pages/pcos-yoga/styles/Layout';

const Causes = () => {
    const CausesPoints = [
        {
            title: 'Hormonal Imbalances',
            description: 'High levels of androgens (male hormones) and insulin resistance are common in PCOS.',
        },
        { title: 'Genetics', description: 'Family history can play a role in developing PCOS' },
        {
            title: 'Inflammation',
            description: ' Chronic low-grade inflammation may contribute to insulin resistance and hormonal imbalances.',
        },
        { title: 'Lifestyle Factors', description: 'Poor diet, lack of exercise and obesity can worsen symptoms.' },
        { title: 'Developmental Factors', description: 'Factors like premature birth may increase the risk.' },
    ];
    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    gap: '50px',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '100%',
                    [theme.breakpoints.down('md')]: {
                        flexDirection: 'column',
                    },
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '50%',
                        [theme.breakpoints.down('md')]: {
                            width: '100%',
                        },
                    }}
                >
                    <Title>Causes of PCOS</Title>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {CausesPoints.map((item, index) => (
                            <Box key={index}>
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

                <Box
                    sx={{
                        flexBasis: '50%',
                        maxWidth: '600px',
                        position: 'relative',
                        height: 'auto',
                        overflow: 'hidden',
                    }}
                >
                    <Image src={ConstipationImage} alt="PCOS Image" layout="responsive" height={500} width={600} placeholder="blur" />
                </Box>
            </Box>
        </Layout>
    );
};

export default Causes;
