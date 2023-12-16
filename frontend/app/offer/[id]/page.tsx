import { notFound } from 'next/navigation';
import db from '@wa/prisma';

type Props = {
  params: {
    id: string;
  };
};

export default async function OfferPage({ params: { id } }: Props) {
  if (!id) {
    notFound();
  }

  const offer = await db.jobOffer.findUnique({
    where: { id },
  });

  if (!offer) {
    notFound();
  }

  return (
    <div>
      <h1>{offer.title}</h1>
      <p>{offer.description}</p>
    </div>
  );
}
