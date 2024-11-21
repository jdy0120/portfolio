import { create } from "zustand";

interface ThemeStore {
  useDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  useDark: false,
  toggleTheme: () => set((state) => ({ useDark: !state.useDark })),
}));
