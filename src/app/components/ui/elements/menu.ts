import { Theme } from '@mui/material/styles';

export const menu = {
    MuiMenu: {
        styleOverrides: {
            root: ({}: { theme: Theme }) => ({
                '& .MuiPaper-root': {
                    borderRadius: '8px',
                    color: 'white',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
            }),
        },
    },
};
