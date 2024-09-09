import { Theme } from '@mui/material';

export const button = {
    MuiButton: {
        styleOverrides: {
            root: ({ theme }: { theme: Theme }) => ({
                textTransform: 'none',
                borderRadius: '1.25rem',
                variants: [], // Add this property
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                },
            }),
        },
    },
};
