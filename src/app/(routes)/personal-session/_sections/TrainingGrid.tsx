import { Box, Typography } from '@mui/material';

const TrainingBox = ({ title, description }: { title: string; description: string }) => {
    return (
        <Box sx={{ borderRadius: '8px', background: '#FFEEEC', padding: '20px', flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' }, maxWidth: { xs: '100%', lg: '620px' } }}>
            <Typography sx={{ color: '#00000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '700' }}>{title}</Typography>
            <Typography sx={{ color: '#00000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '400', marginTop: { xs: '14px', md: '26px' } }}>{description}</Typography>
        </Box>
    );
};

const ContentData = [
    {
        title: 'Busy Professionals',
        description: 'Those who seek a flexible schedule and personalised attention to manage stress, enhance focus and improve overall health.',
    },
    {
        title: 'Advanced Practitioners',
        description: 'Seasoned yogis looking to deepen their practice, explore advanced techniques or work on specific goals.',
    },
    {
        title: 'Beginners',
        description: 'Individuals new to yoga who prefer a more guided, one-on-one approach to build a solid foundation in yoga practice.',
    },
    {
        title: 'Premium Clientele',
        description: 'Anyone who values a premium, personalised experience that aligns with a lifestyle centered on well being and personal growth.',
    },
];

const TrainingGrid = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #E7FAE3, #e7ead8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '40px 20px', lg: '60px 130px' },
                gap: '50px',
                margin: '-1',
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#284E01', fontSize: { xs: '33px', md: '42px' }, fontWeight: '700' }}>Who Should Consider Yoga Personal Training ? </Typography>
                <Typography sx={{ color: '#284E01', fontSize: { xs: '18px', md: '38px' }, fontWeight: '400' }}>Our Personal Training Yoga is ideal for:</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                }}
            >
                {ContentData.map((data) => (
                    <TrainingBox key={data.title} {...data} />
                ))}
            </Box>
        </Box>
    );
};

export default TrainingGrid;
