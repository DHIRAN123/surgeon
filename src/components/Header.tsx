
"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact Us' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        {/* Desktop View */}
        <div className="hidden md:flex mr-4 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="https://i.postimg.cc/CxD6kYq7/RK-Logo-removebg-preview.png" alt="RK Hair Studio Logo" width={150} height={20} className="h-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-end space-x-2">
           <Button asChild>
            <Link href="/contact">Book Appointment</Link>
          </Button>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden items-center justify-between w-full">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(true)}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                        <Image src="https://i.postimg.cc/CxD6kYq7/RK-Logo-removebg-preview.png" alt="RK Hair Studio Logo" width={150} height={20} className="h-auto" />
                      </Link>
                  </div>
                  <nav className="flex-grow px-4 py-6">
                    <ul className="space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-lg font-medium transition-colors hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="p-4 mt-auto border-t">
                    <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                      <Link href="/contact">Book Appointment</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="https://i.postimg.cc/CxD6kYq7/RK-Logo-removebg-preview.png" alt="RK Hair Studio Logo" width={150} height={20} className="h-auto" />
                </Link>
            </div>
            
            <div className="w-10"></div>
        </div>

      </div>
    </header>
  );
}
