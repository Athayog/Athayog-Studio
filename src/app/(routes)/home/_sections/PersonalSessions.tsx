import React from 'react';
import Image from 'next/image';
import { Box, Typography, styled } from '@mui/material';
import PersonalSessionImage from '@/app/images/PersonalSession.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';

// Styled Components
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'row-reverse',
    },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
    width: '300px',
    [theme.breakpoints.down('md')]: {
        width: '156px',
        display: 'none',
    },
}));

const ImageWrapperMobile = styled(Box)(({ theme }) => ({
    width: '156px',
    display: 'none',
    [theme.breakpoints.down('md')]: {
        width: '156px',
        display: 'block',
        margin: '0 auto',
    },
}));

const ContentBox = styled(Box)(({}) => ({
    maxWidth: '800px',
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    alignItems: 'end',
}));

const Title = styled(Typography)(({ theme }) => ({
    '& span': {
        color: '#016B5F',
    },
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
        textAlign: 'left',
        display: 'none',
    },
}));

const TitleMobile = styled(Typography)(({ theme }) => ({
    '& span': {
        color: '#016B5F',
    },
    display: 'none',

    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
        textAlign: 'left',
        display: 'block',
        width: '100%',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    textAlign: 'end',
    fontWeight: '400',
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        textAlign: 'left',
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '20px',
    backgroundColor: '#007668',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

const PersonalSessions: React.FC = () => {
    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    <ImageWrapper>
                        <Image width={300} alt="Personal Session Image" src={PersonalSessionImage} />
                    </ImageWrapper>

                    <ContentBox>
                        <Title variant="h2">
                            Athayog <span>Personal Sessions</span>
                        </Title>
                        <TitleMobile variant="h2">
                            Athayog <br /> <span>Personal Sessions</span>
                        </TitleMobile>
                        <ImageWrapperMobile>
                            <Image width={156} alt="Personal Session Image" src={PersonalSessionImage} />
                        </ImageWrapperMobile>
                        <Description variant="body1">
                            Stay focused on your yoga practice and embrace change with Athayog Personal Sessions. These sessions offer a customised and structured approach, tailored to your needs,
                            helping you break old patterns and progress on your journey.
                        </Description>
                        <StyledButton>Register Now</StyledButton>
                    </ContentBox>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
};

export default PersonalSessions;
