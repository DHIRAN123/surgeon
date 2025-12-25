
'use server';

import { z } from 'zod';
import clientPromise from '@/lib/mongodb';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(values: unknown): Promise<{ success: boolean; error?: string }> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.issues.map(issue => issue.message).join(' ');
    console.error('Form validation failed:', errorMessages);
    return {
      success: false,
      error: errorMessages || 'Invalid form data.',
    };
  }

  const { name, email, phone, message } = validatedFields.data;
  const submissionData = {
    name,
    email,
    phone: phone || '',
    message,
    createdAt: new Date(),
  };

  console.log('Attempting to save the following data to MongoDB:', submissionData);

  try {
    const client = await clientPromise;
    const db = client.db();
    
    const result = await db.collection('contacts').insertOne(submissionData);

    console.log('Successfully saved to MongoDB. Inserted ID:', result.insertedId);

    return { success: true };
  } catch (error) {
    console.error('Error writing to MongoDB:', error);
    return {
      success: false,
      error: 'Could not submit your message. Please try again later.',
    };
  }
}
