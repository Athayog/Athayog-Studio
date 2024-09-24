'use client';
import React, { useEffect } from 'react';
import { Button, Typography, Divider, Stack } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { SignupContainer } from '@/app/components/ui/pages/auth/signup/styles/Index';
import useAuthStore from '@/store/useAuthStore';
import Skeletons from '@/app/components/ui/common/Skeleton/Index';
import { SkeletonTypes } from '@/constants/skeleton';

const Signup: React.FC = () => {
    const router = useRouter();
    const { user, loading, error, handleSignIn } = useAuthStore();

    useEffect(() => {
        if (user) router.push('/');
    }, [user, router]);

    const handlePhoneLogin = () => {
        router.push('/phone-login');
    };

    if (error) return <p>{error}</p>;

    return (
        <SignupContainer>
            <Skeletons loading={loading} type={SkeletonTypes.LOGIN} width="80%" height={20}>
                <Stack direction="column" spacing={2} sx={{ boxShadow: 1, backgroundColor: '#fff', borderRadius: '2px', p: 3, height: '100vd' }}>
                    <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: '20px' }}>
                        Join us into your Yoga Journey
                    </Typography>
                    <Button variant="contained" startIcon={<GoogleIcon />} onClick={handleSignIn} sx={{ mb: 2, width: '100%', maxWidth: '300px' }}>
                        Sign in with Google
                    </Button>

                    <Divider sx={{ width: '100%', maxWidth: '300px', my: 2 }} />

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body1">Registered with phone?</Typography>
                        <Button onClick={handlePhoneLogin} variant="text">
                            Click here
                        </Button>
                    </Stack>
                </Stack>
            </Skeletons>
        </SignupContainer>
    );
};

export default Signup;
