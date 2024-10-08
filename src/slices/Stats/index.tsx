'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import StatsAdiyogiSvg from '@/app/images/stats-adiyogi.svg';
import StatsCalendarSvg from '@/app/images/stats-calendar.svg';
import StatsGraduateSvg from '@/app/images/stats-graduate.svg';
import StateTransformationSvg from '@/app/images/stats-transformation.svg';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';

/**
 * Props for `Stats`.
 */
export type StatsProps = SliceComponentProps<Content.StatsSlice>;

/**
 * Component for "Stats" Slices.
 */

// Styled components
const StatBox = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'none',

    width: '200px',
    [theme.breakpoints.down('md')]: {
        backgroundColor: '#eff3e4',
        borderRadius: '7.978px ',
        width: '120px',
    },
    svg: {
        width: '45px',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '35px',
        },
    },
}));

const StatCount = styled(Typography)(({ theme }) => ({
    fontSize: '60px',
    color: '#416c27',
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down('md')]: {
        fontSize: '46px',
        margin: 0,
    },
}));

const StatName = styled(Typography)(({ theme }) => ({
    fontSize: '26px',
    color: '#404040',
    [theme.breakpoints.down('md')]: {
        fontSize: '17px',
    },
}));

const statsData: Stat[] = [
    {
        id: 1,
        name: 'Graduates',
        count: 50,
        icon: StatsGraduateSvg,
    },
    {
        id: 2,
        name: 'Athayogis',
        count: 850,
        icon: StatsAdiyogiSvg,
    },
    {
        id: 3,
        name: 'Transformation',
        count: 30,
        icon: StateTransformationSvg,
    },
    {
        id: 4,
        name: 'Events',
        count: 20,
        icon: StatsCalendarSvg,
    },
];

const Stats = ({ slice }: StatsProps): JSX.Element => {
    return (
        <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
            <SectionPadding>
                <SectionContent>
                    <Grid container spacing={4} gap={{ xs: '20px', md: '30px', lg: '80px' }} justifyContent="center" component="div">
                        {slice.primary.statename.map((stat, index) => {
                            const Icon = statsData[index].icon;
                            return (
                                <Grid key={index} component="div">
                                    <StatBox>
                                        <Icon />
                                        <StatCount>{stat.count}+</StatCount>
                                        <StatName>{stat.name}</StatName>
                                    </StatBox>
                                </Grid>
                            );
                        })}
                    </Grid>
                </SectionContent>
            </SectionPadding>
        </section>
    );
};

export default Stats;
