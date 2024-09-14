'use client';
import { createTheme } from '@mui/material/styles';
import { pallete } from '@/app/components/ui/pallete';
import { button } from '@/app/components/ui/elements/button';
import { appBar } from '@/app/components/ui/elements/appBar';
import { divider } from '@/app/components/ui/elements/divider';
import { menu } from '@/app/components/ui/elements/menu';

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
        ...menu,
    },
});

export default theme;
