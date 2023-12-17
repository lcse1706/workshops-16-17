import { JobOffer, JobOfferSchema } from '@wa/prisma';
import { api } from './config';
import { z } from 'zod';

// const schema = z.array(JobOfferSchema);

export const schema = z.array(
  z.object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    is_active: z.boolean(),
    phone: z.coerce.number(),
  })
);

export const offersList = async () => {
  // return api.get<JobOffer[]>('/offers'); // http://localhost:3000/api/offers

  try {
    const response = await api.get<JobOffer[]>('/offers'); // http://localhost:3000/api/offers

    // 1) parse data - throw an error
    // const parsedData = schema.parse(response.data); // remove outside schema
    // return parsedData;

    // 2) safe parse - not throw an error
    // const parsedData = schema.safeParse(response.data);
    // if (!parsedData.success) {
    //   throw new Error('Error');
    // }

    // 3) iterate elem by elem
    const data = response.data.flatMap((offer) => {
      try {
        const parsedOffer = JobOfferSchema.parse(offer);
        return [parsedOffer];
      } catch (error) {
        console.error(error);
        return [];
      }
    });

    return data;
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      console.log('Yes, ZodError!');
    }

    // throw new Error('Error');
  }
};

export const activateOffer = async (id: string) => {
  return api.patch(`/offers/${id}/activate`);
};
