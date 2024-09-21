'use client';
import { Hero, Helps, Causes, Enroll, WhyJoin, Symptoms, YogaPractices } from '@/app/(routes)/pcos-yoga/_sections';
import { Box } from '@mui/material';
const Page = () => {
    return (
        <div>
            <Box
                sx={{
                    background:
                        ' linear-gradient(56deg, rgba(220, 84, 141, 1) 0%, rgba(254,186,207,1) 23%, rgba(255,189,206,1) 32%, rgba(254,202,204,1) 49%, rgba(254,208,208,1) 63%, rgba(254,184,209,1) 80%, rgba(253,211,215,1) 86%, rgba(254,199,231,1) 100%)',
                }}
            >
                <Hero />
                <Causes />
                <Helps />
                <Symptoms />
                <YogaPractices />
                <WhyJoin />
                <Enroll />
            </Box>
        </div>
    );
};

export default Page;
