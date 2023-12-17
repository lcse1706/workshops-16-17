import { NextResponse } from 'next/server';
import db from '@wa/prisma';
import { revalidatePath } from 'next/cache';

type FormValues = {
  title: string;
  description: string;
  salary_from: number;
  salary_to: number;
  email: string;
};

export async function POST(request: Request) {
  // const data = request.body;
  const data: FormValues = await request.json();

  const offer = await db.jobOffer.create({
    data: {
      title: data.title,
      description: data.description,
      salary_from: data.salary_from,
      salary_to: data.salary_to,
      // salary_currency: 'PLN',
    },
  });
  console.log({ data, offer });

  revalidatePath('/offer');

  return NextResponse.json(offer);
}
