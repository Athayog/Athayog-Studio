import React from 'react';
import { styled } from '@mui/material';
import HeroMobile from '@/app/components/ui/pages/pcos-yoga/HeroMobile';
import HeroDesktop from '@/app/components/ui/pages/pcos-yoga/HeroDesktop';

const MobileWrapper = styled('div')(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}));

const DesktopWrapper = styled('div')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
}));
const Hero = () => {
    return (
        <div>
            <MobileWrapper>
                <HeroMobile />
            </MobileWrapper>
            <DesktopWrapper>
                <HeroDesktop />
            </DesktopWrapper>
        </div>
    );
};

export default Hero;
