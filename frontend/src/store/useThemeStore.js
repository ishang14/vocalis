import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("vocalis-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("vocalis-theme", theme);
    set({ theme });
  },
}));
