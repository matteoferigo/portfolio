import type { Metadata } from "next";
import { Outfit, Sarina } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  weight: ["100", "500"],
});
const sarinaSans = Sarina({
  variable: "--font-sarina-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Matteo Ferigo | Frontend Engineer",
  description: "Portfolio of Matteo Ferigo, passionate frontend engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfitSans.variable} ${sarinaSans.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
