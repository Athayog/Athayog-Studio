import { Box } from '@mui/material';
import Hero from '@/app/components/ui/pages/pcos-yoga/Hero';
import Helps from '@/app/components/ui/pages/pcos-yoga/Helps';
import Causes from '@/app/components/ui/pages/pcos-yoga/Causes';
import Symptoms from '@/app/components/ui/pages/pcos-yoga/Symptoms';
import YogaPractices from '@/app/components/ui/pages/pcos-yoga/YogaPractices';
import WhyJoin from '@/app/components/ui/pages/pcos-yoga/WhyJoin';
import Enroll from '@/app/components/ui/pages/pcos-yoga/Enroll';
const PCOSYoga = () => {
    return (
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
    );
};

export default PCOSYoga;
