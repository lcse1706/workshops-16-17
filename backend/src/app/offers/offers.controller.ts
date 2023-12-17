import { Controller, Get } from '@nestjs/common';
import { OffersService } from './offers.service';

@Controller('offers') // (GET) http://localhost:3000/api/offers
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  offersList() {
    const offers = this.offersService.getOffers();

    return { offers };
  }
}
