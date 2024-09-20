'use client';
import Signup from '@/app/components/ui/pages/auth/signup/Index';
import { AuthPageContainer } from '@/app/components/ui/pages/auth/styles/Index';

const AuthPage: React.FC = () => {
    return (
        <AuthPageContainer>
            <Signup />
        </AuthPageContainer>
    );
};

export default AuthPage;
