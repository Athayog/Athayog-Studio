'use client';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import YogaPoseSvg from '@/app/images/personal-session/yoga.svg';

const mockData = [
    { title: 'Yoga Studio Class', days: '12 days', type: 'studio', price: '₹7500' },
    { title: 'Onsite Yoga Training', days: '12 days', type: 'onsite', price: '₹11250' },
    { title: 'Online Yoga Session', days: '10 days', type: 'online', price: '₹6000' },
    { title: 'Hybrid Yoga Class', days: '4 days', type: 'studio', price: '₹9000' },
    { title: 'Corporate Yoga Onsite', days: '7 days', type: 'onsite', price: '₹15000' },
    { title: 'Virtual Yoga Workshop', days: '10 days', type: 'online', price: '₹3750' },
    { title: 'Beginner Yoga Studio Class', days: '8 days', type: 'studio', price: '₹6000' },
    { title: 'Advanced Yoga Onsite', days: '10 days', type: 'onsite', price: '₹12500' },
    { title: 'Prenatal Yoga Online', days: '6 days', type: 'online', price: '₹4500' },
    { title: 'Yoga Therapy Onsite', days: '5 days', type: 'onsite', price: '₹10000' },
    { title: 'Meditation & Yoga Combo', days: '3 days', type: 'studio', price: '₹4000' },
    { title: 'Power Yoga Session', days: '5 days', type: 'online', price: '₹3200' },
    { title: 'Private Yoga Class', days: '6 days', type: 'studio', price: '₹8500' },
    { title: 'Yoga for Seniors Onsite', days: '4 days', type: 'onsite', price: '₹5000' },
    { title: 'Restorative Yoga Online', days: '8 days', type: 'online', price: '₹6000' },
    { title: 'Yoga for Weight Loss', days: '7 days', type: 'studio', price: '₹7000' },
    { title: 'Chair Yoga Onsite', days: '3 days', type: 'onsite', price: '₹4000' },
    { title: 'Ashtanga Yoga Online', days: '9 days', type: 'online', price: '₹7500' },
    { title: 'Hot Yoga Studio Class', days: '6 days', type: 'studio', price: '₹9000' },
    { title: 'Kids Yoga Onsite', days: '5 days', type: 'onsite', price: '₹7000' },
    { title: 'Vinyasa Flow Yoga Online', days: '10 days', type: 'online', price: '₹7200' },
    { title: 'Hatha Yoga Studio Class', days: '12 days', type: 'studio', price: '₹8500' },
    { title: 'Corporate Virtual Yoga', days: '5 days', type: 'online', price: '₹10000' },
    { title: 'Yoga for Beginners Online', days: '8 days', type: 'online', price: '₹5000' },
    { title: 'Pilates & Yoga Combo', days: '4 days', type: 'studio', price: '₹9500' },
    { title: 'Power Yoga Onsite', days: '6 days', type: 'onsite', price: '₹8500' },
    { title: 'Healing Yoga Online', days: '5 days', type: 'online', price: '₹6000' },
    { title: 'Dynamic Yoga Studio Class', days: '9 days', type: 'studio', price: '₹8000' },
    { title: 'Holistic Yoga Onsite', days: '10 days', type: 'onsite', price: '₹12000' },
    { title: 'Sun Salutation Workshop', days: '7 days', type: 'online', price: '₹7000' },
];

