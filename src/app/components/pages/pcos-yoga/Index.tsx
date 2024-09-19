'use client';
import { Box, styled } from '@mui/material';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';
import { Gradient } from './styles/Index';
import Causes from './Causes';
import Helps from './Helps';

const MobileWrapper = styled('div')(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.up('md')]: {
        display: 'none', // Hide on screens md and larger
    },
}));

const DesktopWrapper = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block', // Show on screens md and larger
    },
}));
const PCOSYoga = () => {
    return (
        <Box
            sx={{
                background:
                    ' linear-gradient(56deg, rgba(254,178,217,1) 0%, rgba(254,186,207,1) 23%, rgba(255,189,206,1) 32%, rgba(254,202,204,1) 49%, rgba(254,208,208,1) 63%, rgba(254,184,209,1) 80%, rgba(253,211,215,1) 86%, rgba(254,199,231,1) 100%)',
            }}
        >
            <Gradient />
            <MobileWrapper>
                <HeroMobile />
            </MobileWrapper>
            <DesktopWrapper>
                <HeroDesktop />
            </DesktopWrapper>

            {/* PCOS */}
            <Causes />
            <Helps />
        </Box>
    );
};

export default PCOSYoga;
