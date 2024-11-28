import { create } from "zustand";

interface ThemeStore {
  useDark: boolean;
  currentPage: number;
  toggleTheme: () => void;
  setCurrentPage: (page: number) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  useDark: false,
  currentPage: 0,
  toggleTheme: () => set((state) => ({ useDark: !state.useDark })),
  setCurrentPage: (page: number) =>
    set(() => ({ currentPage: page })),
}));
