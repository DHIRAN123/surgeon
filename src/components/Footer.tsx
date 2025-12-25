
import Link from "next/link";
import { Mail, Instagram } from "lucide-react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <Link href="/" className="flex items-center space-x-2">
              <Image src="https://i.postimg.cc/CxD6kYq7/RK-Logo-removebg-preview.png" alt="RK Hair Studio Logo" width={200} height={50} className="h-auto" />
            </Link>
            <p className="text-muted-foreground text-base">
              Your trusted partner for a healthy and beautiful smile.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-2 md:grid-cols-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link href="/#about" className="text-base text-muted-foreground hover:text-primary">About</Link></li>
                  <li><Link href="/#services" className="text-base text-muted-foreground hover:text-primary">Services</Link></li>
                  <li><Link href="/#gallery" className="text-base text-muted-foreground hover:text-primary">Gallery</Link></li>
                  <li><Link href="/contact" className="text-base text-muted-foreground hover:text-primary">Contact Us</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <Mail className="flex-shrink-0 h-6 w-6 text-muted-foreground" />
                    <a href="mailto:rohitavirayadav2025@outlook.com" className="ml-3 text-base text-muted-foreground hover:text-primary">rohitavirayadav2025@outlook.com</a>
                  </li>
                  <li className="flex">
                    <Instagram className="flex-shrink-0 h-6 w-6 text-muted-foreground" />
                    <a href="https://www.instagram.com/rohitavirayadav?igsh=dG5sZmRvdHFpaG9i" target="_blank" rel="noopener noreferrer" className="ml-3 text-base text-muted-foreground hover:text-primary">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} RK Hair Studio. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Made by Vinnifinni
          </p>
        </div>
      </div>
    </footer>
  );
}
