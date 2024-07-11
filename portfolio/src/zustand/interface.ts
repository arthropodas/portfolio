import { create } from 'zustand';

type Theme = "light" | "dark";

export interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light', // Initialize theme from localStorage
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme); // Update localStorage with new theme
    return { theme: newTheme };
  }),
}));
