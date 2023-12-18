import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OfferActivatedEvent } from '../events/offer-activated.event';

@Injectable()
export class OfferListener {
  @OnEvent('offer.activated')
  handleOfferActivatedEvent(event: OfferActivatedEvent) {
    // handle and process "OfferActivatedEvent" event
    console.log(event);
  }
}
