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
    components: {
        ...button,
        ...appBar,
    },
});

export default theme;
