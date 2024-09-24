import Button from '@/app/components/ui/common/Button';
import Title from '@/app/components/ui/common/Typography/Title';
import { Box, Typography, Grid } from '@mui/material';

const Packages = [
    { id: 1, name: '1 Month', type: 'Indirangar', days: 30, price: '2999' },
    { id: 2, name: '2 Month', type: 'Indirangar', days: 30, price: '3999' },
    { id: 3, name: '3 Month', type: 'Indirangar', days: 30, price: '4999' },
    { id: 4, name: '4 Month', type: 'Indirangar', days: 30, price: '5999' },
    { id: 5, name: '5 Month', type: 'Indirangar', days: 30, price: '6999' },
    { id: 6, name: 'Group Class', type: 'Walk In', days: 30, price: '6999' },
    { id: 7, name: 'Weekend Package', type: '8 Sessions', days: 30, price: '6999' },
    { id: 8, name: 'Complete 1 Year', type: '1 Year', days: 30, price: '6999' },
];

const PackagesBox = ({ name, type, days, price }: { name: string; type: string; days: number; price: string }) => {
    return (
        <Box
            sx={{
                background: '#f5ffef',
                padding: { xs: '20px 25px', md: '30px 40px' },
                borderRadius: '12px',
                border: '1.838px solid #549610',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'baseline',
            }}
        >
            <Typography sx={{ fontSize: { xs: '25px', md: '38px' }, color: '#303030', fontWeight: '600', textAlign: 'center' }}>{name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: { xs: '11px', md: '20px' }, width: '100%', color: '#606060' }}>
                <Typography sx={{ fontSize: { xs: '21px', md: '32px' }, fontWeight: '400', textAlign: 'center' }}>{type}</Typography>
                <Typography sx={{ fontSize: { xs: '21px', md: '32px' }, fontWeight: '400', textAlign: 'center' }}>{days} Days</Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: '30px', md: '45px' }, color: '#303030', fontWeight: '600', textAlign: 'center', marginTop: { xs: '10px', md: '15px' } }}>{price}</Typography>
            <Button sx={{ background: ' linear-gradient(92deg, #42740E 24.16%, #65B710 166.68%)', color: '#fff', alignSelf: 'flex-end' }}>Register</Button>
        </Box>
    );
};

const Subscription = () => {
    const IndiranagarPackages = Packages.filter((item) => item.type === 'Indirangar');
    const OtherPackages = Packages.filter((item) => item.type !== 'Indirangar');

    return (
        <>
            <Box sx={{ background: '#EAFEDF', blur: '100px' }}></Box>
            <Box
                sx={{
                    background: '#EAFEDF',
                    height: '100%',
                    margin: 0,
                    padding: { xs: '30px 10px', md: '60px 50px' },
                }}
            >
                <Box sx={{ maxWidth: { xs: '100%', md: '1200px' }, margin: '0 auto' }}>
                    <Title sx={{ color: '#2A5200' }}>Pricing</Title>

                    <Box>
                        <Typography sx={{ fontSize: { xs: '18px', md: '48px' }, fontWeight: '400', textAlign: 'center', color: '#284E01' }}>Subscription for Indiranagar</Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: { xs: '0px', md: '20px' }, flexDirection: 'column' }}>
                            {' '}
                            <Grid container xs={12} lg={12} spacing={4} sx={{ marginTop: { xs: '0px', md: '20px' } }}>
                                {IndiranagarPackages.map((item) => (
                                    <Grid item xs={12} md={6} key={item.id}>
                                        <PackagesBox name={item.name} type={item.type} days={item.days} price={item.price} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '32px', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: { xs: '32px', md: '48px' }, fontWeight: '400', textAlign: 'center', color: '#284E01' }}>Other Categories</Typography>
                        <Grid container xs={12} lg={12} spacing={4} sx={{ marginTop: { xs: '0px', md: '20px' } }}>
                            {OtherPackages.map((item) => (
                                <Grid item xs={12} md={6} key={item.id}>
                                    <PackagesBox name={item.name} type={item.type} days={item.days} price={item.price} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box sx={{ marginTop: '60px', fontSize: { xs: '16px', md: '32px' } }}>
                        <Typography sx={{ fontSize: { xs: '16px', md: '32px' } }}>*Terms and conditions apply</Typography>
                        <Typography sx={{ fontSize: { xs: '16px', md: '32px' } }}>*The prices do not include 18% GST</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Subscription;
