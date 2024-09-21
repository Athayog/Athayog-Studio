import AccountPage from '@/app/components/ui/pages/auth/account/Index';
import { Box } from '@mui/material';

const Page = (): JSX.Element => (
    <Box
        sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <AccountPage />
    </Box>
);

export default Page;
