'use client';
import React from 'react';
import { Box } from '@mui/material';
import { LayoutContainer, LayoutContent } from '@/app/components/ui/pages/home/styles/Index';
import { Blogs, GroupClasses, Hero, PersonalSessions, Recognition, Stats, UpcomingWorkshop, VideoTestimonials, WeightLoss, WhyAthayog, YogaAcademy, YogaEvent, EmbraceWellness, FAQ, YogaArambha } from '@/app/(routes)/home/_sections';

const HomePage: React.FC = () => {
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
