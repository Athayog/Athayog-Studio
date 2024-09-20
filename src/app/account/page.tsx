'use client';
import AccountPage from '@/app/components/ui/pages/auth/account/Index';
import useThemeStore from '@/store/useThemeStore';
import { Box } from '@mui/material';
import { useEffect } from 'react';

function Page() {
    const { setNavigationVariant } = useThemeStore();
    useEffect(() => {
        setNavigationVariant('light');
    }, [setNavigationVariant]);
    return (
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <AccountPage />
        </Box>
    );
}

export default Page;
