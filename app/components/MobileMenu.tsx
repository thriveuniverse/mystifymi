"use client";  // ← This file is client-only

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t">
          <div className="flex flex-col items-center py-6 space-y-6 text-lg">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/manifesto" onClick={() => setIsMenuOpen(false)}>Manifesto</Link>
            <Link href="/resources" onClick={() => setIsMenuOpen(false)}>Resources</Link>
          </div>
        </div>
      )}
    </>
  );
}