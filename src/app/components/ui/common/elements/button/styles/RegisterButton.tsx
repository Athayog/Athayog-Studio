import theme from '@/app/components/ui/theme';
import { Button as MuiButton, styled } from '@mui/material';

export const RegisterButtonStyled = styled(MuiButton)(() => ({
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.44)',
    padding: '17.467px 23.289px',
    borderRadius: '46px',
    backgroundColor: theme.palette.primary.main,
    height: '56px',
    width: ' 243px',
    color: 'white',
    fontSize: '24px',
}));
