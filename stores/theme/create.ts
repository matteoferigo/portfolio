import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themes = ["light", "dark"] as const;

type Theme = (typeof themes)[number];

type ThemeState = {
  theme: Theme;
};

type ThemeActions = {
  toggleTheme(): void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: themes[0],
      toggleTheme() {
        set({ theme: get().theme === themes[0] ? themes[1] : themes[0] });
      },
    }),
    {
      name: "theme",
    },
  ),
);
