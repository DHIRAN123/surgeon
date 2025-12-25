
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactForm } from './contact/contact-form';
import { Mail, Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
              <div className="space-y-8">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                  Contact Us
                </h2>
                <p className="text-lg text-muted-foreground">
                  We're here to help. Contact us for appointments, questions, or any inquiries.
                </p>
                <div className="space-y-4">
                   <div className="flex items-start space-x-4">
                    <div className="bg-background p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email Address</h3>
                      <a href="mailto:rohitavirayadav2025@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                        rohitavirayadav2025@outlook.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-background p-3 rounded-full">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Instagram</h3>
                      <a href="https://www.instagram.com/rohitavirayadav?igsh=dG5sZmRvdHFpaG9i" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        Follow us on Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
