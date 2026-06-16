import type { PropsWithChildren } from "react";

export default function TextHoverHighlight({
  children,
  className,
  hoverTextColor,
  hoverBgColor,
}: PropsWithChildren<{
  hoverTextColor: string;
  hoverBgColor: string;
  className?: string;
}>) {
  return (
    <span
      className={`relative inline-block transition-colors duration-300 hover:text-(--hover-text) hover:before:bg-(--hover-bg) group-hover:text-(--hover-text) group-hover:before:bg-(--hover-bg) before:content-[''] before:absolute before:-inset-x-1 before:-inset-y-0.25 before:transition-transform before:duration-300 before:origin-left before:scale-x-0 group-hover:before:scale-x-100 before:-z-1 z-1 ${className ?? ""}`}
      style={
        {
          "--hover-text": hoverTextColor,
          "--hover-bg": hoverBgColor,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
