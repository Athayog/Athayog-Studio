import { Theme } from '@mui/material';

export const button = {
    MuiButton: {
        styleOverrides: {
            root: () => ({
                textTransform: 'none',
                borderRadius: '1.25rem',
                variants: [], // Add this property
            }),
            contained: ({ theme }: { theme: Theme }) => ({
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: 'white',
                },
            }),
            text: ({ theme }: { theme: Theme }) => ({
                '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.primary.light,
                },
            }),
        },
    },
};
