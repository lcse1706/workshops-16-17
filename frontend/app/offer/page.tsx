import { Header } from '@wa/common-ui';
import db from '@wa/prisma';
import Link from 'next/link';

// import { revalidatePath } from 'next/cache';
// revalidatePath('/offer');

export default async function Offer() {
  const offers = await db.jobOffer.findMany({
    where: { is_active: true },
    orderBy: { created_at: 'desc' },
    include: { company: true },
  });

  return (
    <div>
      <Header>Offers</Header>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id} className="mt-4">
            <Link href={`/offer/${offer.id}`} className="text-xl">
              {offer.title}
            </Link>
            <p>{offer.company?.name}</p>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
