import { useQuery } from '@tanstack/react-query';
import { Header } from '@wa/common-ui';
import { offersList } from '../services/offers';

export const DashboardPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['dashboard'],
    queryFn: offersList,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Header>Dashboard</Header>
      {/* {data && data.map((offer) => <div>{offer.title}</div>)} */}
    </div>
  );
};
