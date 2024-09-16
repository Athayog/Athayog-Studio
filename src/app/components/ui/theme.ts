'use client';
import { createTheme } from '@mui/material/styles';
import { pallete } from '@/app/components/ui/pallete';
import { button } from '@/app/components/ui/elements/button';
import { divider } from '@/app/components/ui/elements/divider';
import { menu } from '@/app/components/ui/elements/menu';

const theme = createTheme({
    typography: {
        fontFamily: 'inherit',
        h2: {
            fontSize: '48px',
            fontWeight: '700',
        },
        h3: {
            fontSize: '32px',
            fontWeight: '700',
        },
        body1: {
            fontSize: '24px',
        },
    },
    palette: pallete,

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        ...button,
        ...divider,
        ...menu,
    },
});

export default theme;
