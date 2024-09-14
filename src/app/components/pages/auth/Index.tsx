'use client';
import Signup from '@/app/components/pages/auth/signup/Index';
import { AuthPageContainer } from '@/app/components/pages/auth/styles/Index';

const AuthPage: React.FC = () => {
    return (
        <AuthPageContainer>
            <Signup />
        </AuthPageContainer>
    );
};

export default AuthPage;
