'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/images/Logo.png';
import React, { useState } from 'react';
import { AppBar, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/navItems';
import MobileDrawer from '@/components/ui/common/Navigation/MobileDrawer';
import { RenderMenuItems } from '@/components/ui/common/Navigation/RenderMenuItems';
import {
    Menu,
    MenuButton,
    NavContainer,
    NavLinkButton,
    Toolbar,
    TrialButton,
} from '@/components/ui/common/Navigation/styles/Index';

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<HTMLElement | null>(null);
    const pathname = usePathname();

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

    return (
        <AppBar position="fixed" color="transparent">
            <Toolbar>
                <Box
                    sx={{
                        width: { xs: 52, sm: 52, md: 52 },
                        height: { xs: 52, sm: 52, md: 52 },
                    }}
                >
                    <Image
                        src={Logo}
                        alt="athayog logo"
                        width={67}
                        height={67}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>

                <NavContainer>
                    {navItems.map(({ label, path, type, children }, index) => {
                        if (type === 'nav') {
                            return (
                                <Link href={path ? path : '/'} passHref={true} key={index}>
                                    <NavLinkButton variant="text" pathname={pathname} path={path ? path : '/'}>
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
                <Box>
                    <TrialButton variant="text">
                        Get a{'  '}
                        <span>
                            {'  '}
                            Free Trial
                        </span>
                    </TrialButton>
                </Box>

                <MobileDrawer />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
