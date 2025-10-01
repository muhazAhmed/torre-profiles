import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DefaultSeoWrapper from "@/components/DefaultSeoWrapper";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Torre Profiles",
  description: "Explore and visualize profiles using Torre APIs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-[#0d1110] via-[#0f1a17] to-[#0b2520] min-h-screen`}
      >
        <DefaultSeoWrapper />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
