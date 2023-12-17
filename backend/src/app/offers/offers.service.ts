import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class OffersService {
  constructor(private db: PrismaService) {}

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
}
