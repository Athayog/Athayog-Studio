import React, { useState } from 'react';
import RegisterButton from '@/app/components/ui/common/elements/button/RegisterButton';
import { SectionContent, SectionPadding } from '@/app/components/ui/pages/home/styles/Layout';
import theme from '@/app/styles/theme';
import { TableRow as MuiTableRow, TableCell as MuiTableCell, Table as MuiTable } from '@mui/material';
import { Box, Button, TableRow, TableBody, TableContainer, TableHead, Paper, Typography, styled } from '@mui/material';

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: '20px',
    textAlign: 'end',
    fontSize: '48px',
    fontWeight: 700,
    [theme.breakpoints.down('md')]: {
        fontSize: '32px',
        textAlign: 'center',
        width: '100%',
    },
}));

const StyledButton = styled(RegisterButton)(({ theme }) => ({
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
        marginTop: '20px',
        fontSize: '18px',
        height: '50px',
        width: '173px',
    },
}));

const TableCell = styled(MuiTableCell)(() => ({
    '&:first-of-type': {
        borderTopLeftRadius: '46px',
        borderBottomLeftRadius: '46px',
    },
    '&:last-of-type': {
        borderTopRightRadius: '46px',
        borderBottomRightRadius: '46px',
    },
    [theme.breakpoints.down('md')]: {
        '&:first-of-type': {
            borderTopLeftRadius: '0px',
            borderBottomLeftRadius: '0px',
        },
        '&:last-of-type': {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
        },
    },
    borderBottom: 'none',
}));

const TableRowBody = styled(MuiTableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(132, 162, 118, 0.1)',
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'rgba(162, 205, 177, 0.25)',
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Table = styled(MuiTable)(() => ({
    borderSpacing: '0 18px',
    borderCollapse: 'separate',
    maxWidth: '800px',
    margin: '0 auto',
    fontWeight: '600',
}));

const data = {
    January: [
        { date: '2024-01-01', time: '10:00 AM', topic: 'Yoga Basics', teacher: 'John Doe' },
        { date: '2024-01-05', time: '11:00 AM', topic: 'Advanced Yoga', teacher: 'Jane Smith' },
        { date: '2024-01-10', time: '09:00 AM', topic: 'Meditation Techniques', teacher: 'Alice Johnson' },
        { date: '2024-01-15', time: '02:00 PM', topic: 'Yoga Philosophy', teacher: 'Bob Brown' },
    ],
    February: [
        { date: '2024-02-01', time: '10:00 AM', topic: 'Vinyasa Flow', teacher: 'Emily Davis' },
        { date: '2024-02-05', time: '11:00 AM', topic: 'Hatha Yoga', teacher: 'Michael Lee' },
        { date: '2024-02-10', time: '09:00 AM', topic: 'Pranayama', teacher: 'Sarah Wilson' },
        { date: '2024-02-15', time: '02:00 PM', topic: 'Yoga for Beginners', teacher: 'David Martinez' },
    ],
    March: [
        { date: '2024-03-01', time: '10:00 AM', topic: 'Restorative Yoga', teacher: 'Laura White' },
        { date: '2024-03-05', time: '11:00 AM', topic: 'Power Yoga', teacher: 'Chris Clark' },
        { date: '2024-03-10', time: '09:00 AM', topic: 'Yoga and Mindfulness', teacher: 'Olivia Lewis' },
        { date: '2024-03-15', time: '02:00 PM', topic: 'Yin Yoga', teacher: 'James Hall' },
    ],
};

const YogaTable: React.FC = () => {
    type MonthKey = keyof typeof data;
    const [selectedMonth, setSelectedMonth] = useState<MonthKey>('January');
    const handleMonthChange = (month: MonthKey) => {
        setSelectedMonth(month);
    };

    return (
        <SectionPadding>
            <SectionContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Title variant="h2">Upcoming Workshops</Title>
                    <TableContainer
                        component={Paper}
                        sx={{
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }}
                    >
                        <Table>
                            <TableHead>
                                <TableRow sx={{ color: '#4E4E4E' }}>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Time</TableCell>
                                    <TableCell>Topic</TableCell>
                                    <TableCell>Teacher</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data[selectedMonth as keyof typeof data]?.map((row, index) => (
                                    <TableRowBody
                                        key={index}
                                        sx={{
                                            backgroundColor: index % 2 === 0 ? 'rgba(132, 162, 118, 0.1)' : 'rgba(162, 205, 177, 0.25)',
                                        }}
                                    >
                                        <TableCell>{row.date}</TableCell>
                                        <TableCell>{row.time}</TableCell>
                                        <TableCell>{row.topic}</TableCell>
                                        <TableCell>{row.teacher}</TableCell>
                                    </TableRowBody>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        sx={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '30px',
                            backgroundColor: '#f0fee4',
                            borderRadius: '44px',
                            maxWidth: 'max-content',
                            margin: '0 auto',
                            padding: '10px',
                            border: '1px solid rgba(0, 0, 0, 0.20)',
                        }}
                    >
                        {Object.keys(data).map((month) => (
                            <Button key={month} variant={selectedMonth === month ? 'contained' : 'outlined'} onClick={() => handleMonthChange(month as MonthKey)}>
                                {month}
                            </Button>
                        ))}
                    </Box>
                    <StyledButton>Register Now</StyledButton>
                </Box>
            </SectionContent>
        </SectionPadding>
    );
};

export default YogaTable;
