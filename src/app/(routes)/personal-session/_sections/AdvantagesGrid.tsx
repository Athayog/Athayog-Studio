import { Box, Typography, Grid } from '@mui/material';
import PosesSvg from '@/app/images/personal-session/Poses.svg';

const AdvantagesBox = ({ title, description }: { title: string; description: string }) => {
    return (
        <Grid item xs={12} md={6} lg={6} sx={{ padding: '20px' }}>
            <Box sx={{ borderRadius: '8px', background: '#DBF1D5', padding: '20px', minHeight: { xs: '100%', lg: '370px' } }}>
                <Typography sx={{ color: '#000000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '700' }}>{title}</Typography>
                <Typography sx={{ color: '#000000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '400', marginTop: { xs: '14px', md: '26px' } }}>{description}</Typography>
            </Box>
        </Grid>
    );
};

const ContentData = [
    {
        title: 'Customized Experience',
        description: 'Each session is uniquely tailored to your needs, goals, and preferences, ensuring maximum benefit from your practice.',
    },
    {
        title: 'Flexible Scheduling',
        description: 'Our personal training sessions offer the convenience of scheduling at your preferred time and pace.',
    },
    {
        title: 'Focused Attention',
        description: 'One-on-one guidance allows for a deeper understanding of poses, alignment, and breathing techniques, minimizing the risk of injury and maximizing results.',
    },
    {
        title: 'Progress Tracking',
        description: 'Continuous assessment and adjustments ensure that your practice evolves with you, keeping you motivated and engaged.',
    },
    {
        title: 'Holistic Approach',
        description:
            'Beyond physical fitness, our personal training encompasses mental clarity, emotional balance, and spiritual growth, aligning with our philosophy of "Ancient Yoga and Modern Values".',
    },
];

const AdvantagesGrid: React.FC = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #e7ead8, #dffad1)',
                padding: { xs: '40px 20px', lg: '60px 100px' },
            }}
        >
            <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                <Typography sx={{ color: '#284E01', fontSize: { xs: '33px', md: '42px' }, fontWeight: '700' }}>Advantages of Yoga Personal Training</Typography>
            </Box>
            <Grid container spacing={3}>
                {ContentData.map((data) => (
                    <AdvantagesBox key={data.title} {...data} />
                ))}
                <Grid item xs={12} md={6} lg={6} sx={{ justifyContent: 'flex-end', padding: '20px', display: { xs: 'none', md: 'flex' } }}>
                    <PosesSvg />
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdvantagesGrid;
