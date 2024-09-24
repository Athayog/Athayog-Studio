import { SxProps, Typography, TextAlign } from '@mui/material';
import React from 'react';

interface SubTitleProps {
    children: React.ReactNode;
    textAlign?: TextAlign;
    sx?: SxProps;
}

const SubTitle: React.FC<SubTitleProps> = ({ children, textAlign = 'center', sx }) => {
    return (
        <Typography
            sx={{
                fontSize: { xs: '18px', md: '24px' },
                textAlign,
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};

export default SubTitle;
