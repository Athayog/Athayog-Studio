import { styled, TableRow as MuiTableRow, TableCell as MuiTableCell, Table as MuiTable } from '@mui/material';

export const TableCell = styled(MuiTableCell)(() => ({
    '&:first-of-type': {
        borderTopLeftRadius: '46px',
        borderBottomLeftRadius: '46px',
    },
    '&:last-of-type': {
        borderTopRightRadius: '46px',
        borderBottomRightRadius: '46px',
    },
    borderBottom: 'none',
}));

export const TableRowBody = styled(MuiTableRow)(() => ({
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

export const Table = styled(MuiTable)(() => ({
    borderSpacing: '0 18px',
    borderCollapse: 'separate',
    maxWidth: '800px',
    margin: '0 auto',
    fontWeight: '600',
}));
