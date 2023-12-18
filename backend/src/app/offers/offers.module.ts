import { Module } from '@nestjs/common';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { PrismaService } from './prisma.service';
import { OfferListener } from './listeners/offers.listener';

@Module({
  providers: [OffersService, PrismaService, OfferListener],
  controllers: [OffersController],
})
export class OffersModule {}
