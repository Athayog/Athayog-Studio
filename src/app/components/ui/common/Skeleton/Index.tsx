import React from 'react';
import { Skeleton } from '@mui/material';
import { SkeletonType, SkeletonTypes } from '@/constants/skeleton';

interface SkeletonProps {
    type: SkeletonType;
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    loading: boolean;
    children?: React.ReactNode;
}

const Skeletons: React.FC<SkeletonProps> = ({ type, width = '100%', height = '100%', borderRadius, loading, children }) => {
    const skeletonStyle = {
        width,
        height,
        borderRadius,
    };

    return (
        <div>
            {loading ? (
                <>
                    {type === SkeletonTypes.LOGIN && (
                        <>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="rectangular" width={210} height={60} />
                            <Skeleton variant="rounded" width={210} height={60} />
                        </>
                    )}
                    {type === SkeletonTypes.SIGNUP && <Skeleton variant="rectangular" style={skeletonStyle} />}
                    {type === SkeletonTypes.BLOG && <Skeleton variant="rectangular" style={skeletonStyle} />}
                </>
            ) : (
                children
            )}
        </div>
    );
};

export default Skeletons;
