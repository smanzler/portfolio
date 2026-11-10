import type { Metadata } from "next";
import { Caveat, Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/components/header";
import { Footer } from "@/features/layout/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}
      >
        <main className="py-20 px-6 max-w-3xl mx-auto">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
