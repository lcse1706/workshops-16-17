import { Injectable } from '@nestjs/common';

@Injectable()
export class OffersService {
  getOffers(): string {
    return 'This action returns all offers';
  }
}
