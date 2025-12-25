
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactsDataPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Contact form submissions are now being saved to your MongoDB database.</p>
            <p>Please check your 'Cluster0' database in your MongoDB Atlas account to view the submissions in the 'contacts' collection.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
