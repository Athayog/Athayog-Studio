import { create } from 'zustand';

interface ThemeState {
    navigationVariant: string;
    setNavigationVariant: (navigationVariant: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    navigationVariant: 'black',
    setNavigationVariant: (variant) => set({ navigationVariant: variant }),
}));

export default useThemeStore;
