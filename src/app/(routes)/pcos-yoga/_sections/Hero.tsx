import React from 'react';
import HeroMobile from '@/app/(routes)/pcos-yoga/_sections/HeroMobile';
import HeroDesktop from '@/app/(routes)/pcos-yoga/_sections/HeroDesktop';
import { styled } from '@mui/system';

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
