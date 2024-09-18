import { Box } from '@mui/material';
import React from 'react';
import ContactUsImage from '@/app/images/contactUs.jpeg';
import Image from 'next/image';

function Hero() {
    return (
        <Box sx={{ height: '500px', position: 'relative' }}>
            <Image fill src={ContactUsImage} objectFit="cover" alt="contact us image" objectPosition="bottom" />
        </Box>
    );
}

export default Hero;
