import { notFound } from 'next/navigation';
import db from '@wa/prisma';
import { Header } from '@wa/common-ui';

type Props = {
  params: {
    id: string;
  };
};

export default async function OfferPage({ params: { id } }: Props) {
  // throw new Error('Oh no!');
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
      <Header>{offer.title}</Header>
      <p>{offer.description}</p>
    </div>
  );
}
