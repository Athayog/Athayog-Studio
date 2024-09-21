import HomePage from '@/app/(routes)/home';

export const metadata = {
    title: 'Athayog',
    openGraph: {
        title: 'Athayog',
        description: 'Athayog Living',
    },
};

export default function Home() {
    return <HomePage />;
}
