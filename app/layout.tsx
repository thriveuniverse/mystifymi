import type { Metadata } from "next";
import Link from "next/link";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-w bg-white/80 backdrop-blur sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto p-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              mystifymi
            </Link>

            <div className="space-x-8 text-lg">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>
        <footer className="border-t mt-20 py-10">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()}  mystifymi – All thoughts my own ✨
          </div>
        </footer>
      </body>
    </html>
  );
}
