import React from 'react';
import { ButtonProps } from '@mui/material/Button';

export interface RegisterButtonProps extends ButtonProps {
    children: React.ReactNode;
}

import { RegisterButtonStyled } from '@/app/components/ui/common/elements/button/styles/RegisterButton';

const RegisterButton: React.FC<RegisterButtonProps> = ({ children, ...props }) => {
    return <RegisterButtonStyled {...props}>{children}</RegisterButtonStyled>;
};

export default RegisterButton;
