import { Box } from '@mui/material';
import Image from 'next/image';
import HeroImage from '@/app/images/123.jpg';

export const metadata = {
    title: 'Athayog',
    openGraph: {
        title: 'Athayog',
        description: 'Athayog Living',
    },
};

export default function Home() {
    return (
        <Box
            sx={{
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Image
                src={HeroImage}
                layout="fill"
                objectFit="cover" // Ensures the image covers the container without stretching
                alt="Hero Image"
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                        'linear-gradient(180deg, #101010 1.49%, rgba(33, 10, 10, 0) 69.5%, rgba(107, 138, 76, 0.8) 100%)',
                    pointerEvents: 'none', // Ensures the gradient does not interfere with any interactions
                }}
            />
            {/* Content here */}
            <Box sx={{ position: 'relative', zIndex: 1 }}>sds</Box>
        </Box>
    );
}
