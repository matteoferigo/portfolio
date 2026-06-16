"use client";

import { useThemeStore } from "@/stores/theme/create";
import type { PropsWithChildren } from "react";

export default function ThemeContext({ children }: PropsWithChildren) {
  const { theme } = useThemeStore();

  return <div className={theme}>{children}</div>;
}
