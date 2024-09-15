import theme from '@/app/components/ui/theme';
import { Box, styled } from '@mui/material';

export const SectionPadding = styled(Box)(() => ({
    padding: '70px 100px',
    [theme.breakpoints.down('lg')]: {
        padding: '70px 80px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '40px 40px',
    },
}));

export const SectionContent = styled(Box)(() => ({
    maxWidth: '1440px',
    margin: '0 auto',
}));
