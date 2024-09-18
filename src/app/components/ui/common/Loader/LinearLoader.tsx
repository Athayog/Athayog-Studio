import React from 'react';
import { LinearProgress, Box } from '@mui/material';

const LinearLoader: React.FC = () => (
    <Box
        sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 9999,
        }}
    >
        <LinearProgress />
    </Box>
);

export default LinearLoader;
