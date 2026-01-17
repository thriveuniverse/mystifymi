import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Ms_Madi } from "next/font/google";
import "./globals.css";
import MobileMenu from './components/MobileMenu';  

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signatureFont = Ms_Madi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "mystifymi",
  description: "Untangling thoughts, one post at a time – Mirrie",
  openGraph: {
    title: "What if abundance really is the answer?",
    description: "Exploring Elon Musk's vision of a world driven by passion, not survival.",
    images: "/images/hero.jpg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      {/* head unchanged */}
      <body className="...">
        <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto p-6 flex justify-between items-center">
            <Link href="/" className="text-4xl font-normal tracking-wide" style={{ fontFamily: "var(--font-signature)" }}>
              MystifyMi
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex space-x-8 text-lg">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/manifesto">Manifesto</Link>
              <Link href="/resources">Resources</Link>
            </div>

 <div className="hidden md:flex space-x-8 text-lg">
    {/* ...your Links... */}
  </div>

  {/* Mobile menu (hamburger + dropdown) */}
  <div className="md:hidden">
    <MobileMenu />
  </div>            
          </nav>

          
        </header>

        <main>{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}