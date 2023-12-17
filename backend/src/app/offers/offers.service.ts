import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from './prisma.service';
import { OfferActivatedEvent } from './events/offer-activated.event';

@Injectable()
export class OffersService {
  constructor(private db: PrismaService, private eventEmitter: EventEmitter2) {}

  getOffers() {
    return this.db.jobOffer.findMany({
      orderBy: { created_at: 'desc' },
      include: { company: true },
    });
  }

  getOfferById(id: string) {
    return this.db.jobOffer.findUnique({
      where: { id },
    });
  }

  async activateOffer(id: string) {
    const activatedOffer = await this.db.jobOffer.update({
      where: { id },
      data: { is_active: true },
    });

    const activationEvent = new OfferActivatedEvent();
    activationEvent.id = id;
    activationEvent.title = activatedOffer.title;
    activationEvent.description = activatedOffer.description;

    this.eventEmitter.emit('offer.activated', activationEvent);

    return activatedOffer;
  }
}