const typesOptions = ['all', ...Array.from(new Set(mockData.map((data) => data.type)))];
const AdvantagesBox = ({ title, days, type, price }: { title: string; days: string; type: string; price: string }) => {
    const getColorType = (type: string) => {
        switch (type) {
            case 'studio':
                return '#519E05';
            case 'onsite':
                return '#3E7A00';
            case 'online':
                return '#284E01';
            default:
                return '#000000'; // default color if type doesn't match
        }
    };

    //TODO: Get color types from UI Team
    // Usage example
    const COLORTYPE = getColorType(type);
    return (
        <Box
            sx={{
                borderRadius: '12px',
                border: '3px solid ' + COLORTYPE,
                background: '#FFFFFF',
                padding: { xs: '15px 20px', lg: '25px 40px' },
                minWidth: '300px',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left',
                alignItems: 'baseline',
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
            }}
        >
            <Typography sx={{ fontWeight: '600', fontSize: { xs: '26px', md: '40px' } }}>{title}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Typography sx={{ marginTop: '10px', fontWeight: '500', fontSize: { xs: '20px', md: '30px' } }}>{days} Days</Typography>
                <Typography sx={{ marginTop: '10px', fontWeight: '500', fontSize: { xs: '20px', md: '30px' } }}>At: {type}</Typography>
            </Box>
            <Typography sx={{ marginTop: '10px', fontWeight: '600', fontSize: { xs: '20px', md: '45px' } }}>{price}</Typography>
        </Box>
    );
};

const Pricing: React.FC = () => {
    const [selectedType, setSelectedType] = useState('all');

    const handleTypeChange = (type: string) => {
        setSelectedType(type);
    };

    const filteredData = selectedType === 'all' ? mockData : mockData.filter((data) => data.type === selectedType);

    const transitions = useTransition(filteredData, {
        keys: (item) => item.title,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 100 },
    });

    return (
        <Box
            sx={{
                background: 'linear-gradient(to bottom, #dffad1, #e5fbd3)',
                padding: { xs: '40px 20px', lg: '60px 100px' },
            }}
        >
            <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
                <Typography sx={{ color: '#284E01', fontSize: { xs: '33px', md: '42px' }, fontWeight: '700' }}>Pricing</Typography>
                <Typography sx={{ color: '#000', fontSize: { xs: '18px', md: '30px' }, fontWeight: '400' }}>
                    Note: <span style={{ color: '#3E7A00' }}>1 free trial</span> class - Will be provided on request.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: { xs: 1, lg: 2 }, marginBottom: '30px' }}>
                {typesOptions.map((type) => (
                    <Button
                        key={type}
                        variant={selectedType === type ? 'contained' : 'outlined'}
                        sx={{
                            fontSize: { xs: '13px', md: '36px' },
                            borderRadius: '100px',
                            maxWidth: '200px',
                            backgroundColor: selectedType === type ? '#519E05' : '#FFFFFF',
                            color: selectedType === type ? '#FFFFFF' : '#000000',
                            padding: '5px 40px',
                            textTransform: 'capitalize',
                        }}
                        onClick={() => handleTypeChange(type)}
                    >
                        {type}
                    </Button>
                ))}
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 540px)' },
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: { xs: '40px', md: '80px' },
                }}
            >
                {filteredData.length === 0
                    ? Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} variant="rectangular" width="100%" height={250} sx={{ borderRadius: '12px' }} />)
                    : transitions((style, item) => (
                          <animated.div style={style} key={item.title}>
                              <AdvantagesBox {...item} />
                          </animated.div>
                      ))}
            </Box>

            <Box sx={{ marginTop: '60px', fontSize: { xs: '16px', md: '32px' } }}>
                <Typography sx={{ fontSize: { xs: '16px', md: '32px' } }}>*Terms and conditions apply</Typography>
                <Typography sx={{ fontSize: { xs: '16px', md: '32px' } }}>*The prices do not include 18% GST</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: { xs: '40px', md: '80px' }, width: '100%', flexDirection: 'column', gap: '36px', alignItems: 'center' }}>
                <Typography sx={{ color: '#000000', textAlign: 'center', fontSize: { xs: '28px', md: '42px' }, fontWeight: '700' }}>Contact us for more information</Typography>
                <Button variant="contained" sx={{ borderRadius: '100px', height: '56px', fontSize: '24px', padding: '20px 40px', maxWidth: 'content' }}>
                    Enquire Now
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        borderRadius: '130px',
                        backgroundColor: '#dbf6d1',
                        padding: '16px',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <YogaPoseSvg style={{ height: '40px', width: '40px' }} />
                    <Typography sx={{ fontSize: { xs: '16px', md: '20px' } }}>Note: 1 free trial class will be provided on request.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Pricing;
