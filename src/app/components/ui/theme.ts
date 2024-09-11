'use client';
import { pallete } from '@/components/ui/pallete';
import { createTheme } from '@mui/material/styles';
import { button } from '@/components/ui/elements/button';
import { appBar } from '@/components/ui/elements/appBar';
import { divider } from '@/components/ui/elements/divider';

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
        ...divider,
    },
});

export default theme;
