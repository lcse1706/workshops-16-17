import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { PrismaService } from './prisma.service';
import { OfferActivatedListener } from './listeners/offers.listener';

@Module({
  providers: [OffersService, PrismaService, OfferActivatedListener],
  controllers: [OffersController],
})
export class OffersModule {}
