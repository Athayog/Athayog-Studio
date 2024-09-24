'use client';
import { createTheme } from '@mui/material/styles';
import { pallete } from '@/app/components/ui/pallete';
import { button } from '@/app/styles/elements/button';
import { divider } from '@/app/styles/elements/divider';
import { menu } from '@/app/styles/elements/menu';

const theme = createTheme({
    typography: {
        fontFamily: 'inherit',
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
