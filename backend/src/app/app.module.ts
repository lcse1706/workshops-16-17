import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [EventEmitterModule.forRoot(), OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
