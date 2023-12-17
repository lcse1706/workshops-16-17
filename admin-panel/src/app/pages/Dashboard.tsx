import { useQuery } from '@tanstack/react-query';
import { Button, Header } from '@wa/common-ui';
import { offersList, activateOffer } from '../services/offers';
import { MouseEvent } from 'react';

export const DashboardPage = () => {
  // throw new Error('Oh no!');
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['dashboard'],
    queryFn: offersList,
  });
  // data: { headers, config, data }
  // const offers = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  // JobOffer['id']
  const handleActivate =
    (id: string) => async (_event: MouseEvent<HTMLButtonElement>) => {
      await activateOffer(id);
      refetch();
    };

  return (
    <div>
      <Header>Dashboard</Header>
      {data &&
        data.map((offer) => (
          <div key={offer.id} className="mb-4">
            <h3 className="text-xl">{offer.title}</h3>
            <p>{offer.description}</p>
            <p>Active: {offer.is_active ? 'Yes' : 'No'}</p>
            <p>
              {!offer.is_active && (
                <Button label="Activate" onClick={handleActivate(offer.id)} />
              )}
            </p>
          </div>
        ))}
    </div>
  );
};
