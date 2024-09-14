import { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';

const ScrollListener = () => {
    const setIsScrolled = useThemeStore((state: { setIsScrolled: (value: boolean) => void }) => state.setIsScrolled);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setIsScrolled]);

    return null;
};

export default ScrollListener;
