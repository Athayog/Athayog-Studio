import { Hero, Content, TrainingGrid, AdvantagesGrid, Pricing } from '@/app/(routes)/personal-session/_sections';

export const metadata = {
    title: 'Personal Sessions | Athayog',
    openGraph: {
        title: 'Athayog',
        description: 'Athayog Living',
    },
};

const Page = () => {
    return (
        <>
            <Hero />
            <Content />
            <TrainingGrid />
            <AdvantagesGrid />
            <Pricing />
        </>
    );
};

export default Page;
