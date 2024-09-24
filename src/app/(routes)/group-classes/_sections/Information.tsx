import Button from '@/app/components/ui/common/Button';
import Title from '@/app/components/ui/common/Typography/Title';
import { Box, Typography } from '@mui/material';

const pros = [
    'Clarity of teacher’s demonstration and voice',
    'Physical correction',
    'Experience of group energy as you practise with others',
    'The advantage of physical space to practise',
    'Teacher-Student connection/ bond e.g., eye-eye contact with teacher and reassuring physical presence',
];

const cons = [
    'Travel to the studio',
    'Fear of COVID-19 safety among students',
    'Need to allot time for both practise and travel',
    'During monsoon and winter weather, the student has to plan their time and commute',
    'Being on time is crucial',
];

const Information = () => {
    return (
        <>
            <Box
                sx={{
                    background: 'linear-gradient(120deg, rgba(100, 188, 202,0.5) 0%, rgba(151, 235, 185,0.5) 50%, rgba(160, 233, 178,0.5) 100%)',
                    height: '100%',
                    padding: { xs: '30px 20px', md: '60px 50px' },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
                    <Title sx={{ color: '#2A5200' }}>Athayog Group Classes</Title>
                    <Button variant="contained" sx={{ marginTop: '30px', backgroundColor: 'linear-gradient(92deg, #42740E 24.16%, #65B710 166.68%)' }}>
                        Join Now
                    </Button>
                    <Typography sx={{ fontSize: { xs: '18px', md: '24px' }, fontWeight: '400', textAlign: 'center', marginTop: '60px' }}>
                        Transform your practice in our empowering group yoga sessions. Immerse yourself in a supportive community, fostering positive lifestyle changes. Discover the harmony of mind,
                        body, and soul. Join us on a journey to elevate your well-being through the ancient wisdom of yoga. Embrace the power of connection and wellness with us today
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', maxWidth: '1400px', margin: '60px auto 0px auto' }}>
                    <Title sx={{ color: '#2A5200' }}>Pros & Cons</Title>

                    <Box sx={{ borderRadius: { xs: '12px', md: '40px' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, overflow: 'hidden', marginTop: '30px' }}>
                        <Box sx={{ borderRadius: { xs: '12px', md: '0px' }, overflow: 'hidden' }}>
                            <Box sx={{ padding: '10px', backgroundColor: '#fff' }}>
                                <Typography sx={{ fontSize: { xs: '20px', md: '38px' }, fontWeight: '600', textAlign: 'center', color: '#3D7403' }}>Pros</Typography>
                            </Box>

                            <Box sx={{ backgroundColor: '#F4FFE8', padding: { xs: '10px 0px', md: '20px 10px' }, color: '#3D7403', height: '100%', fontSize: { xs: '14px', md: '20px' } }}>
                                <ol>
                                    {pros.map((pro) => (
                                        <li key={pro} style={{ marginTop: '10px' }}>
                                            {pro}
                                        </li>
                                    ))}
                                </ol>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: { xs: '20px', md: '0px' }, backgroundColor: '#fff', borderRadius: { xs: '12px', md: '0px' }, overflow: 'hidden' }}>
                            <Box sx={{ padding: '10px' }}>
                                <Typography sx={{ fontSize: { xs: '20px', md: '38px' }, fontWeight: '600', textAlign: 'center', color: '#C42B2B' }}>Cons</Typography>
                            </Box>
                            <Box sx={{ backgroundColor: '#FFF1F1', padding: { xs: '10px 0px', md: '20px 10px' }, color: '#C42B2B', height: '100%', fontSize: { xs: '14px', md: '20px' } }}>
                                <ol>
                                    {cons.map((con) => (
                                        <li key={con} style={{ marginTop: '10px' }}>
                                            {con}
                                        </li>
                                    ))}
                                </ol>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Information;
