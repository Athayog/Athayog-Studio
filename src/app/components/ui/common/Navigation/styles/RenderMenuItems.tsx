import { Menu as MuiMenu, styled } from '@mui/material';

export const Menu = styled(MuiMenu)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        marginLeft: '10px',
        '& .MuiMenuItem-root': {
            '&:active': {
                color: theme.palette.primary.main,
            },
        },
    },
}));
