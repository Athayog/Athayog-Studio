'use client';
import React from 'react';
import { Typography, Container } from '@mui/material';
import useAuthStore from '@/store/useAuthStore';

const AccountPage: React.FC = () => {
    const { user, loading, error } = useAuthStore();

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            {user ? (
                <Typography variant="h4">Welcome, {user.displayName}!</Typography>
            ) : (
                <Typography variant="h4">You are not logged in.</Typography>
            )}
        </Container>
    );
};

export default AccountPage;
