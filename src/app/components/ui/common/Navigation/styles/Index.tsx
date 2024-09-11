import { Box, Button, ButtonProps, Toolbar as MuiToolbar, styled, Menu as MuiMenu } from '@mui/material';

export const Toolbar = styled(MuiToolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px',
}));

export const NavContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '30px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        gap: '60px',
    },
}));

interface NavLinkButtonProps extends ButtonProps {
    path: string;
    pathname: string;
}

export const NavLinkButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path',
})<NavLinkButtonProps>(({ theme, pathname, path }) => ({
    fontSize: '18px',
    color: pathname === path ? theme.palette.primary.main : 'white',
}));

export const MenuButton = styled(Button)({
    color: 'white',
    fontSize: '18px',
});

export const Menu = styled(MuiMenu)({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
});

export const TrialButton = styled(Button)(({ theme }) => ({
    fontSize: '18px',
    color: 'black',
    backgroundColor: 'white',
    padding: '15px, 25px',
    width: '174px',
    fontWeight: '700',
    span: {
        color: theme.palette.primary.main,
        marginLeft: '5px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
