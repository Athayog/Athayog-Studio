import React from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import RYTImage from '@/app/images/RYT.jpg';
import Svayasa from '@/app/images/svyasa.png';
import AyushImage from '@/app/images/Ayush.png';
import { Box, Typography, Stack } from '@mui/material';
import { SectionContent, SectionPadding } from '@/app/components/pages/home/styles/Layout';

// Styled components using MUI's styled
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',

    gap: '25px',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    maxWidth: '650px',
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
        fontSize: '17px',
        fontWeight: '600',
    },
}));

const ImageStack = styled(Stack)(({}) => ({
    flexDirection: 'row',
    gap: '50px',
}));

const StyledImage = styled(Image)(({ theme }) => ({
    width: 'auto',
    height: '80px',
    [theme.breakpoints.down('md')]: {
        height: '60px',
    },
}));

export default function Recognition() {
    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    <Description>
                        Our academy and teachers are certified with Yoga Alliance, a Global Certification, recognised
                        all over the World.
                    </Description>
                    <ImageStack>
                        <StyledImage src={Svayasa} alt="RYS" />
                        <StyledImage src={RYTImage} alt="RYT" />
                        <StyledImage src={AyushImage} alt="Ayush" />
                    </ImageStack>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
}
