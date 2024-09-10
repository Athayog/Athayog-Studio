import { Button, styled, Menu as MuiMenu, List as MuiList, Box, Drawer as MuiDrawer, ListItemButton } from '@mui/material';

export const NavLinkButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path',
})<{
    path: string;
    pathname: string;
}>(({ theme, pathname, path }) => ({
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

export const List = styled(MuiList)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
});

export const DrawerContent = styled(Box)({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
});

export const Drawer = styled(MuiDrawer)({
    '& .MuiDrawer-paper': {
        width: '100%',
        maxWidth: '100%',
        padding: '40px 35px',
        boxSizing: 'border-box',
        height: '100%',
        background: 'linear-gradient(180deg, #101010 20%, #1B2E08 100%)',
    },
});
