'use client';
import MobileDrawer from '@/app/components/ui/common/Navigation/MobileDrawer';
import { RenderMenuItems } from '@/app/components/ui/common/Navigation/RenderMenuItems';
import {
    Menu,
    MenuButton,
    NavContainer,
    NavLinkButton,
    Toolbar,
    TrialButton,
    TrialAndAuth,
} from '@/app/components/ui/common/Navigation/styles/Index';
import { navItems } from '@/app/constants/navItems';
import Logo from '@/app/images/Logo.png';
import { AppBar, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useThemeStore from '@/store/useThemeStore';
import AccountMenu from '@/app/components/ui/common/Navigation/AccountMenu';
import useAuthStore from '@/store/useAuthStore';
import ScrollListener from '@/hooks/ScrollListener';

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<HTMLElement | null>(null);
    const pathname = usePathname();
    const { navigationVariant, isScrolled } = useThemeStore();

    const handleClick = (event: React.MouseEvent<HTMLElement>, children?: unknown[]) => {
        setAnchorEl(event.currentTarget);
        if (children) {
            setSubMenuAnchorEl(null);
        }
    };

    const handleSubMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setSubMenuAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null);
    };

    const initializeAuth = useAuthStore((state) => state.initializeAuth);

    useEffect(() => {
        const unsubscribe = initializeAuth();
        return unsubscribe;
    }, [initializeAuth]);

    return (
        <AppBar
            position="fixed"
            sx={{
                transition: 'background-color 0.8s ease-in-out', // Add transition for smooth animation
                backgroundColor: isScrolled ? '#556940' : 'transparent', // Dynamically change based on scroll
                boxShadow: 'none',
                padding: '14px 20px',
            }}
        >
            <ScrollListener />
            <Toolbar navigationVariant={navigationVariant}>
                <Box
                    sx={{
                        width: { xs: 52, sm: 52, md: 52 },
                        height: { xs: 52, sm: 52, md: 52 },
                    }}
                >
                    <Link href={'/'} passHref={true}>
                        {' '}
                        <Image
                            src={Logo}
                            alt="athayog logo"
                            width={67}
                            height={67}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Link>
                </Box>

                <NavContainer>
                    {navItems.map(({ label, path, type, children }, index) => {
                        if (type === 'nav') {
                            return (
                                <Link href={path ? path : '/'} passHref={true} key={index}>
                                    <NavLinkButton
                                        variant="text"
                                        pathname={pathname}
                                        path={path ? path : '/'}
                                        navigationVariant={navigationVariant}
                                    >
                                        {label}
                                    </NavLinkButton>
                                </Link>
                            );
                        } else if (type === 'menu' && children) {
                            return (
                                <React.Fragment key={index}>
                                    <MenuButton
                                        variant="text"
                                        aria-controls={anchorEl ? `submenu-${index}` : undefined}
                                        aria-haspopup="true"
                                        onClick={(event) => handleClick(event, children)}
                                    >
                                        {label}
                                    </MenuButton>
                                    <Menu
                                        id={`submenu-${index}`}
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': `submenu-button-${index}`,
                                        }}
                                    >
                                        {RenderMenuItems(children, handleClose, handleSubMenuClick, subMenuAnchorEl)}
                                    </Menu>
                                </React.Fragment>
                            );
                        }
                    })}
                </NavContainer>
                <TrialAndAuth>
                    <Link href={'/login'} passHref={true}>
                        <TrialButton variant="text">
                            Get a<span>Free Trial</span>
                        </TrialButton>
                    </Link>
                    <AccountMenu />
                </TrialAndAuth>

                <MobileDrawer />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
