import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import ContactUsImage from '@/app/images/contactUs.jpeg';

const Hero = () => {
    return (
        <Box sx={{ height: '500px', position: 'relative' }}>
            <Image
                fill
                src={ContactUsImage}
                style={{ objectFit: 'cover' }}
                alt="contact us image"
                objectPosition="bottom"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </Box>
    );
};

export default Hero;
