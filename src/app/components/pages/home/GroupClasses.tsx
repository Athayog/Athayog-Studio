import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import CarouselSample from '@/app/images/CarouselSample.png';
import Image from 'next/image';

type Props = {};

function GroupClasses({}: Props) {
    return (
        <Box sx={{ marginTop: '100px', textAlign: 'center' }}>
            <Typography sx={{ fontSize: '48px', color: '#303030', fontWeight: '700' }}>
                Athayog Group Classes
            </Typography>
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: '358.814px',
                    height: '390px',
                    margin: '40px auto 0px auto',
                    width: '970px',
                    border: '4px solid #F8BCC0',
                    overflow: 'hidden',
                }}
            >
                <Image src={CarouselSample} layout="fill" objectFit="cover" alt="Carousel Sample" />
            </Box>
            <Typography sx={{textAlign:"center",marginTop:'30px',maxWidth:"800px"}}>
                Join our group yoga sessions to improve your well-being. Connect with a supportive communityand find
                balance in mind, body and soul. Start your journey to a healthier life with us today.
            </Typography>
            <Button>Register Now</Button>
        </Box>
    );
}

export default GroupClasses;
