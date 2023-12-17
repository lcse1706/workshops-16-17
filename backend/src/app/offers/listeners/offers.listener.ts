import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OfferActivatedEvent } from '../events/offer-activated.event';

@Injectable()
export class OfferActivatedListener {
  @OnEvent('offer.activated')
  handleOrderCreatedEvent(event: OfferActivatedEvent) {
    // handle and process "OfferActivatedEvent" event
    console.log(event);
  }
}
