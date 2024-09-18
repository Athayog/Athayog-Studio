import React from 'react';
import Image from 'next/image';
import { Box, Typography, styled } from '@mui/material';
import WeightLossImage from '@/app/images/WeightLoss.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/pages/home/styles/Layout';

// Styled Components
const Container = styled(Box)(({}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const ContentBox = styled(Box)(({}) => ({
    maxWidth: '800px',
    display: 'flex',
    gap: '32px',
    flexDirection: 'column',
    alignItems: 'start',
}));

const Title = styled(Typography)(({ theme }) => ({
    '& span': {
        color: '#D06700',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
        textAlign: 'left',
        width: '100%',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        fontWeight: '400',
        textAlign: 'left',
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '20px',
    backgroundColor: '#DB982F',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
    width: '300px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const ImageWrapperMobile = styled(Box)(({ theme }) => ({
    display: 'none',
    width: '300px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

const WeightLoss: React.FC = () => {
    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    <ContentBox>
                        <Title variant="h2">
                            3 Months <br /> <span>Yoga Weight Loss Program</span>
                        </Title>
                        <ImageWrapperMobile>
                            <Image width={300} alt="Weight Loss Image" src={WeightLossImage} />
                        </ImageWrapperMobile>
                        <Description variant="body1">
                            This 3-month program at Athayog offers a holistic approach to weight loss, helping you
                            achieve lasting results through Asana practice and personalized support.
                        </Description>
                        <StyledButton>Register Now</StyledButton>
                    </ContentBox>
                    <ImageWrapper>
                        <Image width={300} alt="Weight Loss Image" src={WeightLossImage} />
                    </ImageWrapper>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
};

export default WeightLoss;
