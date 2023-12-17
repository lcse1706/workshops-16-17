import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { off } from 'process';
import { CreateCompanyDto } from './dtos/CreateCompany.dto';

@Controller('offers') // http://localhost:3000/api/offers
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Get()
  async offersList() {
    // (GET) http://localhost:3000/api/offers
    const offers = await this.offersService.getOffers();

    return offers;
  }

  @Get(':id') // (GET) http://localhost:3000/api/offers/1
  async offerDetails(@Param('id') id: string) {
    const offer = await this.offersService.getOfferById(id);

    if (!offer) {
      // throw new NotFoundException();
      throw new HttpException('Offer not found', HttpStatus.NOT_FOUND);
    }

    return offer;
  }

  @Patch(':id/activate') // (PATCH) http://localhost:3000/api/offers/1/activate
  async activateOffer(@Param('id') id: string) {
    try {
      await this.offersService.activateOffer(id);
      return { status: 'ok' };
    } catch {
      throw new HttpException('Offer not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('company')
  createCompany(@Body() company: CreateCompanyDto) {
    // console.log({ company });
    return { company };
  }
}
