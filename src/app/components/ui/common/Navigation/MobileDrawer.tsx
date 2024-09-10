import { Drawer, DrawerContent, List, NavLinkButton } from '@/components/ui/common/Navigation/styles/MobileDrawer';
import theme from '@/components/ui/theme';
import { navItems } from '@/constants/navItems';
import NavMenuMobile from '@/images/NavMenuMobile.svg';
import { Close } from '@mui/icons-material';
import { Collapse, IconButton, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export default function MobileDrawer() {
    const [open, setOpen] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const pathname = usePathname();

    const DrawerList = (
        <DrawerContent role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navItems.map(({ label, path, type, children }, index) => {
                    if (type === 'nav') {
                        return (
                            <Link href={path ? path : '/'} passHref={true} key={index}>
                                <NavLinkButton pathname={pathname} path={path ? path : '/'}>
                                    {label}
                                </NavLinkButton>
                            </Link>
                        );
                    } else if (type === 'menu' && children) {
                        return (
                            <React.Fragment key={index}>
                                <NavLinkButton pathname={pathname} path={path ? path : '/'} onClick={() => setMenuOpen(!menuOpen)}>
                                    {label}
                                </NavLinkButton>
                                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        {children.map(({ label: childLabel, path: childPath }, childIndex) => (
                                            <ListItem key={childIndex} sx={{ pl: 4 }}>
                                                <Link href={childPath ? childPath : '/'} passHref={true}>
                                                    <ListItemText primary={childLabel} />
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        );
                    }
                })}
            </List>
            <IconButton sx={{ color: theme.palette.primary.main }}>
                <Close />
            </IconButton>
        </DrawerContent>
    );

    return (
        <>
            <Image onClick={toggleDrawer(true)} src={NavMenuMobile} alt={'Menu'} />
            <Drawer anchor="top" open={open} onClose={toggleDrawer(true)}>
                {DrawerList}
            </Drawer>
        </>
    );
}
