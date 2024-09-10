'use client';
import { createTheme } from '@mui/material/styles';
import { pallete } from '@/components/ui/pallete';
import { button } from './elements/button';
import { appBar } from './elements/appBar';

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
        ...appBar,
    },
});

export default theme;
