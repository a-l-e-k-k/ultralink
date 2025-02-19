"use server"
import z from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        phone?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    id: z.string(),
    name: z.string({
        invalid_type_error: 'Please enter a valid name.',
    }).min(1, "Please enter a valid name."),
    email: z.string().email({message: "Please enter a valid email."}),
    phone: z.string().regex(/^\d{10}$/, "Invalid U.S. phone number (must be 10 digits)"),
    message: z.string({
        invalid_type_error: 'Please enter a valid message.',
    }).min(15, "Message must be at least 15 characters long."),
    date: z.string(),
});

const CreateContact = FormSchema.omit({ id: true, date: true });

export async function createContact(prevState: State, formData: FormData) {

    // Validate form using Zod
    const validatedFields = CreateContact.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        console.log("Incongruent Fields. Failed to Create Invoice.")
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    // Prepare data for insertion into the database
    const { name, email, phone, message } = validatedFields.data;

    // const date = new Date().toISOString().split('T')[0];

    // Insert data into the database
    try {
        await sql`
      INSERT INTO contacts (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone}, ${message})
    `;
    } catch (error) {
        // If a database error occurs, return a more specific error.
        console.log("Whoops! Something went wrong.", error)
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

    // Revalidate the cache for the invoices page and redirect the user.
    // revalidatePath('/home');
    // redirect('/#home');
    return {
        message: 'Submited Successfully!',
    };
}