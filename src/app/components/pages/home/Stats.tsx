import React from 'react';
import { StatBox } from './styles/Stats';
import StatsGraduateSvg from '@/app/images/stats-graduate.svg';
import StatsAdiyogiSvg from '@/app/images/stats-adiyogi.svg';
import StateTransformationSvg from '@/app/images/stats-transformation.svg';
import StatsCalendarSvg from '@/app/images/stats-calendar.svg';
import { Typography, Stack } from '@mui/material';
import Image from 'next/image';

type Stat = {
    id: number;
    name: string;
    count: number;
    icon: string;
};

const statsData: Stat[] = [
    {
        id: 1,
        name: 'Graduates',
        count: 10,
        icon: StatsGraduateSvg,
    },
    {
        id: 2,
        name: 'Athayogis',
        count: 10,
        icon: StatsAdiyogiSvg,
    },
    {
        id: 3,
        name: 'Transformations',
        count: 10,
        icon: StateTransformationSvg,
    },
    {
        id: 4,
        name: 'Events',
        count: 10,
        icon: StatsCalendarSvg,
    },
];

export default function Stats() {
    return (
        <Stack direction="row" justifyContent="center" gap="150px" spacing={2}>
            {statsData.map((stats) => (
                <StatBox key={stats.id}>
                    <Image src={stats.icon} alt={stats.name} style={{ width: '45px', height: 'auto' }} />
                    <Typography sx={{ fontSize: '60px', color: '#416C27' }}>{stats.count}</Typography>
                    <Typography sx={{ fontSize: '26px', color: '#404040' }}>{stats.name}</Typography>
                </StatBox>
            ))}
        </Stack>
    );
}
