'use client';
import { Box } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface BannerProps {
    imageSrc: { xs?: string | StaticImageData; sm?: string | StaticImageData; md?: string | StaticImageData; lg?: string | StaticImageData; xl?: string | StaticImageData };
    imageAlt: string;
    height: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
    children: React.ReactNode;
    objectPosition: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string }; // Adjusted for responsive objectPosition
}

const Banner: React.FC<BannerProps> = ({ imageSrc, imageAlt, height, objectPosition, children }) => {
    const [selectedImageSrc, setSelectedImageSrc] = useState(imageSrc.xs);
    const [selectedObjectPosition, setSelectedObjectPosition] = useState(objectPosition.xs); // Default to xs

    useEffect(() => {
        const updateImageSrcAndPosition = () => {
            const width = window.innerWidth;

            // Update the selected image source based on the width
            if (width >= 1536 && imageSrc.xl) {
                setSelectedImageSrc(imageSrc.xl);
                setSelectedObjectPosition(objectPosition.xl || objectPosition.xs);
            } else if (width >= 1200 && imageSrc.lg) {
                setSelectedImageSrc(imageSrc.lg);
                setSelectedObjectPosition(objectPosition.lg || objectPosition.xs);
            } else if (width >= 900 && imageSrc.md) {
                setSelectedImageSrc(imageSrc.md);
                setSelectedObjectPosition(objectPosition.md || objectPosition.xs);
            } else if (width >= 600 && imageSrc.sm) {
                setSelectedImageSrc(imageSrc.sm);
                setSelectedObjectPosition(objectPosition.sm || objectPosition.xs);
            } else {
                setSelectedImageSrc(imageSrc.xs);
                setSelectedObjectPosition(objectPosition.xs);
            }
        };

        updateImageSrcAndPosition();
        window.addEventListener('resize', updateImageSrcAndPosition);
        return () => {
            window.removeEventListener('resize', updateImageSrcAndPosition);
        };
    }, [imageSrc, objectPosition]);

    if (!selectedImageSrc) return null;

    return (
        <Box sx={{ position: 'relative', height, overflow: 'hidden' }}>
            <Image
                fill
                style={{ objectFit: 'cover', objectPosition: selectedObjectPosition }} // Use the selected object position
                src={selectedImageSrc}
                alt={imageAlt}
            />
            <Box
                sx={{
                    position: 'relative',
                    color: 'white',
                    height: '100%',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Banner;
