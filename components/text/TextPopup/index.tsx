"use client";

import { useEffect, useRef, type PropsWithChildren } from "react";

export default function TextPopup({ children, className, as: Tag = 'div', delay }: PropsWithChildren<{ className?: string, as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p', delay: number }>) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) ref.current.dataset.visible = 'true'
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Tag className={`${className ?? ''} overflow-hidden`}>
      <span ref={ref} className="block duration-500 delay-100 transition-all translate-y-full opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100">
        {children}
      </span>
    </Tag>
  )
}