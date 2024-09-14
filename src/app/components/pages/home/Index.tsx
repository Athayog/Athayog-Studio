'use client';
import React, { useEffect } from 'react';
import Hero from '@/app/components/pages/home/Hero';
import useThemeStore from '@/store/useThemeStore';
import Stats from './Stats';
import Recognition from './Recognition';
import { LayoutContainer } from './styles/Index';
import WhyAthayog from './WhyAthayog';

const HomePage: React.FC = () => {
    const { setNavigationVariant } = useThemeStore();
    useEffect(() => {
        setNavigationVariant('dark');
    }, [setNavigationVariant]);
    return (
        <div>
            <Hero />
            <LayoutContainer>
                <Stats />
                <Recognition />
                <WhyAthayog />
            </LayoutContainer>
        </div>
    );
};

export default HomePage;
