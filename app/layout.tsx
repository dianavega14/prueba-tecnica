import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/starfield";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Star Wars Movies",
  description: "A list of Star Wars movies fetched from the SWAPI API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Starfield /> {/* adding animated starfield background */}
        <div className="relative z-10">
          {" "}
          {/* ensuring content appears above stars */}
        </div>
      </body>
    </html>
  );
}
