import { ContactFormPayload, ContactFormResponse } from "@/types/alltype";

export async function submitContactForm(formData: ContactFormPayload): Promise<ContactFormResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact-form`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const responseData: ContactFormResponse = await res.json();

  if (!res.ok || !responseData.status) {
    throw new Error(responseData.message || 'Formu göndərərkən xəta baş verdi.');
  }

  return responseData;
}