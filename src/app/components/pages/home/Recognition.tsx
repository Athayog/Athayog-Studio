import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import RYTImage from '@/app/images/RYT.jpg';
import AyushImage from '@/app/images/Ayush.png';
import Svayasa from '@/app/images/svyasa.png';
import Image from 'next/image';

export default function Recognition() {
    return (
        <Box
            sx={{
                marginTop: '100px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Typography sx={{ maxWidth: '650px', fontSize: '24px' }}>
                Our academy and teachers are certified with Yoga Alliance, a Global Certification, recognised all over
                the World.
            </Typography>
            <Stack direction="row" gap="50px">
                <Image src={Svayasa} alt="RYS" style={{ width: 'auto', height: '80px' }} />
                <Image src={RYTImage} alt="RYT" style={{ width: 'auto', height: '80px' }} />
                <Image src={AyushImage} alt="Ayush" style={{ width: 'auto', height: '80px' }} />
            </Stack>
        </Box>
    );
}
