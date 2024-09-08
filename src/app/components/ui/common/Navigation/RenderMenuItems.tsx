// src/utils/renderMenuItems.tsx

import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';

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
                <Link href={path || '#'} passHref key={index}>
                    <MenuItem onClick={handleClose}>{label}</MenuItem>
                </Link>
            );
        } else if (type === 'menu' && children) {
            return (
                <React.Fragment key={index}>
                    <MenuItem
                        onClick={handleSubMenuClick}
                        aria-haspopup="true"
                        aria-controls={`submenu-${index}`}
                    >
                        {label}
                    </MenuItem>
                    <Menu
                        id={`submenu-${index}`}
                        anchorEl={subMenuAnchorEl}
                        open={Boolean(subMenuAnchorEl)}
                        onClose={handleClose}
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
