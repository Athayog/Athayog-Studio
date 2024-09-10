import { Theme } from '@mui/material/styles';

export const appBar = {
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }: { theme: Theme }) => ({
                boxShadow: 'none',
                padding: '33px 34px',
                [theme.breakpoints.up('lg')]: {
                    padding: '33px 64px',
                },
            }),
        },
    },
};
