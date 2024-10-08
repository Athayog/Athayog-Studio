import React from 'react';
import Image from 'next/image';
import { Box, Typography, styled } from '@mui/material';
import CarouselSample from '@/app/images/CarouselSample.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';

const Container = styled(Box)(({ theme }) => ({
    marginTop: '100px',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
        marginTop: '0px',
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '48px',
    color: '#303030',
    fontWeight: '700',
    [theme.breakpoints.down('md')]: {
        fontSize: '26px',
    },
    span: {
        color: '#237306',
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    borderRadius: '358.814px',
    height: '390px',
    margin: '40px auto 0 auto',
    maxWidth: '970px',
    border: '4px solid #F8BCC0',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        height: '300px',
        margin: '20px auto 0 auto',
    },
    [theme.breakpoints.down('sm')]: {
        height: '200px',
    },
}));

const Description = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginTop: '30px',
    maxWidth: '800px',
    fontSize: '24px',
    margin: '30px auto 0 auto',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
        margin: '16px auto 0 auto',
    },
}));

const RegisterActionButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
        margin: '13px  auto 0 auto',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

function GroupClasses() {
    return (
        <SectionPadding>
            <SectionContent>
                <Container>
                    <Title>
                        Athayog <span>Group Classes</span>
                    </Title>
                    <ImageContainer>
                        <Image src={CarouselSample} fill style={{ objectFit: 'cover' }} alt="Carousel Sample" />
                    </ImageContainer>
                    <Description>
                        Join our group yoga sessions to improve your well-being. Connect with a supportive community and find <strong>balance in mind body,</strong> and <strong>soul</strong>. Start
                        your journey to a healthier life with us today.
                    </Description>
                    <RegisterActionButton variant="contained">Register Now</RegisterActionButton>
                </Container>
            </SectionContent>
        </SectionPadding>
    );
}

export default GroupClasses;
