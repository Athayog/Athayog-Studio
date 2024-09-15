import React from 'react';
import Image from 'next/image';
import RYTImage from '@/app/images/RYT.jpg';
import Svayasa from '@/app/images/svyasa.png';
import AyushImage from '@/app/images/Ayush.png';
import { Box, Typography, Stack } from '@mui/material';
import { SectionContent, SectionPadding } from '@/app/components/pages/home/styles/Layout';
import styled from '@emotion/styled';

const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Description = styled(Typography)`
    max-width: 650px;
    font-size: 24px;
`;

const ImageStack = styled(Stack)`
    flex-direction: row;
    gap: 50px;
`;

const StyledImage = styled(Image)`
    width: auto;
    height: 80px;
`;

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
