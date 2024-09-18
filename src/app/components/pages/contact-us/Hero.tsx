import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import ContactUsImage from '@/app/images/contactUs.jpeg';

const Hero = () => {
    return (
        <Box sx={{ height: '500px', position: 'relative' }}>
            <Image fill src={ContactUsImage} objectFit="cover" alt="contact us image" objectPosition="bottom" />
        </Box>
    );
};

export default Hero;
