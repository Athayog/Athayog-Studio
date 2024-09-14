import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import WeightLossImage from '@/app/images/WeightLoss.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';

const WeightLoss: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box sx={{ maxWidth: '800px', display: 'flex', gap: '32px', flexDirection: 'column', alignItems: 'start' }}>
                <Typography variant="h2">
                    3 Months <br /> <span style={{ color: '#D06700' }}>Yoga Weight loss program</span>
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'start' }}>
                    This 3 month program at Athayog offers a holistic approach to weight loss, helping you achieve
                    lasting results through Asana practice and Personalised support
                </Typography>
                <RegisterButton>Register Now</RegisterButton>
            </Box>
            <Box>
                <Image width={300} alt="Personal Session Image" src={WeightLossImage} />
            </Box>
        </Box>
    );
};

export default WeightLoss;
