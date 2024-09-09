// src/components/Navbar.tsx

'use client';
import React, { useState } from 'react';
import { Box, Menu, Button, Toolbar, AppBar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/constants/navItems';
import { renderMenuItems } from '@/components/ui/common/Navigation/RenderMenuItems';
import Logo from '@/images/Logo.png';
import theme from '@/components/ui/theme';

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<HTMLElement | null>(
        null
    );
    const pathname = usePathname();

    const handleClick = (
        event: React.MouseEvent<HTMLElement>,
        children?: unknown[]
    ) => {
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
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <Image
                        src={Logo}
                        height={67}
                        width={67}
                        alt="athayog logo"
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {navItems.map(({ label, path, type, children }, index) => {
                        if (type === 'nav') {
                            return (
                                <Link
                                    href={path ? path : '/'}
                                    passHref={true}
                                    key={index}
                                >
                                    <Button
                                        variant="text"
                                        sx={{
                                            fontSize: '18px',
                                            color:
                                                pathname === path
                                                    ? theme.palette.primary.main
                                                    : 'white',
                                        }}
                                    >
                                        {label}
                                    </Button>
                                </Link>
                            );
                        } else if (type === 'menu' && children) {
                            return (
                                <React.Fragment key={index}>
                                    <Button
                                        variant="text"
                                        sx={{
                                            color: 'white',
                                            fontSize: '18px',
                                        }}
                                        aria-controls={
                                            anchorEl
                                                ? `submenu-${index}`
                                                : undefined
                                        }
                                        aria-haspopup="true"
                                        onClick={(event) =>
                                            handleClick(event, children)
                                        }
                                    >
                                        {label}
                                    </Button>
                                    <Menu
                                        id={`submenu-${index}`}
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        sx={{
                                            '& .MuiPaper-root': {
                                                borderRadius: '8px',
                                                color: 'white',
                                                backgroundColor:
                                                    'rgba(0, 0, 0, 0.8)', // Adjust the background color here
                                            },
                                        }}
                                        MenuListProps={{
                                            'aria-labelledby': `submenu-button-${index}`,
                                        }}
                                    >
                                        {renderMenuItems(
                                            children,
                                            handleClose,
                                            handleSubMenuClick,
                                            subMenuAnchorEl
                                        )}
                                    </Menu>
                                </React.Fragment>
                            );
                        }
                    })}
                </Box>

                <Box>
                    <Button
                        variant="text"
                        sx={{
                            fontSize: '18px',
                            color: 'black',
                            backgroundColor: 'white',
                            padding: '15px, 25px',
                            width: '174px',
                            fontWeight: '700',
                        }}
                    >
                        Get a{'  '}
                        <span
                            style={{
                                color: theme.palette.primary.main,
                                marginLeft: '5px',
                            }}
                        >
                            {'  '}
                            Free Trial
                        </span>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
