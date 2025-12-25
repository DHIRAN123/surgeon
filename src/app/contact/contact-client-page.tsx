
'use client';

import { ContactForm } from './contact-form';
import { Mail, Calendar, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ContactClientPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help. Contact us for appointments, questions, or any inquiries.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary p-3 rounded-full">
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
                                <div className="bg-secondary p-3 rounded-full">
                                    <Instagram className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Instagram</h3>
                                    <a href="https://www.instagram.com/rohitavirayadav?igsh=dG5sZmRvdHFpaG9i" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        Follow us on Instagram
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary p-3 rounded-full">
                                    <Calendar className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Schedule an Appointment</h3>
                                    <Button asChild>
                                        <Link href="https://your-new-scheduling-link.com" target="_blank" rel="noopener noreferrer">
                                            Book an Appointment
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
