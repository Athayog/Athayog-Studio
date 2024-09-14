import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import PersonalSessionImage from '@/app/images/PersonalSession.png';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';

const PersonalSessions: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box>
                <Image width={300} alt="Personal Session Image" src={PersonalSessionImage} />
            </Box>
            <Box sx={{ maxWidth: '800px', display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'end' }}>
                <Typography variant="h2">
                    Athayog <span style={{ color: '#016B5F' }}>Personal Sessions</span>
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'end' }}>
                    Stay focused on your yoga practice and embrace change with Athayog Personal Sessions. These sessions
                    offer a customised and structured approach, tailored to your needs, helping you break old patterns
                    and progress on your journey.
                </Typography>
                <RegisterButton>Register Now</RegisterButton>
            </Box>
        </Box>
    );
};

export default PersonalSessions;
