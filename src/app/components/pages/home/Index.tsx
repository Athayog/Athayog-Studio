'use client';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';
import Hero from '@/app/components/pages/home/Hero';
import Stats from '@/app/components/pages/home/Stats';
import Blogs from '@/app/components/pages/home/Blogs';
import WhyAthayog from '@/app/components/pages/home/WhyAthayog';
import WeightLoss from '@/app/components/pages/home/WeightLoss';
import Recognition from '@/app/components/pages/home/Recognition';
import YogaAcademy from '@/app/components/pages/home/YogaAcademy';
import GroupClasses from '@/app/components/pages/home/GroupClasses';
import PersonalSessions from '@/app/components/pages/home/PersonalSessions';
import UpcomingWorkshop from '@/app/components/pages/home/UpcomingWorkshop';
import VideoTestimonials from '@/app/components/pages/home/VideoTestimonials';
import { LayoutContainer, LayoutContent } from '@/app/components/pages/home/styles/Index';
import YogaEvent from './YogaEvent';
import EmbraceWellness from './EmbraceWellness';
import YogaArambha from './YogaArambha';
import FAQ from './FAQ';

const HomePage: React.FC = () => {
    const { setNavigationVariant } = useThemeStore();
    useEffect(() => {
        setNavigationVariant('dark');
    }, [setNavigationVariant]);
    return (
        <Box>
            <Hero />
            <LayoutContainer>
                <LayoutContent>
                    <Stats />
                    <Recognition />
                    <WhyAthayog />
                    {/* <VideoTestimonials />
                    <GroupClasses />
                    <PersonalSessions />
                    <WeightLoss />
                    <YogaAcademy />
                    <UpcomingWorkshop />
                    <Blogs />
                    <YogaEvent />
                    <EmbraceWellness />
                    <YogaArambha />
                    <FAQ /> */}
                </LayoutContent>
            </LayoutContainer>
        </Box>
    );
};

export default HomePage;
