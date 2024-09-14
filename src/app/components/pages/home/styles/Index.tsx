import { Box, styled } from '@mui/material';

export const LayoutContainer = styled(Box)(() => ({
    padding: '70px 100px',
    backgroundColor: '#e9fdde',
}));

export const LayoutContent = styled(Box)(() => ({
    maxWidth: '1440px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '100px',
}));
