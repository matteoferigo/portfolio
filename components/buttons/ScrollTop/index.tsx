"use client";

import { useState } from "react";
import { InView } from "react-intersection-observer";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);
  const animationClass =
    "disabled:opacity-0 transition-opacity duration-300 ease-in-out";

  return (
    <>
      <InView
        as="div"
        className="w-full h-0"
        onChange={(inView) => {
          setShowButton(!inView);
        }}
      />
      <button
        className={`fixed bottom-4 right-4 z-50 size-9 flex justify-center items-center rounded-full shadow-md ${animationClass} text-white border border-(--from) bg-linear-to-b from-(--from) to-(--to) before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:border-2 before:border-(--to) before:bg-none`}
        disabled={!showButton}
        title="Scroll on top"
        style={
          {
            "--from": "var(--color-zinc-800)",
            "--to": "var(--color-zinc-600)",
          } as React.CSSProperties
        }
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <ChevronUp className="size-4 -mt-0.5" />
      </button>
    </>
  );
}

function ChevronUp(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 -4.5 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Scroll top"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-521.000000, -1202.000000)" fill="currentColor">
          <path
            d="M544.345,1213.39 L534.615,1202.6 C534.167,1202.15 533.57,1201.95 532.984,1201.99 C532.398,1201.95 531.802,1202.15 531.354,1202.6 L521.624,1213.39 C520.797,1214.22 520.797,1215.57 521.624,1216.4 C522.452,1217.23 523.793,1217.23 524.621,1216.4 L532.984,1207.13 L541.349,1216.4 C542.176,1217.23 543.518,1217.23 544.345,1216.4 C545.172,1215.57 545.172,1214.22 544.345,1213.39"
            id="chevron-up"
          ></path>
        </g>
      </g>
    </svg>
  );
}
