import type { PropsWithChildren } from "react";

export default function TextGradient({
  children,
  startColor,
  middleColor,
  endColor,
  animate,
  className,
}: PropsWithChildren<{
  startColor: string;
  middleColor: string;
  endColor: string;
  animate?: boolean;
  className?: string;
}>) {
  return (
    <span
      className={`bg-linear-to-r from-(--start-color) via-(--middle-color) to-(--end-color) bg-clip-text text-transparent ${animate ? "animate-gradient bg-size-[200%_auto]" : ""} ${className ?? ""}`}
      style={
        {
          "--start-color": startColor,
          "--middle-color": middleColor,
          "--end-color": endColor,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
