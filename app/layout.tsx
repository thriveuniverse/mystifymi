import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mystifymi",
  description: "Untangling thoughts, one post at a time – Mirrie",
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
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
          <nav className="max-w-4xl mx-auto p-6 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              mystifymi
            </a>
            <div className="space-x-8 text-lg">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* You can add a footer here later */}
      </body>
    </html>
  );
}