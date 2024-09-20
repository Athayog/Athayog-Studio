'use client';
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';
import Hero from '@/app/components/ui/pages/home/Hero';
import Stats from '@/app/components/ui/pages/home/Stats';
import Blogs from '@/app/components/ui/pages/home/Blogs';
import WhyAthayog from '@/app/components/ui/pages/home/WhyAthayog';
import WeightLoss from '@/app/components/ui/pages/home/WeightLoss';
import Recognition from '@/app/components/ui/pages/home/Recognition';
import YogaAcademy from '@/app/components/ui/pages/home/YogaAcademy';
import GroupClasses from '@/app/components/ui/pages/home/GroupClasses';
import PersonalSessions from '@/app/components/ui/pages/home/PersonalSessions';
import UpcomingWorkshop from '@/app/components/ui/pages/home/UpcomingWorkshop';
import VideoTestimonials from '@/app/components/ui/pages/home/VideoTestimonials';
import { LayoutContainer, LayoutContent } from '@/app/components/ui/pages/home/styles/Index';
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
                    <VideoTestimonials />
                    <GroupClasses />
                    <PersonalSessions />
                    <WeightLoss />
                    <YogaAcademy />
                    <UpcomingWorkshop />
                    <Blogs />
                    <YogaEvent />
                    <EmbraceWellness />
                    <YogaArambha />
                    <FAQ />
                </LayoutContent>
            </LayoutContainer>
        </Box>
    );
};

export default HomePage;
