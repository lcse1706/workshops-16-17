import { api } from './config';

export const offersList = () => {
  return api.get('/offers'); // http://localhost:3000/api/offers
};
