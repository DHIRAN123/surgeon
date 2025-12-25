
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactClientPage } from './contact-client-page';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ContactClientPage />
      </main>
      <Footer />
    </div>
  );
}
