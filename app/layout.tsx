import type { Metadata } from "next";
import { Outfit, Sarina } from "next/font/google";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
