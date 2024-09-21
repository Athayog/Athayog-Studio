import { Box, Typography } from '@mui/material';

const Details = ({ title, description }: { title: string; description: string }) => {
    return (
        <Box sx={{ maxWidth: '1000px', textAlign: 'center' }}>
            <Typography sx={{ color: '#284E01', fontSize: { xs: '33px', md: '42px' }, fontWeight: '700' }}>{title}</Typography>
            <Typography sx={{ fontSize: { xs: '18px', md: '26px' }, marginTop: { xs: '30px', md: '40px' } }}>{description}</Typography>
        </Box>
    );
};

const DetailsData = [
    {
        title: 'Athayog Personal Sessions',
        description:
            'Eliminate the distractions and keep your focus intact on your Yogic practice as you welcome change and break the patterns with Athayog Personal Sessions. In the personal sessions, you can expect a more customised and structured  approach to learning that suits your needs.',
    },
    {
        title: 'What is Yoga Personal Training ?',
        description:
            'At Athayog Living, our Yoga Personal Training program offers a bespoke experience tailored to your unique needs, goals, and lifestyle. Combining the wisdom of ancient yoga practices with the relevance of modern values, our sessions are designed to help you achieve optimal physical, mental and spiritual well-being. Under the guidance of experienced and certified yoga instructors, each session is customised to align with your individual progress, ensuring a transformative journey that is both effective and deeply personal.',
    },
];

const Content = () => {
    return (
        <Box sx={{ background: '#E7FAE3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: { xs: '20px', md: '60px 130px' }, gap: '50px' }}>
            {DetailsData.map((data) => (
                <Details key={data.title} {...data} />
            ))}
        </Box>
    );
};

export default Content;
