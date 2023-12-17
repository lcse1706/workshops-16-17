import { JobOffer } from '@wa/prisma';
import { api } from './config';

export const offersList = async () => {
  // return api.get<JobOffer[]>('/offers'); // http://localhost:3000/api/offers

  try {
    const response = await api.get<JobOffer[]>('/offers'); // http://localhost:3000/api/offers

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error');
  }
};

export const activateOffer = async (id: string) => {
  return api.patch(`/offers/${id}/activate`);
};
