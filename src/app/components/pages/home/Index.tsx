'use client';
import React, { useEffect } from 'react';
import Hero from '@/app/components/pages/home/Hero';
import useThemeStore from '@/store/useThemeStore';

const HomePage: React.FC = () => {
    const { setNavigationVariant } = useThemeStore();
    useEffect(() => {
        setNavigationVariant('dark');
    }, [setNavigationVariant]);
    return (
        <div>
            <Hero />
        </div>
    );
};

export default HomePage;
