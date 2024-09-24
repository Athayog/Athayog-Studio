import { Box, Typography } from '@mui/material';

const TrainingBox = ({ title, description }: { title: string; description: string }) => {
    return (
        <Box
            sx={{
                borderRadius: '8px',
                border: '2px solid rgba(145, 216, 154, 0.50)',
                background: '#D3F2C4',
                padding: '20px',
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
                maxWidth: { xs: '100%', lg: '620px' },
            }}
        >
            <Typography sx={{ color: '#00000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '700' }}>{title}</Typography>
            <Typography sx={{ color: '#00000', fontSize: { xs: '17px', md: '30px' }, fontWeight: '400', marginTop: { xs: '14px', md: '26px' } }}>{description}</Typography>
        </Box>
    );
};

const ContentData = [
    {
        title: 'Inner World',
        description:
            'Explore the subtler levels of your mind through the systemic practice of Yoga Nidra. A practice that comes traditionally from Bihar School of Yoga which helps in deep physical and mental relaxation and takes you closer to a meditative state of mind.',
    },
    {
        title: 'Universal Harmony',
        description: 'A practice that involves body, breath & mind practices. Asanas for body, Pranayama for breath & meditation for mind.',
    },
    {
        title: 'Rhythm of Being',
        description: 'Perfect alignment of the body & skilful breathing is the goal of this practice. Involve in a session of chosen asanas to help build body & breath connect.',
    },
    {
        title: 'Hatha Pradipika',
        description: 'Learn the intricate details of asanas practice as mentioned in the Hatha Yoga Pradipika scripture written by Swatmarama which helps you develop mental and spiritual awareness.',
    },
    {
        title: 'Ashtanga Yoga',
        description:
            'A traditional yoga sequence designed by great masters T Krishnamacharya and Pattabi Jois with a fixed sequence of asana practice along with the other limbs of yoga stitched together into one piece of practice.',
    },
    {
        title: 'Transcending Transitions',
        description: 'Flow into your body using your breath. Enhance your asana practice thought combination of posture sequenced together with conscious breathing.',
    },
    {
        title: 'Adv. Hatha Yoga',
        description:
            'A traditional yoga sequence designed by great masters T Krishnamacharya and Pattabi Jois with a fixed sequence of asana practice along with the other limbs of yoga stitched together into one piece of practice.',
    },
    {
        title: 'Power Vinyasa',
        description:
            'Combining the concepts of exercise by the east & the west and unifying into one practice. Using methods developed in the modern science and traditional wisdom of yoga through practice of asanas and movements.',
    },
    {
        title: 'Special Ladies Batch',
        description:
            'An exclusive hour only for women with yoga practices especially curated for the betterment of womens’ physical, mental & emotional wellbeing. This is an all exclusive session open only to women.',
    },
];

const ClassFormats = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #E7FAE3, #e7ead8)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: { xs: '40px 20px', lg: '60px 130px' },
                gap: { xs: '30px', md: '50px' },
            }}
        >
            <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: '#284E01', fontSize: { xs: '33px', md: '42px' }, fontWeight: '700' }}>Class Formats</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 3,
                    maxWidth: { xs: '100%', md: '1440px' },
                    margin: '0 auto',
                }}
            >
                {ContentData.map((data) => (
                    <TrainingBox key={data.title} {...data} />
                ))}
            </Box>
        </Box>
    );
};

export default ClassFormats;
