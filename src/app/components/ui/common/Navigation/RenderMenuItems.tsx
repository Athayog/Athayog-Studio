// src/utils/renderMenuItems.tsx

import React from 'react';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

interface MenuItemProps {
    label: string;
    path?: string;
    type?: string;
    children?: MenuItemProps[];
}

export const renderMenuItems = (
    items: MenuItemProps[],
    handleClose: () => void,
    handleSubMenuClick: (event: React.MouseEvent<HTMLElement>) => void,
    subMenuAnchorEl: HTMLElement | null
) => {
    return items.map(({ label, path, type, children }, index) => {
        if (type === 'nav') {
            return (
                <Link
                    href={path || '#'}
                    passHref
                    key={index}
                    style={{ textDecoration: 'none' }}
                >
                    <MenuItem
                        sx={{ color: 'white', textDecoration: 'none' }}
                        onClick={handleClose}
                    >
                        {label}
                    </MenuItem>
                </Link>
            );
        } else if (type === 'menu' && children) {
            return (
                <React.Fragment key={index}>
                    <MenuItem
                        onClick={handleSubMenuClick}
                        aria-haspopup="true"
                        sx={{ color: 'white' }}
                        aria-controls={`submenu-${index}`}
                    >
                        {label} <ArrowRightRoundedIcon />{' '}
                    </MenuItem>
                    <Menu
                        id={`submenu-${index}`}
                        anchorEl={subMenuAnchorEl}
                        open={Boolean(subMenuAnchorEl)}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                        onClose={handleClose}
                        sx={{
                            '& .MuiPaper-root': {
                                borderRadius: '8px',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust the background color here
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
    });
};
