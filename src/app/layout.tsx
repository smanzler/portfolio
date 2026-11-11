import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { Header } from "@/features/layout/components/header";

export const metadata: Metadata = {
  title: "Simon Manzler | Portfolio",
  description:
    "Simon Manzler's portfolio website showcasing his projects and skills. Built with Next.js, TailwindCSS, and Shadcn UI.",
  metadataBase: new URL("https://simonmanzler.com"),
  icons: {
    icon: "/simon-icon.png",
  },
  openGraph: {
    title: "Simon Manzler | Portfolio",
    description:
      "Simon Manzler's portfolio website showcasing his projects and skills. Built with Next.js, TailwindCSS, and Shadcn UI.",
    images: [
      {
        url: "/simon-icon.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={`${fontVariables} antialiased`}
      >
        <main className="pt-20 pb-10">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
