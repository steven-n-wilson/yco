'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <footer className="border-t border-background/10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-background uppercase tracking-[0.3em]">
              Young Catholics Ottawa
            </p>
            <p className="text-base text-background/70">
              info@yco.ca · Ottawa, Ontario
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-background/60">
            <Link href="/about" className="hover:text-background">
              About
            </Link>
            <span className="text-background/20">·</span>
            <Link href="/events" className="hover:text-background">
              Events
            </Link>
            <span className="text-background/20">·</span>
            <Link href="/contact" className="hover:text-background">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-background/10 text-center text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} YCO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

