'use client';
import LoginPage from '@/app/components/pages/auth/Index';
import useThemeStore from '@/store/useThemeStore';
import { useEffect } from 'react';

function Page() {
    const { setNavigationVariant } = useThemeStore();
    useEffect(() => {
        setNavigationVariant('light');
    }, [setNavigationVariant]);
    return (
        <div>
            <LoginPage />
        </div>
    );
}

export default Page;
